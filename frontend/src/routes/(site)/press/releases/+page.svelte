<script lang="ts">
    import type {PageData} from './$types';
    import Typography from "$lib/components/Atoms/Typography.svelte";
    import {formatDate} from "$lib/utils";

    export let data: PageData;
</script>

<Typography>
    <data.content/>
</Typography>
<div class="mt-10 space-y-16 border-t border-muted pt-10 sm:mt-16 sm:pt-16">
    {#each data.releases as release}
        <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" class="text-muted-foreground">{formatDate(release.date)}</time>
                <span class="relative z-10 rounded-full bg-muted px-3 py-1.5 font-medium text-muted-foreground">Pressemitteilung</span>
            </div>
            <div class="group relative">
                <a href="/press/releases/{release.slug}">
                    <h3 class="mt-3 text-lg/6 font-semibold text-foreground group-hover:text-primary">
                        <span class="absolute inset-0"></span>
                        {release.title}
                    </h3>
                    <p class="mt-5 line-clamp-3 text-sm/6 text-muted-foreground">
                        {release.description}
                        </p>
                </a>
            </div>

        </article>
    {/each}
</div>
