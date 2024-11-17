import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {cubicOut} from "svelte/easing";
import type {TransitionConfig} from "svelte/transition";
import {availableLanguageTags, languageTag, sourceLanguageTag} from "$lib/paraglide/runtime";
import {error} from "@sveltejs/kit";
import * as t from "$lib/paraglide/messages";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
    y?: number;
    x?: number;
    start?: number;
    duration?: number;
};

export const flyAndScale = (
    node: Element,
    params: FlyAndScaleParams = {y: -8, x: 0, start: 0.95, duration: 150}
): TransitionConfig => {
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;

    const scaleConversion = (
        valueA: number,
        scaleA: [number, number],
        scaleB: [number, number]
    ) => {
        const [minA, maxA] = scaleA;
        const [minB, maxB] = scaleB;

        const percentage = (valueA - minA) / (maxA - minA);
        const valueB = percentage * (maxB - minB) + minB;

        return valueB;
    };

    const styleToString = (
        style: Record<string, number | string | undefined>
    ): string => {
        return Object.keys(style).reduce((str, key) => {
            if (style[key] === undefined) return str;
            return str + `${key}:${style[key]};`;
        }, "");
    };

    return {
        duration: params.duration ?? 200,
        delay: 0,
        css: (t) => {
            const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
            const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
            const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

            return styleToString({
                transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                opacity: t
            });
        },
        easing: cubicOut
    };
};


export async function loadPage(config: {
    page: string,
    language: typeof availableLanguageTags[number],
    basedir?: string,
}) {

    try {
        const language = config?.language || 'de';
        let page = findPage(config.page, language, config.basedir)

        if (page) {
            return {content: page.default, meta: page.metadata};
        }

        if (language === 'de') {
            error(404, 'Page not Found')
        }

        page = findPage(config.page, 'de', config.basedir);

        if (page) {
            return {content: page.default, meta: page.metadata};
        }

        error(404, 'Page not Found')
    } catch (e) {
        console.error(e);
        error(400, 'Error');
    }

}

export async function loadPageWithSubpages(
    page: string,
    language: typeof availableLanguageTags[number],
    restrictTo?: string
) {
    try {
        let module = findPage(page, language, restrictTo);

        if (module) {
            return {content: module.default, meta: module.metadata};
        }

        if (language === 'de') {
            error(404, 'Page not Found')
        }

        module = findPage(page, 'de', restrictTo);

        if (module) {
            return {content: module.default, meta: module.metadata};
        }

        error(404, 'Page not Found')
    } catch (e) {
        console.error(e);
        error(400, 'Error');
    }

}

export function getLanguageFromUrl(pathname: string): typeof availableLanguageTags[number] {

    for (const language of availableLanguageTags) {
        if (pathname === `/${language}`) {
            return language;
        }

        if (pathname.startsWith(`/${language}/`)) {
            return language;
        }

    }

    return 'de';
}

export function findPage(path: string, language: typeof availableLanguageTags[number] = 'de', restrictTo?: string): undefined | {
    default: unknown,
    metadata: Record<string, unknown>
} {
    if (restrictTo) {
        restrictTo.trim()
            .replace('..', '')
            .replace(/^\/|\/$/g, '')
    }

    let param = path.trim()
        .replace('..', '')
        .replace(/^\/|\/$/g, '')

    let targetPath = (lang: string) => {
        let path = `${param ? param + '/' : ''}${lang}.md`

        return (restrictTo ? restrictTo + '/' : '') + path
    }


    const paths = import.meta.glob(`$content/pages/**/**/*.md`, {eager: true})

    let module = Object.entries(paths)
        .find(([path]) => path.endsWith(targetPath(sourceLanguageTag)));

    if (!module) {
        return undefined;
    }

    const basePage = module[1];

    if (sourceLanguageTag === language) {
        return basePage as ReturnType<typeof findPage>;
    }

    module = Object.entries(paths)
        .find(([path]) => path.endsWith(targetPath(language)));

    if (!module) {
        return undefined;
    }
    const page = module[1] as ReturnType<typeof findPage>;


    return {
        default: page?.default,
        metadata: {
            ...basePage?.metadata,
            ...page?.metadata
        }
    }


}

export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat(languageTag(), {
        day: 'numeric',
        month: 'numeric',
        year: '2-digit'
    }).format(date)
}


export function getDynamicPages<T>(items: Record<string, Record<string, unknown>>,
                                   options: {
                                       offset?: number,
                                       take?: null | number,
                                       filter?: (post: T) => boolean
                                   } = {}
) {
    const defaultOptions = {
        offset: 0,
        take: null,
        filter: (post: T) => true
    }

    let {offset, take, filter} = {
        ...defaultOptions,
        ...options
    }

    take = take ?? Object.keys(items).length;

    return Object.entries(items)
        .slice(offset, offset + take)
        .map(
            ([path, file]) =>
                ({
                    ...file.metadata,
                    slug: path.split('/').at(-2),
                    date: new Date(file.metadata.date)
                })
        )
        .filter((post) => post.published)
        .filter(filter)
        .sort((a, b) => b.date.valueOf() - a.date.valueOf());
}

export function fetchPages(rawItems: Record<string, Record<string, unknown>>, language: typeof availableLanguageTags[number]) {
    let items: Record<string, Record<string, unknown>> = {};

    Object.keys(rawItems)
        .reduce((carry: string[], fullPath) => {
            const dirPath: string = fullPath.slice(0, fullPath.lastIndexOf('/'));

            if (carry.includes(dirPath)) {
                return carry;
            }

            carry.push(dirPath);
            return carry
        }, [])
        .forEach((dirPath: string) => {
            let path = (lang: string) => `${dirPath}/${lang}.md`;
            const baseItem = rawItems[path(sourceLanguageTag)]

            if (!baseItem) {
                return;
            }

            if (language === sourceLanguageTag) {
                items[path(sourceLanguageTag)] = baseItem
                return;
            }

            if (rawItems[path(language)]) {
                let item = rawItems[path(language)];


                items[path(language)] = {
                    ...item,
                    metadata: {
                        ...baseItem?.metadata || {},
                        ...item?.metadata || {},
                    }
                };
                return;
            }

            items[path(language)] = baseItem
        })

    return items;
}
