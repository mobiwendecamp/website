import type {PageLoad} from './$types';
import {getLanguageFromUrl, loadPage, loadPageWithSubpages} from "$lib/utils";
import {error} from "@sveltejs/kit";
import Sidebar from "./../Sidebar.svelte";

export const load = (async ({params, url}) => {
    return {
        ...await loadPageWithSubpages(
            params.rest,
            getLanguageFromUrl(url.pathname),
            'camp',
        ),
        sidebar: Sidebar
    };

}) satisfies PageLoad;
