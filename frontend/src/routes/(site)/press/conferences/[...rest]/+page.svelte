<script lang="ts">
    import type {PageData} from './$types';
    import Typography from "$lib/components/Atoms/Typography.svelte";
    import {ArrowLeft} from "lucide-svelte";
    import {Button} from "$lib/components/ui/button";

    let {data}: { data: PageData } = $props();

</script>


<Typography>
    <a href="/press/releases" class="flex items-center space-x-2">
        <ArrowLeft></ArrowLeft>
        zurück
    </a>
    <data.content/>
</Typography>



