<script>
    import Image from "./Image.svelte";
    import { register } from "swiper/element/bundle";
    register();
    import { EffectFade, Autoplay } from "swiper";

    // Import Swiper styles
    import "swiper/css/effect-fade";
    import "swiper/css";
    import "swiper/css/autoplay";
    import "swiper/css/pagination";
    import "swiper/css/scrollbar";
    export let images = [
        "https://static.standaard.be/Assets/Images_Upload/2020/12/05/fa25907c-363c-11eb-89ac-9ecbc5931203.jpg?width=768&format=jpg",
        "https://static.standaard.be/Assets/Images_Upload/2023/03/10/9c03eed9-2173-4a08-aa06-16f8a1d8492f.jpg?maxheight=416&maxwidth=568&scale=both",
        "https://static.standaard.be/Assets/Images_Upload/2023/03/10/f1aecf3f-7d7f-4d26-b315-5d43193acdfb.jpg",
    ];
</script>

<swiper-container
    modules={[EffectFade, Autoplay]}
    effect="fade"
    slides-per-view="1"
    speed="500"
    autoplay={{
        delay: 3000,
        disableOnInteraction: false,
    }}
    loop="true"
    class="w-full h-full mySwiper"
>
    {#each images as image}
        <swiper-slide class="w-fit h-fit object-cover">
            <img
                src={image}
                loading="lazy"
                alt=""
                class="w-full h-full object-cover"
            />
        </swiper-slide>
    {/each}
</swiper-container>
