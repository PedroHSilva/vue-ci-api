<template>
  <div class="container">
    <h1 class="text-center mt-5">My app</h1>

    <router-view></router-view>
    
    <ul class="list-group">
      <li class="list-group-item" v-for="course in courses">
        <strong>  id: {{ course.id }} </strong>
        <p> {{ course.title }} </p>
        <strong class="text-danger"> {{ course.couponCode }} </strong>
        <strong class="text-info"> {{ course.price }} </strong>
      </li>
    </ul>

  </div>
</template>

<script>
  import axios from "axios"
  import Itens from "./components/ListItem/Itens"
  import NewItem from './Pages/NewItem'

  export default {

    components : {
      Itens,
      NewItem
    },

    data() {
      return {
        courses : []
      } 
    },

    methods : {
      get() {
        axios.get("http://thalinutri.com.br/ci/vue-ci/api/get_all_data")
          .then(response=> {
            this.courses = response.data
          })
        
      },
      save() {
        let course = {
          title: "API",
          couponCode: "APITESTEVUE",
          price: 22.28
        }

        axios.post("http://thalinutri.com.br/ci/vue-ci/api/save", JSON.stringify(course))
          .then(response=>{
            console.log(response);
          })

      },
      update() {
        let course = {
          title: "UPDATE34",
          couponCode: "APITESTEVUE",
          price: 22.28,
          id: 1
        }

        axios.post("http://thalinutri.com.br/ci/vue-ci/api/update", JSON.stringify(course))
          .then(response=>{
            console.log(response);
          })
      },
      remove() {
        let course = {
          id: 8
        }
        axios.post("http://thalinutri.com.br/ci/vue-ci/api/delete", JSON.stringify(course))
        .then(response=> {
          console.log(response);
        })
      }
    }
  }
</script>

<style>
  html {
    height: 100% !impostant;
  }
  body {
    background-color: #002436;
    /*background-image: linear-gradient(to right top, #051937, #002436, #022b2d, #203028, #32342d);*/
  }
</style>
