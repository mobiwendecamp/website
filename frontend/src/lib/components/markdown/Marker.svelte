<script lang="ts">
    import {getContext, onMount, type Snippet} from "svelte";
    import markerIconPng1 from "leaflet/dist/images/marker-icon.png"
    import markerIconPng2 from "leaflet/dist/images/marker-shadow.png"
    import markerIconPng3 from "leaflet/dist/images/marker-icon-2x.png"

    const mapProvider = getContext('Map');

    interface Props {
        lat?: number
        long?: number
        title?: string
    }

    const {lat = 48.168780, long = 11.570189, title}: Props = $props();

    onMount(async () => {
        var Leaflet = await import("leaflet");
        setTimeout(() => {
            const icon = Leaflet.icon({
                iconUrl: markerIconPng1, iconSize: [25, 41], iconAnchor: [12, 41],
                shadowUrl: markerIconPng2
            });


            const map = mapProvider();

            if (!map) {
                return;
            }
            let marker = new Leaflet.Marker([lat, long], {title, icon});

            if (title) {
                marker.bindTooltip(title);
            }

            marker.addTo(map);
        }, 50)
    });
</script>
