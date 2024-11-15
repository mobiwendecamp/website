<script lang="ts">
    import type {Snippet} from "svelte";
    import {page} from '$app/stores';

    let {children}: { children: Snippet } = $props();

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

<svelte:head>
    <title>{$page.data.meta.title}</title>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content={$page.data.meta.title}/>
</svelte:head>
<div class="mx-auto max-w-7xl p-3 pt-28 lg:px-6">


    <div class="h-64 overflow-hidden relative bg-cover bg-center flex items-end rounded-2xl py-6 mb-6">
        <div class="absolute top-0 w-full h-64">
            <enhanced:img src={hero.default} class=" w-full h-full object-cover"/>
        </div>

        <div class="bg-background/70 backdrop-blur-sm w-full px-2 py-5 shadow-2xl">
            <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {$page.data.meta.title}
            </h1>
            <p class="font-light text-lg lg:text-xl ">
                {$page.data.meta?.description}
            </p>
        </div>
    </div>


    <div class="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <div class="sm:col-span-4">
            {@render children()}
        </div>


        <div class="sm:col-span-2 space-y-6">
            {#if Array.isArray($page.data?.sidebar)}
                {#each $page.data?.sidebar as item}
                    {@render item?.()}
                {/each}
            {:else}
                {@render $page.data?.sidebar?.()}
            {/if}
            <div class="bg-red-500 w-full h-32">SPENDEN</div>
        </div>
    </div>
</div>
