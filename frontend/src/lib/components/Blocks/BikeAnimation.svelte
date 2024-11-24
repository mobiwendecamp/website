<script>
    import {Bike, Flower2} from "lucide-svelte";
    import {onMount} from "svelte";

</script>

{#snippet bikeSnippet()}
    <div class="bike -ml-20 absolute text-foreground w-full bottom-0">
        <svg class="w-auto h-20" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g id="bike 1">
                <g class="tire">
                    <path
                            d="M18.5 21C20.433 21 22 19.433 22 17.5C22 15.567 20.433 14 18.5 14C16.567 14 15 15.567 15 17.5C15 19.433 16.567 21 18.5 21Z"
                            stroke-linecap="round" stroke-linejoin="round" style="fill: hsl(var(--background) / var(--tw-text-opacity))"/>
                    <path id="Vector 4"
                          d="M18.5 17.5V20.5M18.5 17.5H22M18.5 17.5V14.5M18.5 17.5H15.5M18.5 17.5L21 20M18.5 17.5L16 20M18.5 17.5L21 15M18.5 17.5L16 15"
                          stroke-width="0.5"/>
                </g>
                <g class="tire">
                    <path
                            d="M5.5 21C7.433 21 9 19.433 9 17.5C9 15.567 7.433 14 5.5 14C3.567 14 2 15.567 2 17.5C2 19.433 3.567 21 5.5 21Z"
                            stroke-linecap="round" stroke-linejoin="round" style="fill: hsl(var(--background) / var(--tw-text-opacity))"/>
                    <path id="Vector 4_2"
                          d="M5.5 17.5V20.5M5.5 17.5H9M5.5 17.5V14.5M5.5 17.5H2.5M5.5 17.5L8 20M5.5 17.5L3 20M5.5 17.5L8 15M5.5 17.5L3 15"
                          stroke-width="0.5"/>
                </g>
                <path id="Vector"
                      d="M15 6C15.5523 6 16 5.55228 16 5C16 4.44772 15.5523 4 15 4C14.4477 4 14 4.44772 14 5C14 5.55228 14.4477 6 15 6Z"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="fill: hsl(var(--background) / var(--tw-text-opacity))"/>
                <path style="fill: hsl(var(--background) / var(--tw-text-opacity))" id="Vector_2" d="M12 17.5V14L9 11L13 8L15 11H17" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </g>
        </svg>
    </div>
{/snippet}
<div class="border-b-4 w-full h-28 relative border-foreground border-dashed mb-20 overflow-hidden">

    {@render bikeSnippet()}
    <div class="grid grid-cols-8 items-center absolute w-full bottom-0">
        <div class="col-span-2 place-items-center">
            <Flower2></Flower2>
        </div>
        <div class="col-span-3 place-items-center">
            <Flower2></Flower2>
        </div>
        <div class="col-span-3 place-items-center">
            <Flower2></Flower2>
        </div>
    </div>
</div>
<style>
    svg * {
        transform-box: fill-box;
    }


    .bike {
        animation: bikeAnimation 16s cubic-bezier(.56, .45, .61, .74) infinite;
    }


    .tire {
        animation: rotateAnimation 4s linear infinite;
    }

    @keyframes rotateAnimation {
        from {
            transform-origin: center;
            rotate: 0;
        }
        to {
            transform-origin: center;
            rotate: 360deg;
        }
    }


    @keyframes bikeAnimation {
        0% {
            translate: 0 0;
        }
        80% {
            translate: 120%;
        }

        100% {
            translate: 120%;
        }
    }
</style>
