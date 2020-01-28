import Vue from "vue"
import VueRouter from "vue-router"
import Itens from "./components/ListItem/Itens"
import newItem from "./Pages/NewItem"
import updateItem from "./Pages/updateItem"

Vue.use(VueRouter)

export const router = new VueRouter({
    routes : [
        { path : "/", component: Itens },
        { path : "/new", component: newItem },
        { path : "/update", component: updateItem },
        { path : "*", redirect : "/" }
    ],
    mode : "history"
})