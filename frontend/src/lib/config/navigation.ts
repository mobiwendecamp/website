import {Accessibility, Bed, Brush, MapPinned, Megaphone, Newspaper, StickyNote, Tent, Utensils, Map, Handshake} from "lucide-svelte";
import type {Component} from "svelte";
import * as t from '$lib/paraglide/messages.js';
import type {Translation} from "$lib/i18n";


export interface navigationItem {
    id: string,
    label: Translation,
    description?: Translation,
    icon?: Component
    href: string
    children?: navigationItemChild[]
    footer?: navigationItemChild[]
}

export interface navigationItemChild {
    id: string,
    label: Translation,
    description?: Translation,
    icon?: Component
    href: string
}

export const mainNavigation: navigationItem[] = [
    {
        id: 'camp',
        label: t.camp,
        description: t.camp_description,
        icon: Tent as unknown as Component,
        href: '/',
        children: [
            {
                id: 'arrival',
                label: t.arrvial,
                icon: MapPinned as unknown as Component,
                description: t.camp_description,
                href: '/',
            },

            {
                id: 'overnight',
                label: t.overnight,
                icon: Bed as unknown as Component,
                description: t.overnight_description,
                href: '/',
            },

            {
                id: 'food',
                label: t.food_and_drinks,
                icon: Utensils as unknown as Component,
                description: t.food_and_drinks_description,
                href: '/',
            },
            {
                id: 'accessibility',
                label: t.accessibility,
                icon: Accessibility as unknown as Component,
                description: t.accessibility_description,
                href: '/',
            }
        ],
        footer: [
            {
                id: 'site_plan',
                label: t.site_plan,
                icon: Map as unknown as Component,
                href: '/',
            },
            {
                id: 'participate',
                label: t.participate,
                icon: Handshake as unknown as Component,
                href: '/',
            },
        ]
    },
    {
        id: 'program',
        label: t.program,
        href: '/',
    },
    {
        id: 'donate',
        label: t.donations,
        href: '/',
    },
    {
        id: 'press',
        label: t.press,
        href: '/',
        icon: Newspaper as unknown as Component,
        description: t.press_description,
        children: [
            {
                id: 'artkit',
                label: t.artkit,
                icon: Brush as unknown as Component,
                description: t.artkit_description,
                href: '/',
            },
            {
                id: 'press_notifications',
                label: t.press_notifications,
                icon: Megaphone as unknown as Component,
                description: t.press_notifications_description,
                href: '/',
            },
            {
                id: 'press_references',
                label: t.press_references,
                icon: StickyNote as unknown as Component,
                description: t.press_references_description,
                href: '/',
            },
        ]

    }
]
