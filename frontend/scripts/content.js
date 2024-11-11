import { createClient } from "webdav";
import path from "node:path";
import fs from 'node:fs/promises';

const CONTENT_PATH = './src/content/pages/';
const NEXTCLOUD_PATH = '/Collectives/noIAA Website/content';

function resetLine() {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
}

async function copy() {
  const client = createClient('https://cloud.systemli.org/remote.php/dav/files/fili', {
      username: 'fili',
      password: 'JbmLn-RoiKt-FxCJP-8PqK3-KXDb5'
  });

  process.stdout.write('Getting list of files...');
  const files = await client.getDirectoryContents(NEXTCLOUD_PATH, { deep: true});
  resetLine();
  process.stdout.write(`Found ${files.filter(f => f.type === 'file').length} files in ${files.filter(f => f.type === 'directory').length} directories.\n`);

  for (const file of files) {
    if (file.type !== 'file')
      continue
    const buff = await client.getFileContents(file.filename);
    const filePath = file.filename.replace(`${NEXTCLOUD_PATH}/`, '')
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
