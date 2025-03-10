<script lang="ts">
    import AnimatedLogo from "$lib/components/Blocks/AnimatedLogo.svelte";
    import * as Popover from "$lib/components/ui/popover";
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import * as Accordion from "$lib/components/ui/accordion";
    import {
        ChevronDown,
        X, Menu, Languages,
    } from "lucide-svelte";
    import DarkModeButton from "$lib/components/Blocks/DarkModeButton.svelte";
    import LanguageSwitch from "$lib/components/Blocks/LanguageSwitch.svelte";
    import {Button} from "$lib/components/ui/button";
    import {mainNavigation} from "$lib/config/navigation";
    import type {navigationItemChild} from "$lib/config/navigation";
    import * as t from "$lib/paraglide/messages.js"

    let mobileOpen = $state(false);
</script>

{#snippet navigationSubItem({item, close = false}: {item: navigationItemChild ,close?: boolean})}
    <div class="group relative flex gap-x-6 rounded-lg text-sm/6 hover:bg-popover transition-all p-4">
        <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg transition-all bg-muted">
            <item.icon class="h-6 w-6 group-hover:text-primary transition-all"></item.icon>
        </div>
        <div class="flex-auto">
            {#if close}
                <Sheet.Close>
                    <a href={item.href} class="block font-semibold text-popover-foreground">
                        {item.label()}
                        <span class="absolute inset-0"></span>
                    </a>
                </Sheet.Close>
            {:else}
                <a href={item.href} class="block font-semibold text-popover-foreground">
                    {item.label()}
                    <span class="absolute inset-0"></span>
                </a>
            {/if}

            {#if item.description}
                <p class="mt-1 text-muted-foreground line-clamp-2">{item.description()}</p>
            {/if}
        </div>
    </div>
{/snippet}

<header class="fixed z-20 bg-background/50 overflow-hidden shadow-xl backdrop-blur w-full rounded-b-2xl">
    <div class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#16A34A] to-[#9089fc] opacity-30" style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
    </div>
    <div class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#16A34A] to-[#9089fc] opacity-30" style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
    </div>
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-6" aria-label="Global">
        <div class="flex lg:flex-1">
            <a href="/" class="">
                <span class="sr-only">{t.camp_name()} Logo</span>
                <AnimatedLogo class="h-16 text-foreground"></AnimatedLogo>
            </a>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
            {#each mainNavigation as item}
                {#if !item?.children}
                    <a href={item.href} class="text-base/6 font-semibold text-foreground uppercase">{item.label()}</a>
                {:else}
                    <Popover.Root>
                        <Popover.Trigger
                                class="flex items-center gap-x-1 text-base/6 uppercase tracking-widest font-semibold text-foreground">
                            {item.label()}
                            <ChevronDown class="h-5 w-5 flex-none text-foreground"></ChevronDown>
                        </Popover.Trigger>
                        <Popover.Content>
                            <div class="p-4">
                                {@render navigationSubItem({item})}

                                {#each item.children as child}
                                    {@render navigationSubItem({item: child})}
                                {/each}
                            </div>
                            {#if item.footer}
                                <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-popover/50">
                                    {#each item.footer as child}
                                        {#if child.disabled}
                                            <span
                                                    title="Coming Soon"
                                                    class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-muted-foreground">
                                                <child.icon class="h-5 w-5 flex-none text-gray-400"></child.icon>
                                                {child.label()}
                                            </span>
                                        {:else}
                                            <a href={child.href}

                                               class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-popover-foreground hover:bg-popover/90">
                                                <child.icon class="h-5 w-5 flex-none text-gray-400"></child.icon>
                                                {child.label()}
                                            </a>
                                        {/if}

                                    {/each}
                                </div>
                            {/if}
                        </Popover.Content>
                    </Popover.Root>

                {/if}
            {/each}

        </div>
        <div class="flex flex-1 justify-end lg:space-x-4 space-x-2">
            <DarkModeButton></DarkModeButton>
            <LanguageSwitch></LanguageSwitch>
            <div class="flex lg:hidden">
                <Button onclick={()=> mobileOpen = !mobileOpen} type="button" variant="ghost" size="icon">
                    <span class="sr-only">{t.open_menu()}</span>
                    <Menu class="h-6 w-6"></Menu>
                </Button>
            </div>
        </div>
    </nav>


    <!-- Mobile menu, show/hide based on menu open state. -->
    <Sheet.Root bind:open={mobileOpen}>
        <Sheet.Content side="right" class="lg:hidden">
            <div role="dialog" aria-modal="true">
                <div class="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-background/90 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="p-6">
                        <div class="flex items-center justify-between">
                            <a href="/" class="-m-1.5 p-1.5">
                                <AnimatedLogo class="h-16 text-foreground"/>
                            </a>
                            <Sheet.Close>
                                {#snippet child({props})}
                                    <Button {...props} size="icon" variant="ghost">
                                        <X/>
                                    </Button>
                                {/snippet}

                            </Sheet.Close>

                        </div>
                        <div class="mt-6 flow-root">
                            <div class="">
                                {#each mainNavigation as item}
                                    {#if !item?.children}
                                        <Sheet.Close class="block">
                                            <a href={item.href}
                                               class="text-base/6 font-semibold text-foreground uppercase block py-4">{item.label()}</a>
                                        </Sheet.Close>
                                    {:else}
                                        <Accordion.Root class="">
                                            <Accordion.Item value={item.id} class="border-0">
                                                <Accordion.Trigger
                                                        class="flex items-center gap-x-1 text-base/6 uppercase tracking-widest font-semibold text-foreground">
                                                    {item.label()}
                                                </Accordion.Trigger>
                                                <Accordion.Content>
                                                    {@render navigationSubItem({item, close: true})}

                                                    {#each item.children as child}
                                                        {@render navigationSubItem({item: child, close: true})}
                                                    {/each}
                                                    {#if item.footer}
                                                        <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-popover/50">
                                                            {#each item.footer as child}
                                                                <Sheet.Close>
                                                                    <a href={child.href}
                                                                       class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-popover-foreground hover:bg-popover/90">
                                                                        <child.icon
                                                                                class="h-5 w-5 flex-none text-gray-400"></child.icon>
                                                                        {child.label()}
                                                                    </a>
                                                                </Sheet.Close>
                                                            {/each}
                                                        </div>
                                                    {/if}
                                                </Accordion.Content>
                                            </Accordion.Item>
                                        </Accordion.Root>
                                    {/if}
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Sheet.Content>
    </Sheet.Root>

</header>
