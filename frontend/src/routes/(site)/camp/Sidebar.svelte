<script lang="ts">
    import {campNavigation} from "$lib/config/navigation";
    import LinkGrid from "$lib/components/Blocks/LinkGrid.svelte";

    const nestedLinks = $derived([
        ...(campNavigation?.children ? campNavigation.children : []),
        ...(campNavigation?.footer ? campNavigation.footer : [])
    ])
</script>

<LinkGrid links={nestedLinks}></LinkGrid>
