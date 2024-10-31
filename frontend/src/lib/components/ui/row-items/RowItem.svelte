<script lang="ts">
    import type {Snippet} from 'svelte';
    import { cn } from "$lib/utils.js";

    interface Props {
        href?: string;
        children: Snippet;
        icon: Snippet<[{ classes?: string }]>;
        description?: Snippet;
    }

    const {icon, href, description, children}: Props = $props()

</script>
<div class={cn(["group relative flex gap-x-6 rounded-lg text-sm/6 hover:bg-popover transition-all"])}>
    <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg transition-all bg-muted">
        {@render icon({classes: "h-6 w-6 group-hover:text-primary transition-all"})}
    </div>
    <div class="flex-auto">
        <a {href} class="block font-semibold text-popover-foreground">
            {@render children()}
            <span class="absolute inset-0"></span>
        </a>
        {#if description}
            <p class="mt-1 text-muted-foreground">{@render description()}</p>
        {/if}
    </div>
</div>
