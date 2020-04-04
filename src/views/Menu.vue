<template>
    <div class="subcontainer" id="menu">
        <div class="row menu-container align-items-center">
            <div class="col-12 title"> Menu </div>
            <div class="row product-grid-item justify-content-start align-items-center">
                <OneMenu class="col-md-3 col-sm-4 col-6 product"
                         :imgInfo="{src : item.imgsrc }"
                         :mtitle="item.title"
                         :mprice="item.price"
                     v-for="(item,idx) in menus"
                     :key="idx" />
            </div>
        </div>

        <div class="row rowU">
            <div class="col-sm-6 col-12 decoImg" id="left">
            </div>
            <div class="col-sm-6 col-12 decoImg" id="right">
                <router-link to="./Order">go to Order</router-link>
            </div>
        </div>
    </div>

</template>

<script>
    import OneMenu from "../components/OneMenu";

    export default {
        components : { OneMenu },
        data() {
            return {
                menus: [
                    {
                        idx: 1,
                        title: 'Bibimbap',
                        imgsrc: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
                        price: '10,0'
                    },
                    {
                        idx: 2,
                        title: 'Jjin mandu',
                        imgsrc: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
                        price: '9,8'
                    },
                    {
                        idx: 3,
                        title: 'Nakji Bokkeum',
                        imgsrc: 'https://static.myletter.net/20171010/51f8ebe3-8b08-4749-bc7a-dea74e9a4287.jpg',
                        price: '6,8'
                    },
                    {
                        idx:4,
                        title: 'Bulgogi',
                        imgsrc: 'https://static.myletter.net/20181126/00832e91-8ced-451e-84fc-716dbfec940c.jpg',
                        price: '10.0'
                    },
                    {
                        idx: 5,
                        title: 'Bibimbap',
                        imgsrc: 'https://images.unsplash.com/photo-1583579366335-0bd96d9c1e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
                        price: '10.0'
                    },
                    {
                        idx: 6,
                        title: 'Bibimbap',
                        imgsrc: 'https://images.unsplash.com/photo-1584509171119-9054d2d7d9a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
                        price: '10.0'
                    },
                    {
                        idx: 7,
                        title: 'Bibimbap',
                        imgsrc: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                        price: '10.0'
                    },
                    {
                        idx: 8,
                        title: 'Bibimbap',
                        imgsrc: 'https://www.budgetbytes.com/wp-content/uploads/2015/12/Slow-Cooker-Chicken-Tikka-Masala-V2.jpg',
                        price: '10.0'
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    .subcontainer {
        height: auto;
    }
    .menu-container {
        background-color: #FAF8EB;
    }
    .title {
        text-align: center;
        font-size: 2.5rem;
        margin-top: 3rem;
    }
    .product-grid-item {
        padding-right: 15%;
        padding-left: 15%;
    }
    .product {
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    .rowU {
        height: 50vh;
        padding-bottom: 0;
    }
    .decoImg {
        background-color: #245856;
    }
    #left {
        background-image: url("../assets/image2.jpg");
        background-size: cover;
    }
    @media only screen and (max-width: 900px) {
        .decoImg {height: 50vh;}
    }
    @media only screen and (max-width: 600px) {
        #right {display: none;}
    }
</style>
