<template>
    <div class="subcontainer" id="home">
        <div class="mainImg w-100">
            <img src="../assets/img_Home.jpg">
        </div>
        <div class="row maincontainer">
            <div class="col-12 mainLogo">
                <img src="../assets/manl_logo_weiss.png">
            </div>
            <div class="col-12 subtitle">
                KOREANISCHE CUISINE
            </div>
            <div class="row b-Wrapper justify-content-center align-items-center">
                <div class="col blank"></div>
                <div class="col row innerWrapper justify-content-around">
                        <v-btn class="col-sm col-12 btn-component"
                                  :btntitle="item.title"
                                  v-for="(item,idx) in items"
                                  :key="idx">
                            <router-link :to="item.link">{{item.title}}</router-link>
                        </v-btn>
                </div>
                <div class="col blank"></div>
            </div>
        </div>
    </div>
</template>
<script>
    // import MyButton from "../components/MyButton";

    export default {
        // components: {MyButton},
        data() {
            return {
                items: [
                    {
                        title: 'Menu', link: "/#menu"
                    },
                    {
                        title: 'Order', link: 'order'
                    },
                    {
                        title: 'Contact', link: "/#info"
                    }]
            }
        }
    };
</script>

<style scoped>
    .subcontainer{
        height: 90vh;
        justify-content: center;
        align-items: center;
    }
    .mainImg img{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        object-fit: cover; /*사진의 높이 어디서 부터 보이느냐*/
        z-index: -1000;
    }

    .mainLogo {
        margin-top: 8rem;
        text-align: center;
        width: 70%;
        height: auto;
    }
    .subtitle {
        text-align: center;
        font-size: 3rem;
    }
    .b-Wrapper {
        text-align: center;
    }
    .btn-component {
        /*text-align: center;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        margin: 0 1rem 1rem 1rem;
        padding: 0 1rem 0 1rem;
        font-size: 2rem;
        border: 3px solid black;
    }
    @media only screen and (max-width: 900px) {
        .mainLogo img {margin-top: 0; width: 80%;}
        .subtitle {font-size: 1.75rem;}
        .btn-component {font-size: 1.5rem; border: 2px solid black;}
    }
    @media only screen and (max-width: 1474px) {
        .btn-component {margin: 0 0.5rem 0.5rem 0.5rem;
            padding: 0 0.5rem 0 0.5rem; font-size: 1.5rem; border: 2px solid black;}
    }
</style>
