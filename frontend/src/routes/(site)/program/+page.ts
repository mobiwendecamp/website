import type {PageLoad} from './$types';
import {error, redirect} from '@sveltejs/kit';
import {getLanguageFromUrl, loadPage} from "$lib/utils";


export const load = (async ({depends, url}) => {
redirect(307, 'https://programm.mobiwende.camp/mobility-transformation-camp-2025/schedule/')
}) satisfies PageLoad;

