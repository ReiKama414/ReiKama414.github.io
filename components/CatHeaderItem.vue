<script>
export default {
    props: {
        imgsrc: {
            type: String,
            default: "",
        }
    },
};
</script>

<template>
    <div class="arth-wrapper mb-4">
        <div class="img-wpr">
            <picture>
                <source :srcset="require(`~/assets/images/background/${imgsrc}.webp`)" type="image/webp">
                <img alt="" :src="require(`~/assets/images/background/${imgsrc}.jpg`)"/>
            </picture>
        </div>
    </div>
</template>