<script lang="ts">
    import AnimatedLogo from "$lib/components/AnimatedLogo.svelte";
    import * as Popover from "$lib/components/ui/popover";
    import RowItem from "$lib/components/ui/row-items/RowItem.svelte";
    import {De, Gb} from 'svelte-flags';
    import type {AvailableLanguageTag} from '$lib/paraglide/runtime';
    import {i18n} from '$lib/i18n';
    import {page} from '$app/stores';
    import {goto} from '$app/navigation';
    import {
        ChevronDown,
        Bed,
        Map,
        MapPinned,
        Utensils,
        StickyNote,
        Brush,
        Accessibility,
        Tent,
        Newspaper,
        Megaphone,
        Handshake
    } from "lucide-svelte";
    import DarkModeButton from "$lib/components/ui/button/DarkModeButton.svelte";

    function switchToLanguage(newLanguage: AvailableLanguageTag) {
        const canonicalPath = i18n.route($page.url.pathname);
        const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
        goto(localisedPath);
    }

    const navigation = [
        {
            id: 'camp',
            label: 'Camp',
            description: 'Alles über unser Camp',
            icon: Tent,
            href: '/',
            children: [
                {
                    id: 'arrival',
                    label: 'Anreise',
                    icon: MapPinned,
                    description: 'Wegbeschreibungen zum Camp',
                    href: '/',
                },

                {
                    id: 'camping',
                    label: 'Übernachtung',
                    icon: Bed,
                    description: 'Infos zu Schlafmöglichkeiten',
                    href: '/',
                },

                {
                    id: 'food',
                    label: 'Essen',
                    icon: Utensils,
                    description: 'Alle Infos zu Essen auf dem Camp',
                    href: '/',
                },
                {
                    id: 'accessibility',
                    label: 'Zugänglichkeit und Assistenz',
                    icon: Accessibility,
                    description: 'Alle Infos zu Barrierefreiheit',
                    href: '/',
                }
            ]
        },
        {
            id: 'program',
            label: 'Programm',
            href: '/',
        },
        {
            id: 'donate',
            label: 'Spenden',
            href: '/',
        },
        {
            id: 'press',
            label: 'Presse',
            href: '/',
            icon: Newspaper,
            description: 'Pressekontakte und mehr',
            children: [
                {
                    id: 'artkit',
                    label: 'Artkit',
                    icon: Brush,
                    description: 'Logos und Bildmaterial für Bericherstattung',
                    href: '/',
                },
                {
                    id: 'press-notifications',
                    label: 'Pressemitteilungen',
                    icon: Megaphone,
                    description: 'Aktuelle Pressemitteilungen des Camps',
                    href: '/',
                },
                {
                    id: 'pressreferences',
                    label: 'Pressespiegel',
                    icon: StickyNote,
                    description: 'Artikel über das Camp',
                    href: '/',
                },
            ]

        }
    ]
</script>

<header class="fixed z-20 bg-background/50 border-b border-background/80 backdrop-blur w-full rounded-b-2xl">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-6" aria-label="Global">
        <div class="flex lg:flex-1">
            <a href="/" class="">
                <span class="sr-only">Mobiwendecamp 2025 Logo</span>
                <AnimatedLogo class="h-16 text-foreground"></AnimatedLogo>
            </a>
        </div>
        <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                     aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
            </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">

            {#each navigation as item}
                {#if !item?.children}
                    <a href={item.href} class="text-base/6 font-semibold text-foreground uppercase">{item.label}</a>
                {:else}
                    <Popover.Root>
                        <Popover.Trigger
                                class="flex items-center gap-x-1 text-base/6 uppercase tracking-widest font-semibold text-foreground">
                            {item.label}
                            <ChevronDown class="h-5 w-5 flex-none text-foreground"></ChevronDown>
                        </Popover.Trigger>
                        <Popover.Content>
                            <div class="p-4">
                                <RowItem href="/">
                                    {item.label}
                                    {#snippet icon({classes})}
                                        <svelte:component this={item.icon} class={classes}></svelte:component>
                                    {/snippet}
                                    {#snippet description()}
                                        {item.description}
                                    {/snippet}
                                </RowItem>
                                {#each item.children as child}
                                    <RowItem href="/">
                                        {child.label}
                                        {#snippet icon({classes})}
                                            <svelte:component this={child.icon} class={classes}></svelte:component>
                                        {/snippet}
                                        {#snippet description()}
                                            {child.description}
                                        {/snippet}
                                    </RowItem>
                                {/each}
                            </div>
                            <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-popover/50">
                                <a href="/"
                                   class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-popover-foreground hover:bg-popover/90">
                                    <Map class="h-5 w-5 flex-none text-gray-400">
                                    </Map>
                                    Lageplan
                                </a>
                                <a href="/"
                                   class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-popover-foreground hover:bg-popover/90">
                                    <Handshake class="h-5 w-5 flex-none text-gray-400"></Handshake>
                                    Mitmachen
                                </a>
                            </div>
                        </Popover.Content>
                    </Popover.Root>

                {/if}
            {/each}

        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
            <DarkModeButton></DarkModeButton>
            <Popover.Root>
                <Popover.Trigger
                        class="flex items-center gap-x-1 text-sm/6 font-semibold text-foreground">
                    <De class="h-5 w-5 overflow-hidden rounded-full"></De>
                    <ChevronDown class="h-5 w-5 flex-none text-foreground"></ChevronDown>

                </Popover.Trigger>
                <Popover.Content class="p-4 w-auto">
                    <button class="group w-full relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-popover transition-all"
                         onclick={() => switchToLanguage('de')}>
                        <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg transition-all bg-muted">
                            <De class="h-5 w-5 overflow-hidden rounded-full"></De>
                        </div>
                        <div class="block font-semibold text-popover-foreground">
                            Deutsch
                        </div>
                    </button>
                    <button class="group w-full relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-popover transition-all"
                         onclick={() => switchToLanguage('en')}>
                        <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg transition-all bg-muted">
                            <Gb class="h-5 w-5 overflow-hidden rounded-full"></Gb>
                        </div>
                        <div class="block font-semibold text-popover-foreground">
                            English
                        </div>
                    </button>

                </Popover.Content>
            </Popover.Root>
        </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="lg:hidden" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 z-10"></div>
        <div class="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="p-6">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto"
                             src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="">
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                        <span class="sr-only">Close menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                             aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a href="#"
                               class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
                                         viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                         data-slot="icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"/>
                                    </svg>
                                </div>
                                Analytics
                            </a>
                            <a href="#"
                               class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
                                         viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                         data-slot="icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"/>
                                    </svg>
                                </div>
                                Engagement
                            </a>
                            <a href="#"
                               class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
                                         viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                         data-slot="icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"/>
                                    </svg>
                                </div>
                                Security
                            </a>
                            <a href="#"
                               class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
                                         viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                         data-slot="icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"/>
                                    </svg>
                                </div>
                                Integrations
                            </a>
                            <a href="#"
                               class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none"
                                         viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                         data-slot="icon">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/>
                                    </svg>
                                </div>
                                Automations
                            </a>
                        </div>
                        <div class="space-y-2 py-6">
                            <a href="#"
                               class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Features</a>
                            <a href="#"
                               class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Marketplace</a>

                            <a href="#"
                               class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">About
                                us</a>
                            <a href="#"
                               class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Careers</a>
                            <a href="#"
                               class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Support</a>
                            <a href="#"
                               class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Blog</a>
                        </div>
                        <div class="py-6">
                            <a href="#"
                               class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log
                                in</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center">
                <a href="#" class="p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-100">Watch demo</a>
                <a href="#" class="p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-100">Contact sales</a>
            </div>
        </div>
    </div>
</header>
