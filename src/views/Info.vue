<template>
    <div class="subcontainer w-100" id="info">
        <div class="row info-container justify-content-center align-items-center">
            <div class="col-sm-6 col-12 info">
                <h3>
                    Mon-Fri : 8am - 8pm<br/>
                    Saturday : 9am - 7pm<br/>
                    Sunday : 9am - 8pm<br/>
                </h3>
            </div>
            <div class="col-sm-6 col-12 info" id="left">
                <h3>
                    Kockerellstrasse 4<br/>
                    Aachen 52074<br/>
                    Tel : +49 171 8334687<br/>
                </h3>
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
    .row {
        height: 350px;
    }
    .info {
        font-size: 2rem;
        text-align: center;
        padding: 0;
    }
    #left {
        border-left: 2px solid black;
    }
    @media only screen and (max-width: 600px) {
        .info h3 {font-size: 1.5rem;}

    }

</style>
