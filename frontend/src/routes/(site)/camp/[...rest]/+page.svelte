<script lang="ts">
    import type {PageData} from './$types';
    import Typography from "$lib/components/Atoms/Typography.svelte";

    let {data}: { data: PageData } = $props();

</script>


<Typography class="col-span-4">
    <data.content/>
</Typography>


