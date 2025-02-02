<script lang="ts">
    import type {Snippet} from "svelte";

    let {children}: { children: Snippet } = $props();

</script>
<div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
    {@render children()}
</div>
