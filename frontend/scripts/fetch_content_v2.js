import fs from 'node:fs/promises';
import file from 'node:fs';
import request from 'request';
import StreamZip from "node-stream-zip";


async function getEnvVariables() {
    const env_raw = await fs.readFile('.env').then(b => b.toString());
    const env = {};
    for (const match of env_raw.matchAll(/^SCRIPT_(?<key>.*)=(?<value>.*)$/gm)) {
        const {key, value} = match.groups;
        env[key] = value;
    }
    return env;
}

async function copy() {
    const env = await getEnvVariables();

    if (!file.existsSync('tmp')) {
        file.mkdirSync('tmp');
    }

    request(env.BACKEND_WEBSITE_CONTENT)
        .pipe(file.createWriteStream('tmp/content.zip'))
        .on('close', async function () {
            console.log('Zip File written!');
            const zip = new StreamZip.async({file: 'tmp/content.zip', skipEntryNameValidation: true});
            console.log(`Extracting entries`);
            const count = await zip.extract(null, 'tmp');
            console.log(`Extracted ${count} entries`);
            await zip.close();

            if (file.existsSync('./src/content/pages')) {
                await fs.rm('./src/content/pages', {recursive: true});
            }
            file.rename('./tmp/content', './src/content/pages',
                (err) => {
                    if (err) throw err;
                    console.log('Pages Copied!');
                })

            if (file.existsSync('./src/content/assets')) {
                await fs.rm('./src/content/assets', {recursive: true});
            }

            file.rename('./tmp/assets', './src/content/assets',
                (err) => {
                    if (err) throw err;
                    console.log('Assets Copied!');
                })

            if (file.existsSync('./translations')) {
                await fs.rm('./translations', {recursive: true});
            }
            file.rename('./tmp/translations', './translations',
                (err) => {
                    if (err) throw err;
                    console.log('Translations Copied!');
                })

        });
}

export {copy};
