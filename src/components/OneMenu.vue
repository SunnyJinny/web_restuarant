<template>
    <div class="m-element">
        <img class="m-img" :src="imgInfo.src">
        <h3 class="m-title">{{ mtitle }}</h3>
        <span class="m-price">{{ mprice }}</span>
    </div>
</template>

<script>
export default {
    name: "OneMenu",
    props: ["imgInfo", "mtitle", "mprice"]
};
</script>

<style scoped>

.m-element {
    width: 10rem;
    /*height: 15rem;*/
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    justify-content: center;
    align-items: center;
}
.m-img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    object-fit: cover;
}
.m-title {
    font-size: 1.5rem;
}
.m-price {
    font-size: 1.25rem;
}
@media only screen and (max-width: 900px) {
    .m-title {font-size: 1rem; margin-bottom: 0;}
    .m-price {font-size: 0.75rem;}
}

/*
div {
        border: 1px solid #000;
    }
*/
</style>