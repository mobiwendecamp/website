<script>

    import {page} from "$app/stores";
    import * as t from "$lib/paraglide/messages.js";

    const years = [2025, 2023, 2021];


</script>
<nav class="flex flex-1 flex-col" aria-label="Sidebar">
    <ul role="list" class="-mx-2 space-y-1">
        {#each years as year}
            <li>
                <a
                        href="/press/references{year === 2025 ?'':'/'+year}"
                        class="group flex gap-x-3 w-full rounded-md p-2 pl-3 text-base/6
{('/press/references/' + year)  === $page.url.pathname ||($page.url.pathname === '/press/references' && year === 2025 )
                    ? 'bg-muted text-primary font-semibold'
                    : 'text-foreground hover:text-primary hover:bg-muted'}">
                    {t.camp_name()} {year}
                </a>
            </li>
        {/each}
    </ul>
</nav>
