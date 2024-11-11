<script lang="ts">
    import "leaflet/dist/leaflet.css";
    import {onMount} from "svelte";

    onMount(async () => {
        var Leaflet = await import("leaflet");
        let map = Leaflet.map('map').setView([48.168780, 11.570189], 17);
        Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var marker = Leaflet.marker([48.168780, 11.570189]).addTo(map);
    })
</script>
<span id="map" class="aspect-video w-full block">

</span>

