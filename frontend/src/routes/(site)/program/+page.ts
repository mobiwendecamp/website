import type {PageLoad} from './$types';
import {error} from '@sveltejs/kit';
import {getLanguageFromUrl, loadPage} from "$lib/utils";


export const load = (async ({depends, url}) => {

        return loadPage({
            page: 'program',
            language: getLanguageFromUrl(url.pathname)
        });

}) satisfies PageLoad;

