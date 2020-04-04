import Vue from 'vue'
import VueRouter from 'vue-router'
import Contents from "../views/Contents";
import Order from "../components/Order";

Vue.use(VueRouter);


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Contents
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '*',
      redirect: '/'
    },
  ],
  scrollBehavior: function(to) {
    if (to.hash) {
      // VueScrollTo.scrollTo(to.hash, 500);
      return { selector: to.hash };
    } else {
      // VueScrollTo.scrollTo({ x: 0, y: 0 }, 500);
      return { x: 0, y: 0 };
    }
  }
})




