<script lang="ts">
    import type {Snippet} from "svelte";
    import Headline from "$lib/components/markdown/Headline.svelte";

    const {children, ...rest}: { children?: Snippet } = $props();
</script>

<Headline tag="h2" class="text-3xl" {...rest}>
    {@render children?.()}
</Headline>

