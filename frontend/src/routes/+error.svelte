<script lang="ts">
    import {page} from '$app/stores';
    import * as t from '$lib/paraglide/messages.js'
</script>

<svelte:head>
    <title>Error {$page.status}</title>
</svelte:head>
{#if $page.status === 404}
    <section class="grid min-h-full place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
            <p class="text-base font-semibold text-primary">404</p>
            <h1 class="mt-4 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
                {t.title_404()}
            </h1>
            <p class="mt-6 text-pretty text-lg font-medium text-muted-foreground sm:text-xl/8">
                {t.description_404()}</p>
        </div>
    </section>
{:else}
    <div class="mx-auto max-w-7xl p-3 pt-28 lg:px-6">
        <h1>{$page.status}: {$page?.error?.message}</h1>
    </div>
{/if}
