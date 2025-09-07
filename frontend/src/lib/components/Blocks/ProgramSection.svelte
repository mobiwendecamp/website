<script lang="ts">
    import AutoScroll from "embla-carousel-auto-scroll";
    import * as Carousel from "$lib/components/ui/carousel";
    import {Hammer, Handshake} from "lucide-svelte";
    import * as t from '$lib/paraglide/messages.js';

    import guest_1 from '$lib/assets/images/program/Katja_Diehl.jpg?enhanced';
    import guest_2 from '$lib/assets/images/program/lisa_poettinger.jpg?enhanced';
    import guest_3 from '$lib/assets/images/program/joshi.png?enhanced';
    import guest_4 from '$lib/assets/images/program/miltiadis.jpeg?enhanced';
    import guest_5 from '$lib/assets/images/program/Ute.jpg?enhanced';
    import guest_6 from '$lib/assets/images/program/samuel.jpg?enhanced';
    import guest_7 from '$lib/assets/images/tire.png?enhanced';
    import bike from '$lib/assets/images/bike.png?enhanced';
    import circus from '$lib/assets/images/circus.png?enhanced';

    import act_1 from '$lib/assets/images/program/hase.jpeg?enhanced';
    import act_2 from '$lib/assets/images/program/rosa_rost.jpg?enhanced';
    import act_3 from '$lib/assets/images/program/ploerre.jpg?enhanced';
    import act_4 from '$lib/assets/images/program/gush.jpeg?enhanced';
    import act_5 from '$lib/assets/images/program/odessa.png?enhanced';


    let guests = [
            {
                'name': 'Katja Diehl',
                'img': guest_1
            },
            {
                'name': 'Lisa Poettinger',
                'img': guest_2
            },
            {
                'name': 'Joschi Wolf',
                'img': guest_3
            },
            {
                'name': 'Miltiadis Oulios',
                'img': guest_4
            },
            {
                'name': 'Ute Vollmann',
                'img': guest_5
            },
            {
                'name': 'Samuel Bosch',
                'img': guest_6
            },
        {
            'name': 'Und viele mehr...',
            img: guest_7
        }
        ]

    let acts = [
        {
            'name': 'Hase',
            'genre': 'Hardcore Punk',
            'img': act_1
        },
        {
            'name': 'ROSA ROST',
            'genre': 'Gazepunk',
            'img': act_2
        },
        {
            'name': 'Plörre',
            'genre': 'Alternative Punk',
            'img': act_3
        },
        {
            'name': 'GUSH',
            'genre': 'Zwiebelpunk',
            'img': act_4
        },
        {
            'name': 'odessa x faye2002',
            'genre': 'Breaks, Ambient, Hardcore',
            'img': act_5
        },
    ];
</script>


<section class="">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-base/7 font-semibold text-primary">{t.program()}</h2>
        <p class="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">{t.program_description()}</p>
        <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <div class="flex p-px lg:col-span-4 w-full ring-1  bg-card rounded-lg ring-muted-foreground/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                <div class="overflow-hidden w-full">
                    <Carousel.Root
                            plugins={[
        AutoScroll({
                                      speed: .5,
                                      stopOnMouseEnter: true,
                                        stopOnInteraction: false
                                    }),
                                  ]}
                            opts={{
                                    loop: true,
                                    align: "start"
                                  }}
                            class="py-5 px-10 w-full"
                    >

                        <div class="absolute h-full w-10  bg-gradient-to-r from-card top-0 z-10"></div>
                        <div class="absolute h-full w-10  bg-gradient-to-l from-card top-0 right-10 z-10"></div>
                        <Carousel.Content class="space-x-4">
                            <div class="w-2"></div>
                            {#each guests as guest}
                                <Carousel.Item
                                        class="basis-1/2 lg:basis-1/3 max-w-xs max-h-full bg-muted p-4 rounded-2xl">


                                    {#if (guest.img)}

                                        <enhanced:img class="mx-auto rounded-full aspect-square object-cover"
                                                      src={guest.img}
                                                      alt={guest.name}/>
                                    {:else}
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 100 100">
                                            <g>
                                                <path
                                                        id="body"
                                                        d="m 2,98 h 96 0 c 0,0 6,-65 -48,-52 c 0,0 -54,-10 -48,52"
                                                        style="fill:none;stroke:#7e05a6;stroke-width:1.6;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:2.1, 2.1;stroke-dashoffset:0;stroke-opacity:0.87"/>
                                                <ellipse
                                                        ry="27"
                                                        rx="27"
                                                        cy="28"
                                                        cx="50"
                                                        id="heady"
                                                        style="fill:none;stroke:#7e05a6;stroke-width:1.3;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:6.5, 8;stroke-dashoffset:4;stroke-opacity:0.87"/>
                                            </g>
                                        </svg>

                                    {/if}
                                    <h3 class="mt-6 lg:text-base/7 font-semibold tracking-tight line-clamp-2 text-sm/7">{guest.name}</h3>
                                </Carousel.Item>
                            {/each}
                        </Carousel.Content>
                    </Carousel.Root>
                    <div class="p-10">
                        <h3 class="text-sm/4 font-semibold text-muted-foreground">{t.guests()}</h3>
                        <p class="mt-2 text-lg font-medium tracking-tight">{t.program_guests_headline()}</p>
                        <p class="mt-2 max-w-lg text-sm/6 text-muted-foreground">{t.program_guests_description()}</p>
                    </div>
                </div>
            </div>
            <div class="group flex p-px lg:col-span-2 w-full ring-1  bg-card rounded-lg ring-muted-foreground/15 max-lg:rounded-t-[2rem] lg:rounded-tr-[2rem]">
                <div class="overflow-hidden">
                    <div class="h-80 w-full flex items-center p-10 group-hover:scale-105 transition ">

                        <enhanced:img class="mx-auto rounded-full aspect-square object-cover"
                                      src={bike}
                                      alt="Ein Fahrrad"/>
                    </div>
                    <div class="p-10">
                        <h3 class="text-sm/4 font-semibold text-muted-foreground">{t.workshops()}</h3>
                        <p class="mt-2 text-lg font-medium tracking-tight">{t.program_workshops_headline()}</p>
                        <p class="mt-2 max-w-lg text-sm/6 text-muted-foreground">{t.program_workshops_description()}</p>
                    </div>
                </div>
            </div>
            <div class=" group flex p-px lg:col-span-2 w-full ring-1  bg-card rounded-lg ring-muted-foreground/15 lg:rounded-bl-[2rem]">
                <div class="overflow-hidden">
                    <div class="h-80 w-full flex items-center p-10 group-hover:scale-105 transition ">
                        <enhanced:img class="mx-auto rounded-full aspect-square object-cover"
                                      src={circus}
                                      alt="Ein Zirkuszelt"/>
                    </div>
                    <div class="p-10">
                        <h3 class="text-sm/4 font-semibold text-muted-foreground">{t.participate()}</h3>
                        <p class="mt-2 text-lg font-medium tracking-tight">{t.program_participate_headline()}</p>
                        <p class="mt-2 max-w-lg text-sm/6 text-muted-foreground">{t.program_participate_description()}</p>
                    </div>
                </div>
            </div>
            <div class="flex p-px lg:col-span-4 ring-1  bg-card rounded-lg ring-muted-foreground/15  max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                <div class="overflow-hidden w-full relative">

                    <Carousel.Root
                            plugins={[
                                AutoScroll({
                                direction: "backward",
                                      speed: .5,
                                      stopOnMouseEnter: true,
                                        stopOnInteraction: false
                                    }),
                                  ]}
                            opts={{
                                    loop: true,
                                    align: "start"
                                  }}
                            class="py-5 px-10 w-full"
                    >

                        <div class="absolute h-full w-10  bg-gradient-to-r from-card top-0 z-10"></div>
                        <div class="absolute h-full w-10  bg-gradient-to-l from-card top-0 right-10 z-10"></div>

                        <Carousel.Content class="space-x-4">
                            <div class="w-2"></div>
                            {#each acts as act}
                                <Carousel.Item
                                        class="bg-muted basis-1/2 lg:basis-1/3  p-4 rounded-2xl">
                                    <enhanced:img class="mx-auto rounded-lg aspect-square object-cover"
                                                  src={act.img} alt={act.genre}/>
                                    <h3 class="mt-2 lg:text-base/7 font-semibold tracking-tight line-clamp-2 text-sm/7">{act.name}</h3>
                                    <p class="lg:text-sm/6 text-xs/6 text-muted-foreground0 break-words">{act.genre}</p>
                                </Carousel.Item>
                            {/each}
                        </Carousel.Content>
                    </Carousel.Root>
                    <div class="p-10">
                        <h3 class="text-sm/4 font-semibold text-muted-foreground">{t.music()}</h3>
                        <p class="mt-2 text-lg font-medium tracking-tight">{t.program_music_headline()}</p>
                        <p class="mt-2 max-w-lg text-sm/6 text-muted-foreground">{t.program_music_description()}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
