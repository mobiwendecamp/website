import type { LayoutLoad } from './$types';

export const load = (async ({ url }) => {
    return { url: url.pathname };
}) satisfies LayoutLoad;
