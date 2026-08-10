import { createRouter, createWebHistory } from "vue-router";
import Main from './home.vue'
import Wallet from './wallet.vue'
import Chart from './chart.vue'
import More from './more.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Main },
    { path: '/chart', name: 'chart', component: Chart },
    { path: '/wallet', name: 'wallet', component: Wallet },
    { path: '/more', name: 'more', component: More },
  ]
})
export default router
