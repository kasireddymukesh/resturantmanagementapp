import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from'./components/Update.vue'
import Profile from './components/Profile.vue'

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
        name : 'AddResturant',
        component : Add,
        path:'/add'
    },
    {
        name : 'UpdateResturant',
        component : Update,
        path:'/update/:id'
    },
    {
        name:'Profile',
        component:Profile,
         path:'/profile'
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;