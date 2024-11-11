import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {cubicOut} from "svelte/easing";
import type {TransitionConfig} from "svelte/transition";
import {availableLanguageTags, languageTag} from "$lib/paraglide/runtime";
import {error} from "@sveltejs/kit";

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
        const page = findPage(config.page, language, config.basedir)

        if (!page) {
            error(404, config.page + ' Not found!');
        }

        return {content: page.default, meta: page.metadata};
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

        module = findPage(page, 'de');

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
        if (!pathname.startsWith(`/${language}/`)) {
            continue;
        }

        return language;
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

    let targetPath = `${path.trim()
        .replace('..', '')
        .replace(/^\/|\/$/g, '')}/${language}.md`

    if (restrictTo) {
        restrictTo += '/';
    }
    targetPath = (restrictTo || '') + targetPath

    const paths = import.meta.glob(`$content/pages/**/**/*.md`, {eager: true})
    const module = Object.entries(paths)
        .find(([path]) => path.endsWith(targetPath));

    if (!module) {
        return undefined;
    }

    return module[1] as ReturnType<typeof findPage>;
}

export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat(languageTag(), {
        day: 'numeric',
        month: 'numeric',
        year: '2-digit'
    }).format(date)
}
