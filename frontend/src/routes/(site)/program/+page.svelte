<script lang="ts">
    import type {PageData} from './$types';
    import Typography from "$lib/components/Atoms/Typography.svelte";
    import {TriangleAlert} from "lucide-svelte";

    export let data: PageData;
</script>

<svelte:head>
    <script type="text/javascript" src="https://programm.mobiwende.camp/mobility-transformation-camp-2025/widgets/schedule.js"></script>
</svelte:head>


<div class="bg-orange-300 flex space-x-4 rounded-lg p-4 mb-4">
        <TriangleAlert/>
    <a target="_blank" href="https://programm.mobiwende.camp/mobility-transformation-camp-2025/schedule/">
    Solltest du Probleme mit der Programmansicht haben, klicke hier.
    </a>
</div>
<div class="w-full overflow-auto">

<pretalx-schedule event-url="https://programm.mobiwende.camp/mobility-transformation-camp-2025/" locale="de" format="grid" style="--pretalx-clr-primary: #7e05a6"></pretalx-schedule>
<noscript>
    <div class="pretalx-widget">
        <div class="pretalx-widget-info-message">
            JavaScript is disabled in your browser. To access our schedule without JavaScript,
            please <a target="_blank" href="https://programm.mobiwende.camp/mobility-transformation-camp-2025/schedule/">click here</a>.
        </div>
    </div>
</noscript>
</div>
