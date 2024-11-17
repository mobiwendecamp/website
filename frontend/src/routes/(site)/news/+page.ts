import type {PageLoad} from './$types';
import {fetchPages, getDynamicPages, getLanguageFromUrl, loadPage} from "$lib/utils";
import * as t from "$lib/paraglide/messages.js";
import {availableLanguageTags} from "$lib/paraglide/runtime";


export const load = (async ({depends, url}) => {
    const language = getLanguageFromUrl(url.pathname);
    const news = getNews(language);

    return {
        ...await loadPage({
            page: 'news',
            language
        }),
        news,
    };

}) satisfies PageLoad;


function getNews(language: typeof availableLanguageTags[number], offset = 0, take: null | number = null) {
    let rawItems: Record<string, Record<string, unknown>> = import.meta.glob(
        `$content/pages/news/*/*.md`,
        {eager: true}
    );

    let items: Record<string, Record<string, unknown>> = fetchPages(rawItems, language);

    return getDynamicPages(items, {
        take,
        offset,
    });
}
