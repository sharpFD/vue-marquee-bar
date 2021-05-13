import Vue from 'vue'
import Router from 'vue-router'

const IndexPage = () => import('../views/IndexPage')

Vue.use(Router)

export const constantRouterMap = [
    {
        path: "/",
        redirect: "/index"
    },
    {
        path: "/index",
        component: IndexPage
    },
]
export default new Router({
    routes: constantRouterMap
})
