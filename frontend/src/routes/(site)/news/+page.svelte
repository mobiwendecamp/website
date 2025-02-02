<script lang="ts">
    import type {PageData} from './$types';
    import Typography from "$lib/components/Atoms/Typography.svelte";
    import {formatDate} from "$lib/utils";

    const {data}: { data: PageData } = $props();
</script>

<Typography>
    <data.content/>
</Typography>
<div class="space-y-16 border-t border-muted">
    {#each data.news as news}
        <article class="flex max-w-xl flex-col items-start justify-between">

            <div class="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" class="text-muted-foreground">{formatDate(news.date)}</time>
            </div>
            <div class="group relative">
                <a href="/news/{news.slug}">
                    <h3 class="mt-3 text-lg/6 font-semibold text-foreground group-hover:text-primary">
                        <span class="absolute inset-0"></span>
                        {news.title}
                    </h3>
                    <p class="mt-5 line-clamp-3 text-sm/6 text-muted-foreground">
                        {news.description}
                    </p>
                </a>
            </div>

        </article>
    {:else}
        <div class="w-full text-center text-3xl">
            Nothing here yet
        </div>
    {/each}
</div>
