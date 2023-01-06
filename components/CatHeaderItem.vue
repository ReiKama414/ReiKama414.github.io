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
            <img alt="" :src="require(`~/assets/images/background/${imgsrc}`)"/>
        </div>
    </div>
</template>