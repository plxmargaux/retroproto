import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard'
import Project from './views/Project'
import Retro from './views/Retro'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            props: true
        },
        {
            path: '/project/:projectId',
            name: 'project',
            component: Project,
            props: true
        },
        {
            path: '/project/:projectId/retro/:retroId',
            name: 'retro',
            component: Retro,
            props: true
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
