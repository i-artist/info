// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
Vue.config.productionTip = false
import echarts from 'echarts'
Vue.prototype.echarts=echarts;
router.beforeEach((to, from, next) => {
  // if (to.path == '/login') {
  //     sessionStorage.removeItem('username');
  //   }
  // let user = sessionStorage.getItem('username');
  // if (!user && to.path != '/login') {
  //     next({path: '/login'})
  //   } else {
  //     NProgress.start();
  //     next()
  //   }
      NProgress.start();
      next()
  });
  
  router.afterEach(transition => {
    NProgress.done();
  });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
