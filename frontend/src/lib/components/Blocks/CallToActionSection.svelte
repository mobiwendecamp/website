<script>
    import * as t from '$lib/paraglide/messages.js';

</script>
<section class="">
    <div class="mx-auto max-w-7xl 8">
        <div class="relative isolate overflow-hidden  px-6 py-24 text-center sm:px-16">
            <h2 class="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{t.participate_headline()}</h2>
            <p class="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-muted-foreground">
                {t.participate_description()}
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="/donate" class="rounded-md px-3.5 py-2.5 bg-background text-sm font-semibold text-foreground shadow-sm hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground">{t.donations()}</a>
                <a href="/camp/participate" class="text-sm/6 font-semibold text-foreground">{t.participate()} <span aria-hidden="true">→</span></a>
            </div>
            <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                 aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7" />
                <defs>
                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                        <stop stop-color="hsl(var(--primary-foreground))" />
                        <stop offset="1" stop-color="hsl(var(--primary))" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    </div>
</section>
