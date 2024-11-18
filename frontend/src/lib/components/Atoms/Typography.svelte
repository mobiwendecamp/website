<script lang="ts">
    import type {Snippet} from "svelte";
    import {cn} from "$lib/utils";
    import type {HTMLAttributes} from "svelte/elements";

    const {children, class: className, ...rest}: { children?: Snippet } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div {...rest}
     class={cn(
         "prose max-w-none prose-a:text-primary break-words prose-headings:text-foreground prose-strong:text-foreground prose-blockquote:text-foreground prose-code:bg-muted prose-code:text-foreground",
         className
         )}
>
    {@render children?.()}
</div>
