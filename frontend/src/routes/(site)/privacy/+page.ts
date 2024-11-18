import type {PageLoad} from './$types';
import {getLanguageFromUrl, loadPage} from "$lib/utils";


export const load = (async ({depends, url}) => {
        return loadPage({
            page: 'privacy',
            language: getLanguageFromUrl(url.pathname)
        });
}) satisfies PageLoad;

