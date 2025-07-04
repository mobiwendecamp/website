import {
    Accessibility,
    Bed,
    Brush,
    MapPinned,
    Megaphone,
    Newspaper,
    StickyNote,
    Tent,
    Utensils,
    Map,
    Handshake,
    HeartHandshake,
    ScrollText,
    LifeBuoy,
    BookOpen,
    Presentation
} from "lucide-svelte";
import type {Icon} from "lucide-svelte";
import type {Component, ComponentType} from "svelte";
import * as t from '$lib/paraglide/messages.js';
import type {Translation} from "$lib/i18n";
import InstagramIcon from "$lib/components/Atoms/Icons/InstagramIcon.svelte";
import BlueSkyIcon from "$lib/components/Atoms/Icons/BlueSky.svelte";
import TelegramIcon from "$lib/components/Atoms/Icons/TelegramIcon.svelte";
import MastodonIcon from "$lib/components/Atoms/Icons/MastodonIcon.svelte";
import heroImage from '$lib/assets/images/heros/hero_1.jpg';
import hero2Image from '$lib/assets/images/heros/hero_2.jpg';
import hero3Image from '$lib/assets/images/heros/hero_3.jpg';
import hero4Image from '$lib/assets/images/heros/hero_4.jpg';
import hero5Image from '$lib/assets/images/heros/hero_5.jpg';

export interface navigationItem {
    id: string,
    label: Translation,
    description?: Translation,
    icon?: Component | ComponentType<Icon>;
    image?: string
    href: string
    children?: navigationItemChild[]
    footer?: navigationItemChild[]
}

export interface navigationItemChild {
    id: string,
    label: Translation,
    image?: string
    description?: Translation,
    disabled?: boolean,
    icon?: Component | ComponentType<Icon>,
    href: string
}

export const campNavigation: navigationItem = {
    id: 'camp',
    label: t.camp,
    image: heroImage,
    description: t.camp_description,
    icon: Tent,
    href: '/camp',
    children: [
        {
            id: 'arrival',
            label: t.arrvial,
            icon: MapPinned,
            description: t.arrvial_description,
            href: '/camp/arrival',
            image: hero2Image,
        },
        {
            id: 'overnight',
            label: t.overnight,
            icon: Bed,
            image: hero3Image,
            description: t.overnight_description,
            href: '/camp/overnight',
        },
        {
            id: 'food',
            label: t.food_and_drinks,
            image: hero4Image,
            icon: Utensils,
            description: t.food_and_drinks_description,
            href: '/camp/food',
        },
        {
            id: 'accessibility',
            label: t.accessibility,
            image: hero5Image,
            icon: Accessibility,
            description: t.accessibility_description,
            href: '/camp/accessibility',
        }
    ],
    footer: [
        {
            id: 'site_plan',
            label: t.site_plan,
            icon: Map,
            href: '/',
            disabled: true
        },
        {
            id: 'self_image',
            label: t.self_image,
            icon: ScrollText,
            description: t.self_image_description,
            href: '/self-image',
        },
    ]
};

export const pressNavigation: navigationItem = {
    id: 'press',
    label: t.press,
    href: '/press',
    icon: Newspaper,
    description: t.press_description,
    children: [
        /*        {
                    id: 'artkit',
                    label: t.artkit,
                    icon: Brush,
                    description: t.artkit_description,
                    href: '/',
                },*/
        {
            id: 'press_notifications',
            label: t.press_notifications,
            icon: Megaphone,
            description: t.press_notifications_description,
            href: '/press/releases',
        },
        {
            id: 'press_references',
            label: t.press_references,
            icon: StickyNote,
            description: t.press_references_description,
            href: '/press/references',
        },
    ]

}

export const mainNavigation: navigationItem[] = [
    campNavigation,
    {
        id: 'program',
        label: t.program,
        href: '/program',
    },
    {
        id: 'news',
        label: t.news,
        href: '/news',
    },
    pressNavigation,
    {
        id: 'mitmachen',
        label: t.participate,
        href: '/camp/participate',
        icon: Handshake,
        description: t.participate_description,
        children: [
            {
                id: 'awareness',
                label: t.awareness,
                href: '/awareness',
                icon: LifeBuoy,
                description: t.awareness_description,
            },
            {
                id: 'code_of_conduct',
                label: t.code_of_conduct,
                icon: HeartHandshake,
                description: t.code_of_conduct_description,
                href: '/code-of-conduct',
            },
            {
                id: 'program_guidelines',
                label: t.program_guidelines,
                icon: Presentation,
                description: t.program_guidelines_description,
                href: '/program-guidelines',
            },
            {
                id: 'self_image',
                label: t.self_image,
                icon: ScrollText,
                description: t.self_image_description,
                href: '/self-image',
            },
            {
                id: 'glossar',
                label: t.glossar,
                href: '/glossar',
                description: t.glossar_description,
                icon: BookOpen,
            }
        ]
    },
]

export const footerNavigation: navigationItem[] = [
    ...mainNavigation,
    {
        id: 'imprint',
        label: t.imprint,
        href: '/imprint',
    },
    {
        id: 'data_privacy',
        label: t.data_privacy,
        href: '/privacy',
    },
    {
        id: 'donate',
        label: t.donations,
        href: '/donate',
    },
]


export const socialMedia = [
    {
        id: 'telegram',
        label: 'Telegram',
        icon: TelegramIcon,
        href: 'https://t.me/Mobilitaetswendecamp2023',
    },
    {
        id: 'instagram',
        icon: InstagramIcon,

        label: 'Instagram',
        href: 'https://www.instagram.com/mobilitatswendecamp/',
    },
    {
        id: 'Bluesky',
        icon: BlueSkyIcon,
        label: 'Bluesky',
        href: 'https://bsky.app/profile/mobiwendecamp.bsky.social',
    },
    {
        id: 'mastodon',
        icon: MastodonIcon,
        label: 'Mastodon',
        href: 'https://climatejustice.global/@mobilitaetswende_camp_muc',
    },
]
