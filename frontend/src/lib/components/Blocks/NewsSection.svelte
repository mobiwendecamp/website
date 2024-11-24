<script lang="ts">

    import {formatDate} from "$lib/utils";
    import * as t from '$lib/paraglide/messages.js';
    import {start_date} from "$lib/config/site";

    const {items} = $props();
</script>

<section class=" py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
        <div class="lg:col-span-2 w-full flex lg:max-w-lg flex-col items-center">
            <h2 class="text-base/7 font-semibold text-primary">{t.news()}</h2>
            <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">{t.news_description()}</p>
        </div>
        <article class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
            <time datetime={items[0].date.toISOString().split('T')[0]} class="block text-sm/6 text-muted-foreground">{formatDate(items[0].date)}</time>
            <h2 id="featured-post"
                class="mt-4 text-pretty text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{items[0].title}</h2>
            <p class="mt-4 text-lg/8 text-muted-foreground">{items[0].description}.</p>
            <div class="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                <div class="flex">
                    <a href="/news/{items[0].slug}" class="text-sm/6 font-semibold text-primary"
                       aria-describedby="featured-post">{t.continue_reading()}<span aria-hidden="true">&rarr;</span></a>
                </div>
            </div>
        </article>
        <div class="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
            <div class="-my-12 divide-y divide-gray-900/10">
                {#each items.slice(1) as item}
                    <article class="py-12">
                        <div class="group relative max-w-xl">
                            <time datetime={item.date.toISOString().split('T')[0]} class="block text-sm/6 text-muted-foreground">
                                {formatDate(item.date)}
                            </time>
                            <h2 class="mt-2 text-lg font-semibold text-foreground group-hover:text-muted-foreground">
                                <a href="/news/{item.slug}">
                                    <span class="absolute inset-0"></span>
                                    {item.title}
                                </a>
                            </h2>
                            <p class="mt-4 text-sm/6 text-muted-foreground">{item.description}</p>
                        </div>

                    </article>
                {/each}
            </div>
        </div>
        <a href="/news"
           class="text-sm/6 font-semibold text-muted-foreground hover:text-primary text-center lg:col-span-2 transition-all"
           aria-describedby="featured-post">{t.show_all_news()} <span aria-hidden="true">&rarr;</span></a>
    </div>
</section>

