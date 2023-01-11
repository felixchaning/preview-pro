import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"
import BasicLayout from "../layouts/BasicLayout.vue"
import BlankLayout from "../layouts/BlankLayout.vue"
import WelcomePage from "../views/Page1.vue"
import NotFoundPage from "../views/404.vue"
import LoginPage from "../views/Login/Index.vue"
export default createRouter({
  history: createWebHashHistory(),
  // history: hasGithubPages ? createWebHashHistory() : createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      meta: { title: "Home" },
      component: BasicLayout,
      redirect: "/dashboard",
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          meta: { title: "首页" },
          component: () => import("../views/admins/Dashboard/Index.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      meta: { title: "欢迎", icon: "icon-icon-test" },
      component: LoginPage
    },
    {
      path: "/404",
      name: "404",
      meta: { title: "404", icon: "icon-icon-test" },
      component: NotFoundPage
    }
  ]
})
