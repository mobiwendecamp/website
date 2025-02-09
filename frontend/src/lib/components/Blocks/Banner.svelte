<script lang="ts">
    import {X} from "lucide-svelte";
    import {Button} from "$lib/components/ui/button";
    import * as t from "$lib/paraglide/messages.js"
    import {onMount} from "svelte";

    let show = $state(false)
    onMount(() => {
        show = localStorage.getItem('banner') !== 'false'
    })

    function closeBanner() {
        show = false
        localStorage.setItem('banner', 'false')
    }
</script>

{#if show}
    <div class="fixed z-20 w-full bottom-0 isolate flex items-center gap-x-6 overflow-hidden bg-background px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
             aria-hidden="true">
            <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#16A34A] to-[#9089fc] opacity-30"
                 style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"/>
        </div>
        <div class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
             aria-hidden="true">
            <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#16A34A] to-[#9089fc] opacity-30"
                 style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"/>
        </div>
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p class="text-sm/6 text-foreground">
                <strong class="font-semibold block sm:inline">{t.onboarding()}</strong>
                <svg viewBox="0 0 2 2" class="mx-2 size-0.5 fill-current hidden sm:inline" aria-hidden="true">
                    <circle cx="1" cy="1" r="1"/>
                </svg>
                {t.next_onboarding()}
            </p>
            <Button href="/news/become_part_of_mobiwende_camp_2025">
                {t.learn_more()} <span aria-hidden="true">&rarr;</span>
            </Button>
        </div>
        <div class="flex flex-1 justify-end">
            <Button onclick={closeBanner} variant="ghost" size="icon">
                <span class="sr-only">Dismiss</span>
                <X class="size-5 text-foreground" aria-hidden="true"/>
            </Button>
        </div>
    </div>
{/if}
