import Vue from "vue"
import VueRouter from "vue-router"
import Itens from "./components/ListItem/Itens"

Vue.use(VueRouter)

export const router = new VueRouter({
    routes : [
        {path : "/", component: Itens}
    ]
})