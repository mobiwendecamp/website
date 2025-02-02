<script>
    import {socialMedia} from "$lib/config/navigation";
    import * as t from '$lib/paraglide/messages.js';

</script>
<div class="bg-card shadow sm:rounded-lg h-full">
    <div class="px-4 py-5 sm:p-6">
        <h3 class="text-base font-semibold text-foreground">{t.follow_us_on()}</h3>

        <div class="flex justify-around mt-4">
            {#each socialMedia as social}
                <a href={social.href} title={social.label} target="_blank" class="text-muted-foreground hover:text-foreground">
                    <span class="sr-only">{social.label}</span>
                    <social.icon class="h-8 w-8">
                    </social.icon>
                </a>
            {/each}
        </div>
    </div>
</div>
