import { createRouter, createWebHistory } from 'vue-router'

// import Welcome from '../components/HelloWorld.vue'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import AddProductView from '../views/AddProductView.vue'

const routes = [
    // {path: '/welcome', name:'welcome', component: Welcome},
    {path: '/', name:'home', component: HomeView},
    {path: '/product/:id', name:'product', component: ProductView},
    {path: '/add-product', name:'add-product', component: AddProductView}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router