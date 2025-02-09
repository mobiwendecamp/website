<script lang="ts">
    import AnimatedLogo from "$lib/components/Blocks/AnimatedLogo.svelte";
    import video from '$lib/assets/videos/mobiWende_camp_background.mp4'
    import placeholder from '$lib/assets/images/placeholder-background.jpg'

    import * as m from '$lib/paraglide/messages.js';
    import {socialMedia} from "$lib/config/navigation";
    import {formatDate} from "$lib/utils";
    import Logo from "$content/assets/images/seo/logo.png?enhanced";
    import {end_date, start_date} from "$lib/config/site";
    import ProgramSection from "$lib/components/Blocks/ProgramSection.svelte";
    import {name} from "$lib/config/site";
    import NewsSection from "$lib/components/Blocks/NewsSection.svelte";
    import CallToActionSection from "$lib/components/Blocks/CallToActionSection.svelte";
    import type {PageData} from './$types';
    import BikeAnimation from "$lib/components/Blocks/BikeAnimation.svelte";

    const {data}: { data: PageData } = $props();
</script>


<section class="h-screen bg-cover relative overflow-hidden" style={`background-image: url('${placeholder}')`}>

    <video autoplay muted loop
           class="absolute object-cover top-0 bottom-0 right-0 left-0 min-h-full max-h-screen min-w-full">
        <source src={video} type="video/mp4">
    </video>
    <div class="absolute w-full h-full bg-gradient-to-t from-background to-muted/50 to-30% text-foreground leading-relaxed"
         style="font-family: 'Boogaloo', sans-serif;">
        <div style="justify-content: safe center;"
             class="flex h-full flex-col items-center text-2xl md:text-4xl mx-auto py-2 overflow-auto">
            <div class="tracking-widest opacity-0 mt-2 text-center"
                 id="camp-date">
                <time datetime={start_date.toISOString().split('T')[0]}>{formatDate(start_date)}</time>
                -
                <time datetime={end_date.toISOString().split('T')[0]}>{formatDate(end_date)}</time>
            </div>

            <div id="camp-logo"
                 class="opacity-0 mt-4 hover:scale-105 transition-all max-w-sm w-3/4 md:w-2/4 sm:1/4">
                <span class="sr-only">{name}</span>

                <AnimatedLogo
                        class="w-full"
                />
            </div>

            <div class="flex items-center opacity-0 space-x-2 md:justify-between flex-col md:flex-row w-full  max-w-3xl  text-xl md:text-4xl mt-4 uppercase tracking-widest"
                 id="camp-location">
                <div class="flex-1 text-center">
                    {m.münchen()}
                </div>
                <div class="flex-1 text-center">
                    2025
                </div>
                <div class="flex-1 text-center">
                    Luitpoldpark
                </div>
            </div>

            <div id="socials" class="opacity-0 text-zinc-100 flex justify-center space-x-5 mt-2 md:mt-4">
                {#each socialMedia as social}
                    <a href={social.href} class="text-muted-foreground hover:text-foreground"
                       title={social.label}>
                        <span class="sr-only">{social.label}</span>
                        <social.icon class="h-6 w-6"></social.icon>
                    </a>
                {/each}
            </div>

        </div>

    </div>
</section>


<section class="mx-auto max-w-7xl p-3 py-20 lg:px-6 text-2xl text-center">
    <h2 class="text-4xl  font-semibold tracking-tight  sm:text-5xl mb-3">{m.camp_continues()}</h2>
    <p class="text-balance">
        {m.introduction()}
        <br>
        <span class="font-semibold inline-block mt-2">

        {m.be_a_part()} {formatDate(start_date)} – {formatDate(end_date)} in {m.münchen()}.
        </span>
    </p>
</section>

<BikeAnimation></BikeAnimation>

<NewsSection items={data.news}></NewsSection>
<ProgramSection></ProgramSection>
<CallToActionSection></CallToActionSection>
<style>

    #socials {
        animation: entry-zoom 1s ease forwards;
        animation-delay: 3s;
    }

    #camp-date {
        animation: entry-zoom 2s ease forwards;
        animation-delay: 1s;
    }

    #camp-logo {
        animation: entry-shrink 2s ease forwards;
        animation-delay: 0.1s;
    }

    #camp-location {
        animation: entry-zoom 2s ease forwards;
        animation-delay: 1.3s;
    }


    @keyframes entry-zoom {
        from {
            opacity: 0;
            transform: scale(0.5);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes entry-shrink {
        from {
            opacity: 0;
            transform: scale(2);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
</style>
