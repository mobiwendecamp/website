import type {PageLoad} from './$types';
import {getLanguageFromUrl, loadPage} from "$lib/utils";
import Sidebar from "./Sidebar.svelte";


export const load = (async ({depends, url}) => {

    return {
        ...await loadPage({
            page: 'press',
            language: getLanguageFromUrl(url.pathname)
        }),
        sidebar: Sidebar
    };

}) satisfies PageLoad;

