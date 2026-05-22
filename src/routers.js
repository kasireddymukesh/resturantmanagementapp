import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from'./components/Update.vue'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name : 'LoginPage',
        component : Login,
        path:'/login'
    },
    {
        name : 'AddReturant',
        component : Add,
        path:'/add'
    },
    {
        name : 'UpdateResturant',
        component : Update,
        path:'/update'
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;