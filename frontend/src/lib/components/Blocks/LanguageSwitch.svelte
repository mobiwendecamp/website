<script lang="ts">
    import {Button} from "$lib/components/ui/button";
    import {i18n} from '$lib/i18n';
    import {page} from '$app/stores';
    import {goto} from '$app/navigation';
    import {Languages, Check} from "lucide-svelte";
    import * as Popover from "$lib/components/ui/popover";
    import {De, Gb} from 'svelte-flags';
    import type {AvailableLanguageTag} from '$lib/paraglide/runtime';
    import {languageTag} from '$lib/paraglide/runtime';
    import * as m from '$lib/paraglide/messages.js';
    import DgsIcon from "$lib/components/Atoms/Icons/DgsIcon.svelte";

    function switchToLanguage(newLanguage: AvailableLanguageTag) {
        const canonicalPath = i18n.route($page.url.pathname);
        const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
        goto(localisedPath);
    }

    const availableLanguages = {
        de: {
            label: 'Deutsch',
            icon: De,
        },
        en: {
            label: 'English',
            icon: Gb,
        },
        dgs: {
            label: 'Gebärdensprache DGS',
            icon: DgsIcon,
        }
    }
</script>
<Popover.Root>
    <Popover.Trigger
            asChild
            let:builder
            class="flex items-center gap-x-1 text-sm/6 font-semibold text-foreground">
        <Button builders={[builder]} variant="ghost" size="icon">
            <Languages class="h-5 w-5 overflow-hidden rounded-full"></Languages>
        </Button>

    </Popover.Trigger>
    <Popover.Content class="p-4 w-auto">
        {#each Object.entries(availableLanguages) as [code, language]}
            <button class=" group w-full relative flex items-center gap-x-6  rounded-lg p-4 text-sm/6 hover:bg-popover transition-all"
                    class:bg-muted={languageTag() === code}
                    onclick={() => switchToLanguage(code)}>
                <span class="w-20 flex justify-center">
                <svelte:component this={language.icon}
                                  class="h-10 {code === 'dgs' ? 'w-20' : 'w-10'}"
                ></svelte:component>
                </span>
                <span class="block font-semibold">
                            {language.label}
                        </span>
                {#if languageTag() === code}
                    <Check></Check>
                {/if}
            </button>
        {/each}

    </Popover.Content>
</Popover.Root>
