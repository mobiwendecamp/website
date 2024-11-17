import type {PageLoad} from './$types';
import {getLanguageFromUrl, loadPageWithSubpages} from "$lib/utils";
import PressSidebar from './../../Sidebar.svelte';
import Sidebar from './../../releases/Sidebar.svelte';
import {error} from "@sveltejs/kit";

export const load = (async ({params, url}) => {
    let page = await loadPageWithSubpages(
        params.rest,
        getLanguageFromUrl(url.pathname),
        'press/conferences'
    )

    if (page.meta?.published !== true) {
        error(404, 'Page not Found')
    }

    return {
        ...page,
        sidebar: [Sidebar, PressSidebar]
    }

}) satisfies PageLoad;
