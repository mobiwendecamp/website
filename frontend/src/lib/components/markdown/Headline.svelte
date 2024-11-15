<script lang="ts">
    import type {Snippet} from "svelte";
    import {cn} from "$lib/utils";

    const {tag, children, id, class: classname, ...rest}: {
        children?: Snippet,
        class?: string,
        id?: string,
        tag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    } = $props();


</script>

<a href="#{id}" class="no-underline">
    <svelte:element
            {id}
            class={cn(classname,"cursor-pointer before:content-['#'] before:text-muted-foreground before:mr-2 hover:before:text-foreground")}
            this={tag} {...rest}>
        {@render children?.()}
    </svelte:element>
</a>
