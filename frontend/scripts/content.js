import { createClient } from "webdav";
import path from "node:path";
import fs from 'node:fs/promises';

const CONTENT_PATH = './src/content/pages/';

async function getEnvVariables() {
  const env_raw = await fs.readFile('.env').then(b => b.toString());
  const env = {};
  for (const match of env_raw.matchAll(/^NEXTCLOUD_(?<key>.*)=(?<value>.*)$/gm)) {
    const { key, value } = match.groups;
    env[key] = value;
  }
  return env;
}

async function copy() {
  const env = await getEnvVariables();
  const client = createClient(`${env.BASE_URL}/remote.php/dav/files/${env.USERNAME}`, {
      username: env.USERNAME,
      password: env.PASSWORD
  });

  const files = await client.getDirectoryContents(env.PATH, { deep: true});
  console.log(`Found ${files.filter(f => f.type === 'file').length} files in ${files.filter(f => f.type === 'directory').length} directories.`);

  for (const file of files) {
    if (file.type !== 'file')
      continue
    const buff = await client.getFileContents(file.filename);
    const filePath = file.filename.replace(`${env.PATH}/`, '')
    const target = `${CONTENT_PATH}/${filePath}`;
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, buff);
    console.log(`Copied ${filePath}`);
  }
}

async function clean() {
  await fs.rm(CONTENT_PATH, { recursive: true });
  console.log('Removed files');
}

export { copy, clean };
