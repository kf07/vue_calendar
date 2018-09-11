import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Money from '@/views/Money'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/money',
            name: 'Money',
            component: Money
        }
    ]
})
