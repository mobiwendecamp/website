<script lang="ts">
    import AnimatedLogo from "$lib/components/Blocks/AnimatedLogo.svelte";
    import video from '$lib/assets/videos/mobiWende_camp_background.mp4'
    import placeholder from '$lib/assets/images/placeholder-background.jpg'
    import {Twitter} from "lucide-svelte";

    import * as m from '$lib/paraglide/messages.js';
    import {socialMedia} from "$lib/config/navigation";

</script>

<section class="h-screen bg-cover relative overflow-hidden" style={`background-image: url('${placeholder}')`}>

    <video autoplay muted loop
           class="absolute object-cover top-0 bottom-0 right-0 left-0 min-h-full max-h-screen min-w-full">
        <source src={video} type="video/mp4">
    </video>
    <div class="absolute w-full h-full bg-zinc-900/50 text-zinc-100 leading-relaxed"
         style="font-family: 'Boogaloo', sans-serif;">
        <div style="justify-content: safe center;"
             class="flex h-full flex-col items-center text-2xl md:text-4xl mx-auto py-2 overflow-auto">

            <div id="soon"
                 class="uppercase text-center bg-zinc-800/80 px-3 py-1 rounded-full text-xl opacity-0 md:text-3xl">
                {m.more_infos_soon()}
            </div>

            <div class="tracking-widest opacity-0 mt-2 text-center"
                 id="camp-date">
                <time datetime="2025-09-09">09.09</time>
                -
                <time datetime="2025-09-14">14.09</time>
            </div>

            <div id="camp-logo"
                 class="opacity-0 mt-4 hover:scale-105 transition-all max-w-sm w-3/4 md:w-2/4 sm:1/4">
                <span class="sr-only">Mobilitätswende Camp 2025</span>

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
                    <a href={social.href} class="text-zinc-200 hover:text-zinc-300"
                       title="Telegram">
                        <span class="sr-only">{social.label}</span>
                        <social.icon class="h-6 w-6"></social.icon>
                    </a>
                {/each}
            </div>

        </div>

    </div>

    <div class="absolute bottom-2 right-5 text-zinc-400 text-sm"><a href="/imprint">Impressum</a></div>
</section>

<section class="h-screen bg-primary"></section>
<section class="h-screen bg-background"></section>
<style>

    #soon, #socials {
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
