<script lang="ts">
    import type {PageData} from './$types';
    import {languageTag} from '$lib/paraglide/runtime';

    export let data: PageData;
</script>
<!--
<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content={data.meta.title}/>
</svelte:head>-->
<h1>{languageTag()}</h1>
<pre>{JSON.stringify(data, 0, 2)}</pre>
<data.content />
