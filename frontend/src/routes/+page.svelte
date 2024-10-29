<script lang="ts">
import AnimatedLogo from "$lib/components/AnimatedLogo.svelte";
import video from '$lib/assets/videos/mobiWende_camp_background.mp4'
import placeholder from '$lib/assets/images/placeholder-background.jpg'
import {Twitter} from "lucide-svelte";

import * as m from '$lib/paraglide/messages.js';


</script>

<section class="h-screen bg-cover relative overflow-hidden" style={`background-image: url('${placeholder}')`}>

    <video autoplay muted loop
           class="absolute object-cover top-0 bottom-0 right-0 left-0 min-h-full max-h-screen min-w-full">
        <source src={video} type="video/mp4">
    </video>
    <div class="absolute w-full h-full bg-zinc-900/50 text-zinc-100 leading-relaxed"
         style="font-family: 'Boogaloo', sans-serif;">
        <div style="justify-content: safe center;" class="flex h-full flex-col items-center text-2xl md:text-4xl mx-auto py-2 overflow-auto">

            <div id="soon" class="uppercase text-center bg-zinc-800/80 px-3 py-1 rounded-full text-xl opacity-0 md:text-3xl">
                {m.more_infos_soon()}
            </div>

            <div class="tracking-widest opacity-0 mt-2 text-center"
                 id="camp-date">
                <time datetime="2025-09-09">09.09</time>  - <time datetime="2025-09-14">14.09</time>
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

                <a href="https://t.me/Mobilitaetswendecamp2023" class="text-zinc-200 hover:text-zinc-300" title="Telegram">
                    <span class="sr-only">Telegram</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 543 450" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.3284 193.722C183.089 130.217 280.285 88.35 328.917 68.1222C467.773 10.3674 496.625 0.334815 515.431 0.00353222C519.568 -0.0693298 528.816 0.95574 534.806 5.8167C539.865 9.92121 541.257 15.4658 541.923 19.3573C542.589 23.2488 543.418 32.1138 542.759 39.0407C535.234 118.102 502.675 309.965 486.111 398.515C479.102 435.984 465.301 448.548 451.941 449.777C422.905 452.449 400.856 430.588 372.733 412.153C328.727 383.306 303.866 365.349 261.15 337.2C211.784 304.669 243.786 286.789 271.919 257.569C279.282 249.921 407.215 133.556 409.691 123C410.001 121.68 410.288 116.759 407.365 114.16C404.441 111.562 400.126 112.45 397.012 113.157C392.599 114.159 322.298 160.625 186.11 252.556C166.155 266.259 148.081 272.935 131.887 272.585C114.034 272.199 79.6928 262.491 54.1636 254.192C22.8511 244.014 -2.03552 238.632 0.131547 221.346C1.26029 212.343 13.6592 203.135 37.3284 193.722Z"/>
                    </svg>

                </a>
                <a href="https://www.instagram.com/mobilitatswendecamp/" class="text-zinc-200 hover:text-zinc-300" title="Instagram">
                    <span class="sr-only">Instagram</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clip-rule="evenodd"/>
                    </svg>
                </a>
                <a href="https://twitter.com/Mobilittswende1" class="text-zinc-200 hover:text-zinc-300" title="Twitter">
                    <span class="sr-only">Twitter</span>
                    <Twitter class="h-6 w-6"></Twitter>
                </a>
                <a href="https://climatejustice.global/@mobilitaetswende_camp_muc"
                   class="text-zinc-200 hover:text-zinc-300" title="Mastodon">
                    <span class="sr-only">Mastodon</span>
                    <svg class="h-6 w-6" viewBox="0 0 74 79" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M73.7014 17.4323C72.5616 9.05152 65.1774 2.4469 56.424 1.1671C54.9472 0.950843 49.3518 0.163818 36.3901 0.163818H36.2933C23.3281 0.163818 20.5465 0.950843 19.0697 1.1671C10.56 2.41145 2.78877 8.34604 0.903306 16.826C-0.00357854 21.0022 -0.100361 25.6322 0.068112 29.8793C0.308275 35.9699 0.354874 42.0498 0.91406 48.1156C1.30064 52.1448 1.97502 56.1419 2.93215 60.0769C4.72441 67.3445 11.9795 73.3925 19.0876 75.86C26.6979 78.4332 34.8821 78.8603 42.724 77.0937C43.5866 76.8952 44.4398 76.6647 45.2833 76.4024C47.1867 75.8033 49.4199 75.1332 51.0616 73.9562C51.0841 73.9397 51.1026 73.9184 51.1156 73.8938C51.1286 73.8693 51.1359 73.8421 51.1368 73.8144V67.9366C51.1364 67.9107 51.1302 67.8852 51.1186 67.862C51.1069 67.8388 51.0902 67.8184 51.0695 67.8025C51.0489 67.7865 51.0249 67.7753 50.9994 67.7696C50.9738 67.764 50.9473 67.7641 50.9218 67.7699C45.8976 68.9569 40.7491 69.5519 35.5836 69.5425C26.694 69.5425 24.3031 65.3699 23.6184 63.6327C23.0681 62.1314 22.7186 60.5654 22.5789 58.9744C22.5775 58.9477 22.5825 58.921 22.5934 58.8965C22.6043 58.8721 22.621 58.8505 22.6419 58.8336C22.6629 58.8167 22.6876 58.8049 22.714 58.7992C22.7404 58.7934 22.7678 58.794 22.794 58.8007C27.7345 59.9796 32.799 60.5746 37.8813 60.5733C39.1036 60.5733 40.3223 60.5733 41.5447 60.5414C46.6562 60.3996 52.0437 60.1408 57.0728 59.1694C57.1983 59.1446 57.3237 59.1233 57.4313 59.0914C65.3638 57.5847 72.9128 52.8555 73.6799 40.8799C73.7086 40.4084 73.7803 35.9415 73.7803 35.4523C73.7839 33.7896 74.3216 23.6576 73.7014 17.4323ZM61.4925 47.3144H53.1514V27.107C53.1514 22.8528 51.3591 20.6832 47.7136 20.6832C43.7061 20.6832 41.6988 23.2499 41.6988 28.3194V39.3803H33.4078V28.3194C33.4078 23.2499 31.3969 20.6832 27.3894 20.6832C23.7654 20.6832 21.9552 22.8528 21.9516 27.107V47.3144H13.6176V26.4937C13.6176 22.2395 14.7157 18.8598 16.9118 16.3545C19.1772 13.8552 22.1488 12.5719 25.8373 12.5719C30.1064 12.5719 33.3325 14.1955 35.4832 17.4394L37.5587 20.8853L39.6377 17.4394C41.7884 14.1955 45.0145 12.5719 49.2765 12.5719C52.9614 12.5719 55.9329 13.8552 58.2055 16.3545C60.4017 18.8574 61.4997 22.2371 61.4997 26.4937L61.4925 47.3144Z"
                              fill="inherit"/>
                    </svg>
                </a>
            </div>

        </div>

    </div>

    <div class="absolute bottom-2 right-5 text-zinc-400 text-sm"><a href="/imprint">Impressum</a></div>
</section>

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
