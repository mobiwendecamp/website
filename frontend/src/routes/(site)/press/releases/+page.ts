import type {PageLoad} from './$types';
import {getLanguageFromUrl, loadPage} from "$lib/utils";
import Sidebar from "./Sidebar.svelte";


export const load = (async ({depends, url}) => {
    const releases = getPressReleases();
    return {
        ...await loadPage({
            page: 'press/releases',
            language: getLanguageFromUrl(url.pathname)
        }),
        releases,
        sidebar: Sidebar
    };

}) satisfies PageLoad;


function getPressReleases(offset = 0, take: null | number = null) {
    const paths: Record<string, Record<string, unknown>> = import.meta.glob(
        '$content/pages/press/releases/*/de.md',
        {eager: true}
    );

    take = take ?? Object.keys(paths).length;

    return Object.entries(paths)
        .slice(offset, offset + take)
        .map(
            ([path, file]) =>
                ({
                    ...file.metadata,
                    slug: path.split('/').at(-2),
                    date: new Date(file.metadata.date)
                })
        )
        .filter((post) => post.published)
        .sort((a, b) => b.date.valueOf() - a.date.valueOf());
}
