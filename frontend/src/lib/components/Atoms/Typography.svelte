<script lang="ts">
    import type {Snippet} from "svelte";
    import {cn} from "$lib/utils";
    import type {HTMLAttributes} from "svelte/elements";

    const {
        children,
        fullHeight = true,
        class: className,
        ...rest
    }: { fullHeight?: boolean, children?: Snippet } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div {...rest}
     class={cn(
         "prose max-w-none prose-a:text-primary break-words prose-headings:text-foreground prose-strong:text-foreground prose-blockquote:text-foreground prose-code:bg-muted prose-code:text-foreground",
         className,
         fullHeight ? "h-full" : ""
         )}
>
    {@render children?.()}
</div>
