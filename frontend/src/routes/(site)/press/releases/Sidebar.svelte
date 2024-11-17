<script lang="ts">
    import {goto, invalidateAll} from "$app/navigation";
    import {page} from "$app/stores";
    import * as t from "$lib/paraglide/messages.js";

    const years = [2025, 2023, 2021];

    async function changeYear(year: number) {
        $page.url.searchParams.set('year', String(year));
        await goto(`?${$page.url.searchParams.toString()}`);
        invalidateAll()
    }

</script>

<nav class="flex flex-1 flex-col" aria-label="Sidebar">
    <ul role="list" class="-mx-2 space-y-1">
        {#each years as year}
            <li>
                <button
                        onclick={()=>changeYear(year)}
                        class="group flex gap-x-3 w-full rounded-md p-2 pl-3 text-base/6
{String(year) === $page.url.searchParams.get('year')
                    ? 'bg-muted text-primary  font-semibold'
                    : 'text-foreground hover:text-primary hover:bg-muted'}">
                    {t.camp_name()} {year}
                </button>
            </li>
        {/each}
    </ul>
</nav>
