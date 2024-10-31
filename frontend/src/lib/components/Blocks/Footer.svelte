<script lang="ts">
    import {footerNavigation,socialMedia, type navigationItem} from "$lib/config/navigation";

    const parentItems = $derived(footerNavigation.filter((item: navigationItem) => !!item.children))
    const singleItems = $derived(footerNavigation.filter((item: navigationItem) => !!!item.children))

</script>
<footer class="bg-background text-foreground">
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div class="flex sm:justify-between gap-8  flex-wrap">
            {#each parentItems as item}
                <div class="min-w-36">
                    <h3 class="text-sm/6 font-semibold">{item.label()}</h3>
                    <ul role="list" class="mt-6 space-y-4">
                        {#each (item.children || []) as child}
                            <li>
                                <a href={child.href}
                                   class="text-sm/6 text-muted-foreground hover:text-foreground">{child.label()}</a>
                            </li>
                        {/each}
                        {#each (item.footer || []) as child}
                            <li>
                                <a href={child.href}
                                   class="text-sm/6 text-muted-foreground hover:text-foreground">{child.label()}</a>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
            <div class="min-w-36">
                <ul role="list" class="space-y-4">
                    {#each singleItems as item}
                        <li>
                            <a href={item.href}
                               class="text-sm/6 text-muted-foreground hover:text-foreground">{item.label()}</a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
        <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-end lg:mt-24">
            <div class="flex gap-x-6 md:order-2">
                {#each socialMedia as social}
                    <a href={social.href} class="text-gray-600 hover:text-gray-800">
                        <span class="sr-only">{social.label}</span>
                        <social.icon class="h-6 w-6">
                        </social.icon>
                    </a>
                    {/each}

            </div>
        </div>
    </div>
</footer>
