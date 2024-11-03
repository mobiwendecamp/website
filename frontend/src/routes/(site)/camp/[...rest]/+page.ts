import type {PageLoad} from './$types';
import {getLanguageFromUrl, loadPage, loadPageWithSubpages} from "$lib/utils";
import {error} from "@sveltejs/kit";


export const load = (async ({params, url}) => {
    return loadPageWithSubpages(
        params.rest,
        getLanguageFromUrl(url.pathname),
        'camp'
    );

}) satisfies PageLoad;
