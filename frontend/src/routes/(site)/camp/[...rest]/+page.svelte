<script lang="ts">
    import type {PageData} from './$types';
    import Typography from "$lib/components/Atoms/Typography.svelte";
    import Map from "$lib/components/markdown/Map.svelte";
    import {browser, building, dev, version} from '$app/environment';
    import Marker from "$lib/components/markdown/Marker.svelte";

    let {data}: { data: PageData } = $props();

</script>


<Typography class="col-span-4">
    <data.content/>
</Typography>


