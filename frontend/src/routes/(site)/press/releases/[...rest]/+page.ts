import type {PageLoad} from './$types';
import {getLanguageFromUrl, loadPageWithSubpages} from "$lib/utils";
import PressSidebar from './../../Sidebar.svelte';
import Sidebar from './../Sidebar.svelte';
import {error} from "@sveltejs/kit";

export const load = (async ({params, url}) => {
    let page = await loadPageWithSubpages(
        params.rest,
        getLanguageFromUrl(url.pathname),
        'press/releases'
    )

    if (page.meta?.published !== true) {
        error(404, 'Page not Found')
    }

    return {
        ...page,
        sidebar: [PressSidebar]
    }

}) satisfies PageLoad;
