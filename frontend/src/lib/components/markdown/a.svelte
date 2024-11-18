<script lang="ts">
    import type {Snippet} from "svelte";
    import Youtube from "$lib/components/Atoms/Icons/Youtube.svelte";
    import {Button} from "$lib/components/ui/button";
    import * as t from '$lib/paraglide/messages.js';

    const {href, children}: { href: string, children: Snippet } = $props();

    let youtubePermission = $state(false);
    let isYoutube = $derived(href.startsWith('https://www.youtube.com') || href.startsWith('https://youtu.be'))
    let youtubeId = $derived.by(() => {
        const pathParts = new URL(href).pathname.split('/')
        return pathParts[pathParts.length - 1] || ''
    })

    function loadYoutube() {
        youtubePermission = true;
    }
</script>

{#if isYoutube}
    <span class="py-2 block">
        {#if youtubePermission}
            <iframe class="aspect-video w-full max-w-xl" src="https://www.youtube.com/embed/{youtubeId}"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        {:else}
            <span class="bg-muted aspect-video w-full max-w-xl mx-auto flex p-4 items-center justify-center flex-col">
                <Youtube class="w-1/5 text-muted-foreground"/>

                <Button onclick={loadYoutube} variant="outline" class="text-balance">
                    {t.youtube_load_scripts()}
                </Button>

                <a {href} target="_blank">{t.youtube_watch_on()}</a>
            </span>
        {/if}
    </span>
{:else}
    <a {href}>{@render children()}</a>
{/if}

