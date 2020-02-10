import Vue from "vue"
import Vuex from "vuex"
import Axios from "axios"

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
            Axios.get("http://thalinutri.com.br/ci/vue-ci/api/get_all_data")
                .then(response => {
                    console.log(response.data)
                    context.commit("initItens", response.data)
                })
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