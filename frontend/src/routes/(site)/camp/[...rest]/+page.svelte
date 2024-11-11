<script lang="ts">
    import type {PageData} from './$types';
    import heroImage from '$lib/assets/images/heros/hero_1.jpg';
    import {campNavigation, type navigationItemChild} from "$lib/config/navigation";
    import Typography from "$lib/components/Atoms/Typography.svelte";

    let {data}: { data: PageData } = $props();
    const nestedLinks = $derived([
        ...(campNavigation?.children ? campNavigation.children : []),
        ...(campNavigation?.footer ? campNavigation.footer : [])
    ])
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content={data.meta.title}/>
</svelte:head>

<div class="h-64 overflow-hidden bg-cover bg-center flex items-end rounded-2xl py-6 mb-6"
     style="background-image: url('{heroImage}')">
    <div class="bg-background/70 backdrop-blur-sm w-full px-2 py-5 shadow-2xl">
        <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {data.meta.title}
        </h1>
        <p class="font-light text-lg lg:text-xl ">
            {data.meta?.description}
        </p>
    </div>
</div>



<div class="grid grid-cols-6 gap-4">
    <Typography class="col-span-4">
        <data.content/>
    </Typography>


    <div class=" col-span-2">
        <div class="grid grid-cols-2 gap-4">
            {#each nestedLinks as links}
                <a href={links.href}
                   style="background-image: url('{links?.image || heroImage}')"
                   class="aspect-square bg-cover block bg-center overflow-hidden group hover:scale-105 hover:shadow-2xl transition-all justify-center items-center flex-col bg-muted rounded-2xl">
                    <div class="w-full h-full flex justify-center backdrop-blur-sm bg-muted/50 items-center flex-col p-4">
                        <links.icon class="w-1/3 h-auto group-hover:animate-bounce transition-all"
                                    strokeWidth="1"></links.icon>
                        <p class="text-xl text-center font-semibold text-balance">{links.label()}</p>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>
