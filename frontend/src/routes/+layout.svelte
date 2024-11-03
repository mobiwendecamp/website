<script lang="ts">
    import {i18n} from "$lib/i18n";
    import {ParaglideJS} from "@inlang/paraglide-sveltekit";
    import '../app.css';
    import {ModeWatcher} from "mode-watcher";
    import MainNavigation from "$lib/components/Blocks/MainNavigation.svelte";
    import Footer from "$lib/components/Blocks/Footer.svelte";

    let {children} = $props();
</script>

<ParaglideJS {i18n}>
    <!--	<ModeWatcher />-->
    <MainNavigation></MainNavigation>
    <main>
        {@render children()}
    </main>
    <Footer></Footer>
</ParaglideJS>
