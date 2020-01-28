<template>
    <div class="row">
        <div class="col-md-6 offset-3">
            <form class="card mt-5 p-3 border border-dark bg-dark shadow-lg">
                <h1 class="text-light">Atualizar</h1>
                <div class="form-group">
                    <label class="text-light" for="title">Title</label>
                    <input type="text" class="form-control" id="title" aria-describedby="title">                    
                </div>
                <div class="form-group">
                    <label class="text-light" for="couponCode">Coupon</label>
                    <input type="text" class="form-control" id="couponCode">
                </div>
                <div class="form-group">
                    <label class="text-light" for="price">Price</label>
                    <input type="number" class="form-control" id="price">
                </div>
                <div class="button-container">
                    <button class="btn btn-outline-warning" type="reset">Limpar</button>
                    <button type="submit" class="btn btn-outline-primary">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>