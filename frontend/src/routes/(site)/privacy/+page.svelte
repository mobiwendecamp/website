<script lang="ts">
    import type {PageData} from './$types';
    import Typography from "$lib/components/Atoms/Typography.svelte";

    export let data: PageData;
</script>
<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content={data.meta.title}/>
</svelte:head>

<Typography>

    <data.content/>
</Typography>
