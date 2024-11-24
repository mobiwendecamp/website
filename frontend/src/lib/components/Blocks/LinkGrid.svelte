<script lang="ts">
    import heroImage from "$lib/assets/images/heros/hero_1.jpg";
    import {type navigationItemChild} from "$lib/config/navigation";

    const {links}: { links: navigationItemChild[] } = $props();
</script>

<div class="grid grid-cols-2 gap-4">

    {#each links.filter((link)=> !!!link.disabled) as link}
        <a href={link.href}
           style="background-image: url('{link?.image || heroImage}')"
           class="aspect-square bg-cover block bg-center overflow-hidden group hover:scale-105 hover:shadow-2xl transition-all justify-center items-center flex-col bg-muted rounded-2xl">
            <div class="w-full h-full flex justify-center backdrop-blur-sm bg-muted/50 items-center flex-col p-4">
                <link.icon class="w-1/3 h-auto group-hover:animate-bounce transition-all"
                           strokeWidth="1"></link.icon>
                <p class="text-xl text-center font-semibold text-balance break-all line-clamp-2">{link.label()}</p>
            </div>
        </a>
    {/each}
</div>
