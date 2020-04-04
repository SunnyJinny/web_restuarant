<template>
  <div id="app">
    <v-app-bar app color="#D15F3B" dark inverted-scroll>
<!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>

      <router-link to="/#about">About</router-link>
      <router-link to="/#menu">menu</router-link>
<!--      <v-btn text large>Menu</v-btn>-->
      <v-btn text large>Order</v-btn>
      <v-btn text large>Contact</v-btn>

    </v-app-bar>

    <div class="container-fluid" style="margin: 0; padding: 0; width: 100%">
      <div class="contents">
        <router-view></router-view>
        <!--<HomeMain />
        <About />
        <Menu />-->
        <Info />
      </div>
    </div>

  </div>
</template>

<script>
  // import HomeMain from "./views/HomeMain";
  // import About from "./views/About";
  // import Menu from "./views/Menu";
  import Info from "./views/Info";

  export default {
    name: "app",
    components: {
      // HomeMain,
      // About,
      // Menu,
      Info
    }
  };

</script>

<style>
a, a:hover, a:focus, a:active {
  text-decoration: none;
  color: inherit;
}

</style>
