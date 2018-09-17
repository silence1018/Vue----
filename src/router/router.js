//引入vue
import Vue  from "vue"
//引入vue-router
import VueRouter from "vue-router"
//引入Home组件
import Home from "../components/Home.vue"
//引入list组件
import List  from "../components/List.vue"
//引入detail组件
import Detail from "../components/Detail.vue"

//安装VueRouter
Vue.use(VueRouter)

//定义组件
// let Home  = {template:"<h1>Home page</h1>"}
// let List  = {template:"<h1>List page</h1>"}
// let Detail  = {template:"<h1>Detail page</h1>"}

//定义路由规则
let routes = [
    {path:"/list/type/:id",component:List},
    {path:"/detail/:id",component:Detail},
    {path:"*",component:Home}
]
//实例化路由
let router = new VueRouter(
    {
     routes,
     // mode:'history',


    })
//监听路由变化
// router.beforeEach(function(route,oldRoute,next) {
//     console.log("当前路由为",route.path)
//     console.log("上个路由为",oldRoute.path)
//     console.log("6666")
//     next()
// })
// router.afterEach(function () {
//     console.log(arguments)
// })


//暴露路接口
export default router