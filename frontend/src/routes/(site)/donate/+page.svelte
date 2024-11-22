<script lang="ts">
    import type {PageData} from './$types';
    import Typography from "$lib/components/Atoms/Typography.svelte";
    export let data: PageData;
</script>
<Typography>
    <data.content/>
</Typography>
