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
        addItem(state, item){
            state.itens.push(item)
        },
        updateItem(state, item) {
            let index = state.itens.findIndex(c => c.id == item.id)
            if(index >= 0) {
                state.itens[index] = item
            }
        },
        deleteItem(state, itemId){
            let index = state.itens.findIndex(c => c.id == itemId)
            if(index >= 0) {
                state.itens.splice(index, 1)
            }
        }
    },
    actions : {
        initApp(context){
            Axios.get("http://thalinutri.com.br/ci/vue-ci/api/get_all_data")
                .then(response => {
                    console.log(response.data)
                    context.commit("initItens", response.data)
                })
        },
        addItem(context, item){
            Axios.post("http://thalinutri.com.br/ci/vue-ci/api/save", JSON.stringify(item))
                .then(response => {
                    context.commit("addItem", {id: response.data.insert_id, ...item})    
                })
            
        },
        updateItem(context, item){
            Axios.post("http://thalinutri.com.br/ci/vue-ci/api/update", JSON.stringify(item))
                .then(response => {
                    context.commit("updateItem", item)    
                })
        },
        deleteItem(context, itemId){
            Axios.post("http://thalinutri.com.br/ci/vue-ci/api/delete", JSON.stringify({ id: itemId }))
                .then(response => {
                    context.commit("deleteItem", itemId)
                })
        }

    },
    getters : {
        getItens(state){
            return state.itens
        }
    },
})

export default store