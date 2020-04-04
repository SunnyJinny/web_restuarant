<template>
    <div class="subcontainer" id="about">
        <div class="row wrapper align-items-center">
            <div class="col-12 blank"></div>
            <div class="col-12 title">About Us</div>
            <div class="col-12 text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
            <div class="col-12 blank"></div>
        </div>
        <div class="row wrapper">
             <div class="col-sm-6 col-12 decoImg" id="left">
                <div class="kleinBild"></div>
             </div>
             <div class="col-sm-6 col-12 decoImg" id="right">

             </div>
        </div>
    </div>

</template>

<script>
    export default {};

</script>

<style scoped>
    .subcontainer {
        background-color: #FAF8EB;
    }
    .wrapper {
        height: 50vh;
        background-color: #FAF8EB;
        padding-bottom: 0;
    }
    .title {
        padding: 0;
        text-align: center;
        font-size: 2.5rem;
    }
    .text {
        font-size: 1.5rem;
        padding-right: 15%;
        padding-left: 15%;
    }
    @media only screen and (max-width: 900px) {
        .title {font-size: 2rem;}
        .text {font-size: 1rem;}
        .decoImg {height: 50vh;}
    }
    @media only screen and (max-width: 600px) {
        #left {display: none;}
    }
    .decoImg {
        background-color: #245856;
    }
    .kleinBild {
        width: 50%;
        height: 50%;
        background-image: url("../assets/image1-1.jpg");
        background-size: cover;
        position: relative;
        top:50%; left:50%;
        transform: translate(-50%, -50%);
    }
    #right {
        background-image: url("../assets/image1-2.jpg");
        background-size: cover;
    }
    .wrapper {
        text-align: justify;
    }


</style>
