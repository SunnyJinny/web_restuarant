<template>
   <div class="subcontainer m-0 p-0">
       <HomeMain />
       <About />
       <Menu />
   </div>
</template>

<script>
    import HomeMain from "./HomeMain";
    import About from "./About";
    import Menu from "./Menu";

    export default {
        components: {
            HomeMain, About, Menu
        }
    }
</script>

<style>

</style>
