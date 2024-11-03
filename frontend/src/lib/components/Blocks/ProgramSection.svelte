<script lang="ts">
    import AutoScroll from "embla-carousel-auto-scroll";
    import * as Card from "$lib/components/ui/card";
    import * as Carousel from "$lib/components/ui/carousel";
    import {Hammer, Handshake} from "lucide-svelte";

    let guests = [
        {
            'name': 'Arne Semsrott',
            'role': 'Autor / Frag den Staat',
            'img': 'https://tincon.org/media/pages/speaker/arne-semsrott/52c759fe8f-1713354414/arne-semsrott_credit_jorg-bruggemann-700x1050.webp'
        },
        {
            'name': 'Philipp Ruch',
            'role': 'Autor',
            'img': 'https://www.muenchner-kammerspiele.de/images/29742.jpg?w=2000'
        },
        {
            'name': 'Mai Thi Nguyen-Kim',
            'role': 'Moderatorin / Chemikerin',
            'img': 'https://img.sparknews.funkemedien.de/241670536/241670536_1707840213_v16_9_1200.jpeg'
        },
        {
            'name': 'Lukas Ondreka',
            'role': 'Podcaster / Dissens',
            'img': 'https://pbs.twimg.com/profile_images/1453317794410516480/kf-LmuVF_400x400.jpg'
        },
        {
            'name': 'Natascha Strobl',
            'role': 'Politikwissenschaftlerin',
            'img': 'https://hateaid.org/wp-content/uploads/2023/04/Natascha-Strobl-Credit-Christopher-Glanzl-1.jpg'
        },
        {
            'name': 'Und Mehr',
            'role': '...',
            'img': 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
        },
    ];
</script>


<section class="bg-background">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-base/7 font-semibold text-primary">Program</h2>
        <p class="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">Eine Menge los auf dem
            Camp</p>
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
                            class="p-10 w-full"
                    >
                        <Carousel.Content class="space-x-4">
                            <div class="w-2"></div>
                            {#each guests as guest}
                                <Carousel.Item
                                        class="md:basis-1/2 lg:basis-1/3 max-w-xs max-h-full bg-muted p-4 rounded-2xl">
                                    <img class="mx-auto rounded-full aspect-square object-cover"
                                         src={guest.img} alt={guest.name}>
                                    <h3 class="mt-6 text-base/7 font-semibold tracking-tight">{guest.name}</h3>
                                    <p class="text-sm/6 text-muted-foreground0">{guest.role}</p>
                                </Carousel.Item>
                            {/each}
                        </Carousel.Content>
                    </Carousel.Root>
                    <div class="p-10">
                        <h3 class="text-sm/4 font-semibold text-muted-foreground">Gäste</h3>
                        <p class="mt-2 text-lg font-medium tracking-tight">Von Autor:in bis hin zu Beamt:in</p>
                        <p class="mt-2 max-w-lg text-sm/6 text-muted-foreground">Dieses Jahr haben wir uns große mühe
                            gegeben ein breites Spektrum an Gästen einzuladen so das für jeden und jeder was dabei
                            ist.</p>
                    </div>
                </div>
            </div>
            <div class="flex p-px lg:col-span-2 w-full ring-1  bg-card rounded-lg ring-muted-foreground/15 max-lg:rounded-t-[2rem] lg:rounded-tr-[2rem]">
                <div class="overflow-hidden">
                    <div class="h-80 w-full flex items-center p-10 ">
                        <Hammer strokeWidth="1" class="w-full h-full"></Hammer>
                    </div>
                    <div class="p-10">
                        <h3 class="text-sm/4 font-semibold text-muted-foreground">Workshops</h3>
                        <p class="mt-2 text-lg font-medium tracking-tight">Neues lernen und ausprobieren</p>
                        <p class="mt-2 max-w-lg text-sm/6 text-muted-foreground">Wieder haben wir ein breites angebot an
                            Workshops. Von Urban Gardening bis zu Heitzkostenabrechnung richtig lesen. </p>
                    </div>
                </div>
            </div>
            <div class="flex p-px lg:col-span-2 w-full ring-1  bg-card rounded-lg ring-muted-foreground/15 lg:rounded-bl-[2rem]">
                <div class="overflow-hidden">
                    <div class="h-80 w-full flex items-center p-10 ">
                        <Handshake strokeWidth="1" class="w-full h-full"></Handshake>
                    </div>
                    <div class="p-10">
                        <h3 class="text-sm/4 font-semibold text-muted-foreground">Mitmachen</h3>
                        <p class="mt-2 text-lg font-medium tracking-tight">Workshops und Gäste aus der
                            Umgebung</p>
                        <p class="mt-2 max-w-lg text-sm/6 text-muted-foreground">Du möchtest auch einen Workshop geben
                            oder einen Vortrag halte.
                            Melde dich bei uns. </p>
                    </div>
                </div>
            </div>
            <div class="flex p-px lg:col-span-4 ring-1  bg-card rounded-lg ring-muted-foreground/15  max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                <div class="overflow-hidden">
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
                                class="p-10 w-full"
                        >
                            <Carousel.Content class="space-x-4">
                                <div class="w-2"></div>
                                {#each guests as guest}
                                    <Carousel.Item
                                            class="md:basis-1/2 lg:basis-1/3 max-w-xs max-h-full bg-muted p-4 rounded-2xl">
                                        <img class="mx-auto rounded-full aspect-square object-cover"
                                             src={guest.img} alt={guest.name}>
                                        <h3 class="mt-6 text-base/7 font-semibold tracking-tight">{guest.name}</h3>
                                        <p class="text-sm/6 text-muted-foreground0">{guest.role}</p>
                                    </Carousel.Item>
                                {/each}
                            </Carousel.Content>
                        </Carousel.Root>
                    <div class="p-10">
                        <h3 class="text-sm/4 font-semibold text-muted-foreground">Musik</h3>
                        <p class="mt-2 text-lg font-medium tracking-tight ">Bands und Künstler vor Ort</p>
                        <p class="mt-2 max-w-lg text-sm/6 text-muted-foreground">Wir freuen uns ein vielfältiges Angebot
                            von Bands und Künstler:innen
                            auf unserem Camp auftreten tu lassen. Hier kommen alle Genres auf ihre Kosten</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
