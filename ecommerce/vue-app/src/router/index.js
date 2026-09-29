import { createRouter, createWebHistory } from 'vue-router'

// import Welcome from '../components/HelloWorld.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
    // {path: '/welcome', name:'welcome', component: Welcome},
    {path: '/', name:'home', component: HomeView}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router