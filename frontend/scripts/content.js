import { createClient } from "webdav";
import path from "node:path";
import fs from 'node:fs/promises';

const CONTENT_PATH = './src/content/pages/';

function resetLine() {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
}

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

  process.stdout.write('Getting list of files...');
  const files = await client.getDirectoryContents(env.PATH, { deep: true});
  resetLine();
  process.stdout.write(`Found ${files.filter(f => f.type === 'file').length} files in ${files.filter(f => f.type === 'directory').length} directories.\n`);

  for (const file of files) {
    if (file.type !== 'file')
      continue
    const buff = await client.getFileContents(file.filename);
    const filePath = file.filename.replace(`${env.PATH}/`, '')
    const target = `${CONTENT_PATH}/${filePath}`;
    process.stdout.write(`Copying ${filePath}...`);
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, buff);
    resetLine();
    process.stdout.write(`Copied ${filePath}\n`);
  }
}

async function clean() {
  process.stdout.write('Removing files...');
  await fs.rm(CONTENT_PATH, { recursive: true });
  resetLine();
  process.stdout.write('Removed files\n');
}

export { copy, clean };
