<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.couponCode }}</td>
    <td>{{ item.price }} R$</td>
    <td>
      <button @click="$store.dispatch('deleteItem', item.id)" class="btn btn-sm btn-outline-danger">Apagar</button>
      <router-link
        :to="{ name: 'updateItem', params: {item: item}}"
        tag="button"
        class="btn btn-sm btn-outline-warning"
      >
        Editar
      </router-link>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["item"]
}
</script>