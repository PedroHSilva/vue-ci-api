import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        itens : []
    },
    mutations : {
        initItens(state, itens){
            state.itens = itens
        },
        addItem(){
            state.itens.push(itens)
        },
        updateIten() {state, itens},
        deleteIten(state, itens){}
    },
    actions : {
        initApp(context){

        },
        addItem(context, item){},
        updateItem(context, item){},
        deleteItem(context, item){}

    },
    getters : {
        getItens(state){
            return state.itens
        }
    },
})

export default store