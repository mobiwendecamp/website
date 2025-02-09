<script lang="ts">
    import {i18n} from "$lib/i18n";
    import {ParaglideJS} from "@inlang/paraglide-sveltekit";
    import '../app.css';
    import {ModeWatcher} from "mode-watcher";
    import MainNavigation from "$lib/components/Blocks/MainNavigation.svelte";
    import Footer from "$lib/components/Blocks/Footer.svelte";
    import * as m from "$lib/paraglide/messages";
    import Logo from "$content/assets/images/seo/logo.jpg";

    let {children, data} = $props();
    import {page} from '$app/state';
    import {formatDate} from "$lib/utils";
    import {end_date, start_date} from "$lib/config/site";

</script>
<svelte:head>
    <title>{page.data?.meta?.title} {m.camp_name()} 2025</title>
    <meta property="description"
          content={page.data?.meta?.description || (m.introduction() +   m.be_a_part() + ' '+ formatDate(start_date) +'–'+ formatDate(end_date)+ 'in'+ m.münchen())}/>
    <meta property="og:title" content="{page.data?.meta?.title} - {m.camp_name()} 2025"/>
    <meta property="og:description" content={page.data?.meta?.description || m.introduction()}/>
    <meta property="og:url" content={'https://'+data.VERCEL_URL+ page.url?.pathname}/>
    <meta property="og:site_name" content="{m.camp_name()} 2025">
    <meta property="og:type" content="website"/>
    <meta property="og:image" content={Logo}/>
    <meta property="og:image:url" content={Logo}/>
    <meta property="og:image:width" content="400"/>
    <meta property="og:image:height" content="400"/>
    <meta property="og:image:secure_url" content={Logo}/>
    <meta property="twitter:image" content={Logo}/>
    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:title" content="{page.data?.meta?.title} - {m.camp_name()} 2025"/>
    <meta property="twitter:description" content={page.data?.meta?.description || m.introduction()}/>
</svelte:head>
<ParaglideJS {i18n}>
    <ModeWatcher/>
    <MainNavigation></MainNavigation>
    <main class="text-foreground">
        {@render children?.()}
    </main>
    <Footer></Footer>
</ParaglideJS>
