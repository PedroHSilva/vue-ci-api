<template>
    <div class="row">
        <div class="col-md-6 offset-3">
            <form @submit.prevent="onSubmit" class="card mt-5 p-3 border border-dark bg-dark shadow-lg">

                <h1>Atualizar {{ item.title }}</h1>

                <div class="form-group">
                    <label class="text-light" for="title">Title</label>
                    <input v-model="item.title" type="text" class="form-control" id="title" aria-describedby="title">                    
                </div>

                {{ item.title }}

                <div class="form-group">
                    <label class="text-light" for="couponCode">Coupon</label>
                    <input v-model="item.couponCode" type="text" class="form-control" id="couponCode">
                </div>
                <div class="form-group">
                    <label class="text-light" for="price">Price</label>
                    <input v-model="item.price" type="number" class="form-control" id="price">
                </div>
                <div class="button-container">
                    <router-link
                        to="/"
                        tag="button"
                        class="btn btn-outline-warning"
                    >
                        Back
                    </router-link>
                    <button type="submit" class="btn btn-outline-primary">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                item : {
                    title:'',
                    couponCode: '',
                    price: 0.0
                }
            }
        },

        methods: {
            onSubmit() {
                this.$store.dispatch("updateItem", this.item)
                    .then(()=>{
                        this.$router.push("/")
                    })
            }
        },

        created() {
            this.item = this.$route.params.item
        }
    }

</script>