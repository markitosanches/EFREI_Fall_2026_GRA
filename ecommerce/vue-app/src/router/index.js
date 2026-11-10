import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../store/auth.js'

// import Welcome from '../components/HelloWorld.vue'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import AddProductView from '../views/AddProductView.vue'
import EditProductView from '../views/EditProductView.vue'
import UserView from '../views/UserView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
    // {path: '/welcome', name:'welcome', component: Welcome},
    {path: '/', name:'home', component: HomeView},
    {path: '/product/:id', name:'product', component: ProductView},
    {path: '/add-product', name:'add-product', component: AddProductView, meta: {requiresAuth: true}},
    {path: '/edit-product/:id', name:'edit-product', component: EditProductView, meta: {requiresAuth: true}},
    {path: '/user', name:'user', component: UserView, meta: {requiresAuth: true}},
    {path: '/login', name:'login', component: LoginView}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')

    if(token && !authStore.user){
        authStore.setUser(JSON.parse(user))
    }

    if(to.meta.requiresAuth && !authStore.user){
        next({name: 'login'})
    }else{
        next()
    }

})

export default router