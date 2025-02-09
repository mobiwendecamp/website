import * as runtime from '$lib/paraglide/runtime';
import { createI18n } from '@inlang/paraglide-sveltekit';
export const i18n = createI18n(runtime,{
    pathnames: {
        "/imprint" : {
            en: "/imprint",
            de: "/impressum",
        },
    }
});
export type Translation = (params?: {}, options?: { languageTag?: "de" | "en"}) => string
