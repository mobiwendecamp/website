import type {PageLoad} from './$types';
import {getLanguageFromUrl, loadPageWithSubpages} from "$lib/utils";
import PressSidebar from './../../Sidebar.svelte';
import Sidebar from './../Sidebar.svelte';

export const load = (async ({params, url}) => {
    return {
        ...await loadPageWithSubpages(
            params.rest,
            getLanguageFromUrl(url.pathname),
            'press/references'
        ),
        sidebar: [Sidebar, PressSidebar]
    }

}) satisfies PageLoad;
