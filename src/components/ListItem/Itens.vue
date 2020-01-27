<template>
  <div class="row">
    <div class="col-md-8 offset-2 mt-5">
      <table class="table table-hover table-dark table-striped border border-dark shadow-lg">
        <thead>
          <th>#id</th>
          <th>Titúlo</th>
          <th>Cupom</th>
          <th>Preço</th>
          <th>Ações</th>
        </thead>
        <tbody>
          <Item/>
          <Item/>
          <Item/>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  components: {
    Item: Item
  }
};
</script>