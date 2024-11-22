<script lang="ts">
    import type {Snippet} from "svelte";
    import {page} from '$app/stores';
    import DonationCTA from "$lib/components/Blocks/DonationCTA.svelte";
    import NewsletterCTA from "$lib/components/Blocks/NewsletterCTA.svelte";
    import SocialMediaCTA from "$lib/components/Blocks/SocialMediaCTA.svelte";
    import {fade,} from 'svelte/transition'
    import type {LayoutData} from "./$types";
    import TOC from "$lib/components/Blocks/TOC.svelte";
    import * as m from "$lib/paraglide/messages";
    import Logo from "$content/assets/images/seo/logo.png?enhanced";

    let {children, data}: { children: Snippet, data: LayoutData } = $props();

    const heros = import.meta.glob(
        '$content/assets/images/heros/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
        {
            eager: true,
            query: {
                enhanced: true
            }
        }
    )

    const hero = $derived(`/src/content/assets/images/heros/${$page.data.meta?.hero_image}` in heros
        ? heros[`/src/content/assets/images/heros/${$page.data.meta?.hero_image}`]
        : heros[`/src/content/assets/images/heros/default.jpg`]) as { default: string }
</script>



<div class="mx-auto max-w-7xl p-3 pt-28 lg:px-6">


    <div class="h-64 overflow-hidden relative bg-cover bg-center flex items-end rounded-2xl py-6 mb-6">
        <div class="absolute top-0 w-full h-64">
            <enhanced:img src={hero.default} alt="Banner Image" class="w-full h-full object-cover"/>
        </div>

        <div class="bg-background/70 backdrop-blur-sm w-full px-2 py-5 shadow-2xl">
            <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {$page.data.meta?.title}
            </h1>
            <p class="font-light text-lg lg:text-xl ">
                {$page.data.meta?.description}
            </p>
        </div>
    </div>


    <div class="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <div class="sm:col-span-4">
            {#key data.url}

                {#if $page.data.meta?.toc_enabled}
                    <div class="sm:hidden block w-full mb-4">
                        <TOC toc={$page.data.meta.toc} defaultOpen={false}></TOC>
                    </div>
                {/if}
                <div class="w-full"
                     in:fade={{ duration: 200, delay: 200 }}
                     out:fade={{  duration: 200 }}>
                    {@render children()}
                </div>
            {/key}
        </div>

        <div class="sm:col-span-2 space-y-6">
            {#if $page.data.meta?.toc_enabled}
                <div class="hidden sm:block">
                    <TOC toc={$page.data.meta.toc}></TOC>
                </div>
            {/if}
            {#if $page.data?.sidebar}
                <div class="space-y-2"
                     in:fade={{ duration: 200, delay: 200 }}
                     out:fade={{  duration: 200 }}>

                    {#if Array.isArray($page.data?.sidebar)}
                        {#each $page.data?.sidebar as item}
                            {@render item?.()}
                        {/each}
                    {:else}
                        {@render $page.data?.sidebar?.()}
                    {/if}
                </div>
            {/if}

            <div class="space-y-6">
                <DonationCTA></DonationCTA>
                <NewsletterCTA></NewsletterCTA>
                <SocialMediaCTA></SocialMediaCTA>
            </div>

        </div>
    </div>
</div>
