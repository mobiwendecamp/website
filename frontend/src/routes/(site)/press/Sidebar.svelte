<script lang="ts">
    import {pressNavigation} from "$lib/config/navigation";
    import LinkGrid from "$lib/components/Blocks/LinkGrid.svelte";

    const nestedLinks = $derived([
        pressNavigation,
        ...(pressNavigation?.children ? pressNavigation.children : []),
        ...(pressNavigation?.footer ? pressNavigation.footer : [])
    ])
</script>

<LinkGrid links={nestedLinks}></LinkGrid>
