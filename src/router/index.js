import routes from "./routes.js"
import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router