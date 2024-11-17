<script lang="ts">
    import {page} from '$app/stores';
</script>

<svelte:head>
    <title>Error {$page.status}</title>
</svelte:head>
<div class="mx-auto max-w-7xl p-3 pt-28 lg:px-6">

    <h1>{$page.status}: {$page?.error.message}</h1>
</div>
