import {createClient} from "webdav";
import path from "node:path";
import fs from 'node:fs/promises';
import * as toml from "@std/toml";

const TRANSLATION_DIR = '/Collectives/noIAA Website/data/translations/'
const DIRS_TO_COPY = [
    {from: '/Collectives/noIAA Website/content/', to: './src/content/pages/'},
    {from: '/Collectives/noIAA Website/assets/', to: './src/content/assets/'}
];

async function getEnvVariables() {
    const env_raw = await fs.readFile('.env').then(b => b.toString());
    const env = {};
    for (const match of env_raw.matchAll(/^NEXTCLOUD_(?<key>.*)=(?<value>.*)$/gm)) {
        const {key, value} = match.groups;
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

    console.log('Sync Translations...')
    await syncTranslations(client);
    console.log('Translation Synced.')

    DIRS_TO_COPY.forEach(({from, to}) => {
        copyFrom(from, to, client);
    })
}

async function copyFrom(from, to, client) {
    const files = (await client.getDirectoryContents(from, {deep: true}))
        .filter(f => f.type === 'file')

    console.log(`Found ${files.length} files.`);

    for (const file of files) {
        const buff = await client.getFileContents(file.filename);
        const filePath = file.filename.replace(`${from}`, '')
        const target = `${to}/${filePath}`;
        await fs.mkdir(path.dirname(target), {recursive: true});
        await fs.writeFile(target, buff);
        console.log(`Copied ${filePath}`);
    }

    console.log(`Copy from "${from}" to "${to}" done.`);
}

async function syncTranslations(client) {
    const languages = ['de', 'en'];
    for (const language of languages) {
        const localPath = path.resolve('translations/' + language + '.json');
        const localJsonString = await fs.readFile(localPath);
        const localTranslations = JSON.parse(localJsonString.toString());

        const remotePath = TRANSLATION_DIR + language + '.md';

        let rawContent = (await client.getFileContents(remotePath));
        const tomlString = rawContent.toString().split('```toml')[1]?.replace('```', '')
        const remoteTranslations = toml.parse(tomlString);

        Object.keys(localTranslations).forEach((key) => {
            if (!(key in remoteTranslations)) {
                return;
            }

            localTranslations[key] = remoteTranslations[key];
        })

        const syncedYamlString = toml.stringify(localTranslations);
        await client.putFileContents(remotePath, '```toml\n' + syncedYamlString + '\n```');
        await fs.writeFile(localPath, JSON.stringify(localTranslations, 0, 2));
    }
};

async function clean() {
    DIRS_TO_COPY.forEach(({to}) => {
        fs.rm(to, {recursive: true});
    })
    console.log('Removed files');
}

export {copy, clean};
