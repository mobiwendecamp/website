import type {PageLoad} from './$types';
import {getLanguageFromUrl, loadPageWithSubpages} from "$lib/utils";
import {error} from "@sveltejs/kit";

export const load = (async ({params, url}) => {
    let page = await loadPageWithSubpages(
        params.rest,
        getLanguageFromUrl(url.pathname),
        'news'
    )

    if (page.meta?.published !== true) {
        error(404, 'Page not Found')
    }

    return {
        ...page,
    }

}) satisfies PageLoad;
