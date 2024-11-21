import type {PageLoad} from './$types';
import {fetchPages, getDynamicPages, getLanguageFromUrl, loadPage} from "$lib/utils";
import Sidebar from "./Sidebar.svelte";
import * as t from "$lib/paraglide/messages.js";
import {availableLanguageTags} from "$lib/paraglide/runtime";


export const load = (async ({depends, url}) => {
    const language = getLanguageFromUrl(url.pathname);
    const releases = getPressReleases(language);

    return {
        ...await loadPage({
            page: 'press/releases',
            language
        }),
        releases,
        sidebar: Sidebar,
    };

}) satisfies PageLoad;


function getPressReleases(language: typeof availableLanguageTags[number], offset = 0, take: null | number = null) {
    const releases: Record<string, Record<string, unknown>> = import.meta.glob(
        '$content/pages/press/releases/*/de.md',
        {eager: true}
    );

    const conferences: Record<string, Record<string, unknown>> = import.meta.glob(
        '$content/pages/press/conferences/*/de.md',
        {eager: true}
    );

    Object.keys(releases).forEach((path) => {
        releases[path].metadata.typeLabel = t.press_release;
        releases[path].metadata.type = 'release';
    })

    Object.keys(conferences).forEach((path) => {
        conferences[path].metadata.typeLabel = t.press_conference;
        conferences[path].metadata.type = 'conference';
    })


    let items: Record<string, Record<string, unknown>> = fetchPages({
        ...releases,
        ...conferences,
    }, language);

    return getDynamicPages(items, {
        take,
        offset,
    });
}
