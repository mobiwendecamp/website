<script lang="ts">
    import type {Snippet} from "svelte";

    const {href, children}: { href: string, children: Snippet } = $props();
</script>

{#if href.startsWith('https://www.youtube.com')}
<iframe class="aspect-video w-full max-w-xl"  src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Q6Zs_eu1ka7JgQfy"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
{:else}
<a {href}>{@render children()}</a>
{/if}

