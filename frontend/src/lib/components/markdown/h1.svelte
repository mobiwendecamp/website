<script lang="ts">
    import type {Snippet} from "svelte";

    const {children, ...rest}: { href: string, children?: Snippet } = $props();
</script>

<h2 class="text-3xl" {...rest}>{@render children?.()}</h2>

