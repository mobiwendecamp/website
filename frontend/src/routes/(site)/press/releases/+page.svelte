<script lang="ts">
    import type {PageData} from './$types';
    import Typography from "$lib/components/Atoms/Typography.svelte";
    import {formatDate} from "$lib/utils";
    import * as t from "$lib/paraglide/messages.js";

    const {data}: { data: PageData } = $props();

    const year2025 = $derived(data.releases.filter((release)=> release.date.getFullYear() === 2025));
    const year2023 = $derived(data.releases.filter((release)=> release.date.getFullYear() === 2023));
    const year2021 = $derived(data.releases.filter((release)=> release.date.getFullYear() === 2021));
</script>

<Typography>
    <data.content/>
</Typography>

{#snippet releaseRow(release)}
    <article class="flex max-w-xl flex-col items-start justify-between">

        <div class="flex items-center gap-x-4 text-xs">
            <time datetime="2020-03-16" class="text-muted-foreground">{formatDate(release.date)}</time>
            <span class="relative z-10 rounded-full bg-muted px-3 py-1.5 font-medium text-muted-foreground">{release.typeLabel()}</span>
        </div>
        <div class="group relative">
            <a href="/press/{release.type === 'release' ? 'releases' : 'conferences' }/{release.slug}">
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
{/snippet}
<div class="mt-10 space-y-16 border-t border-muted pt-10 sm:mt-16 sm:pt-16">
    <h2 id="releases_2025" class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">{t.camp_name()} 2025</h2>
    {#each year2025 as release}
        {@render releaseRow(release)}
    {:else}
        <div class="w-full text-center text-3xl">
            {t.empty_state()}

        </div>
    {/each}

    <h2 id="releases_2023"
            class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">{t.camp_name()} 2023</h2>
    {#each year2023 as release}
        {@render releaseRow(release)}
    {:else}
        <div class="w-full text-center text-3xl">
            {t.empty_state()}
        </div>
    {/each}

    <h2 id="releases_2021" class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">{t.camp_name()} 2021</h2>
    {#each year2021 as release}
        {@render releaseRow(release)}
    {:else}
        <div class="w-full text-center text-3xl">
            {t.empty_state()}
        </div>
    {/each}
</div>
