<script lang="ts">
    import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
    import * as Collapsible from "$lib/components/ui/collapsible/index.js";
    import {Button, buttonVariants} from "$lib/components/ui/button/index.js";
    import {ChevronsDown} from "lucide-svelte";
    import ChevronDown from "lucide-svelte/icons/chevron-down";
    import * as t from '$lib/paraglide/messages.js';

    const {toc, defaultOpen = true} = $props()

    function scrollToHeader(event: MouseEvent, id : string) {
        event.preventDefault();
        if (!id) {
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
</script>

<div class="bg-card shadow sm:rounded-lg space-y-4">
    <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg font-semibold text-foreground">{t.table_of_contents()}</h3>
        <nav class="mt-4 max-w-xl text-muted-foreground space-y-2">
            {#each toc as item}

                {#if item.children && item.children.length >= 1 }
                    <Collapsible.Root class="text-muted-foreground" open={defaultOpen}>
                        <div class="flex items-center justify-between ">
                            <a onclick={(event)=>scrollToHeader(event, item.id)} href="#{item.id}"
                               class="hover:text-foreground hover:translate-x-1 transition-all">
                                <h4 class="font-semibold">{item.text}</h4>
                            </a>
                            <Collapsible.Trigger
                                    class={buttonVariants({ variant: "ghost", size: "sm", class: "w-9 p-0" })}
                            >

                                {#snippet child({props})}
                                    <Button {...props} variant="ghost" size="sm">
                                        <ChevronDown
                                                class="size-4 transition-all  {props['data-state'] === 'open' ? 'rotate-180':''}"/>
                                        <span class="sr-only">Toggle</span>
                                    </Button>
                                {/snippet}
                            </Collapsible.Trigger>
                        </div>

                        <Collapsible.Content class="space-y-2 pl-4 py-2 text-muted-foreground">
                            {#each item.children as child}
                                <div>
                                    <a onclick={(event)=>scrollToHeader(event, item.id)}
                                       class="block w-full hover:text-foreground hover:translate-x-1 transition-all"
                                       href="#{child.id}">
                                        {child.text}
                                    </a>
                                </div>
                            {/each}
                        </Collapsible.Content>
                    </Collapsible.Root>
                {:else }
                    <a onclick={(event)=>scrollToHeader(event, item.id)} href="#{item.id}"
                       class="block hover:text-foreground hover:translate-x-1 transition-all">
                        <h4 class="font-semibold">{item.text}</h4>
                    </a>
                {/if}

            {/each}

        </nav>
    </div>
</div>
