<script lang="ts">
    import AutoScroll from "embla-carousel-auto-scroll";
    import * as Carousel from "$lib/components/ui/carousel";
    import {Hammer, Handshake} from "lucide-svelte";
    import * as t from '$lib/paraglide/messages.js';
    import guest_1 from '$content/assets/images/guests/guest_1.jpg?enhanced&blur=30';
    import guest_2 from '$content/assets/images/guests/guest_2.jpg?enhanced&blur=30';
    import guest_3 from '$content/assets/images/guests/guest_3.jpg?enhanced&blur=30';
    import guest_4 from '$content/assets/images/guests/guest_4.jpg?enhanced&blur=30';
    import guest_5 from '$content/assets/images/guests/guest_5.jpg?enhanced&blur=30';
    import guest_6 from '$content/assets/images/guests/guest_6.jpg?enhanced&blur=30';
    import guest_7 from '$content/assets/images/guests/guest_7.jpg?enhanced&blur=30';

    import act_1 from '$content/assets/images/acts/act_1.jpg?enhanced&blur=50&quality=20';
    import act_2 from '$content/assets/images/acts/act_2.jpg?enhanced&blur=50&quality=20';
    import act_3 from '$content/assets/images/acts/act_3.jpg?enhanced&blur=70&quality=20';
    import act_4 from '$content/assets/images/acts/act_4.jpg?enhanced&blur=30&quality=20';
    import act_5 from '$content/assets/images/acts/act_5.jpg?enhanced&blur=70&quality=20';
    import act_6 from '$content/assets/images/acts/act_6.jpg?enhanced&blur=50&quality=20';

    let guests = [
        {
            'name': 'Noch Geheim',
            'role': 'Autor*in',
            'img': guest_1
        },
        {
            'name': 'Nicht angekündigt',
            'role': 'Comedian',
            'img': guest_2
        },
        {
            'name': 'Na neugierig',
            'role': 'Moderator*in',
            'img': guest_3
        },
        {
            'name': 'Nicht entbluren :O',
            'role': 'Podcaster*in',
            'img': guest_4
        },
        {
            'name': 'Du kennst die Devtools',
            'role': 'Wissenschaftler*in',
            'img': guest_5
        },
        {
            'name': 'Musst trotzdem',
            'role': 'Musiker*in',
            'img': guest_6
        },
        {
            'name': 'Warten',
            'role': 'Activist*in',
            'img': guest_7
        },
    ];
    let acts = [
        {
            'genre': 'Rap',
            'img': act_1
        },
        {
            'genre': 'Rock',
            'img': act_2
        },
        {
            'genre': 'Electro',
            'img': act_3
        },
        {
            'genre': 'Pop',
            'img': act_4
        },
        {
            'genre': 'Punk',
            'img': act_5
        },
        {
            'genre': 'Metal',
            'img': act_6
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

                                    <enhanced:img class="mx-auto rounded-full aspect-square object-cover"
                                                  src={guest.img} alt={guest.name}/>
                                    <h3 class="mt-6 lg:text-base/7 font-semibold tracking-tight line-clamp-2 text-sm/7 blur-sm">{guest.name}</h3>
                                    <p class="lg:text-sm/6 text-xs/6 text-muted-foreground0 break-words">{guest.role}</p>
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
            <div class="flex p-px lg:col-span-2 w-full ring-1  bg-card rounded-lg ring-muted-foreground/15 max-lg:rounded-t-[2rem] lg:rounded-tr-[2rem]">
                <div class="overflow-hidden">
                    <div class="h-80 w-full flex items-center p-10 ">
                        <Hammer strokeWidth="1" class="w-full h-full"></Hammer>
                    </div>
                    <div class="p-10">
                        <h3 class="text-sm/4 font-semibold text-muted-foreground">{t.workshops()}</h3>
                        <p class="mt-2 text-lg font-medium tracking-tight">{t.program_workshops_headline()}</p>
                        <p class="mt-2 max-w-lg text-sm/6 text-muted-foreground">{t.program_workshops_description()}</p>
                    </div>
                </div>
            </div>
            <div class="flex p-px lg:col-span-2 w-full ring-1  bg-card rounded-lg ring-muted-foreground/15 lg:rounded-bl-[2rem]">
                <div class="overflow-hidden">
                    <div class="h-80 w-full flex items-center p-10 ">
                        <Handshake strokeWidth="1" class="w-full h-full"></Handshake>
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
                                         src={act.img} alt={act.genre} />
                                    <h3 class="mt-2 lg:text-base/7 font-semibold tracking-tight line-clamp-2 text-sm/7">{act.genre}</h3>
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
