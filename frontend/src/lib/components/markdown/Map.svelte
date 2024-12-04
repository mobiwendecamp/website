<script lang="ts">
    import "leaflet/dist/leaflet.css";
    import {onMount, setContext} from "svelte";
    import type {Map} from "leaflet";
    interface Props {
        lat?: number
        long?: number
    }

    const {lat = 48.168780, long = 11.570189}: Props = $props();
    let map = $state<Map>();
    setContext('Map', () => map)
    onMount(async () => {
        var Leaflet = await import("leaflet");
        map = Leaflet.map('map').setView([lat, long], 17);
        Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    })
</script>
<span id="map" class="aspect-video w-full block">
<slot></slot>
</span>

