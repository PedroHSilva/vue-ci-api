<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.couponCode }}</td>
    <td>{{ item.price }}</td>
    <td>
      <button class="btn btn-sm btn-outline-danger">Apagar</button>
      <button class="btn btn-sm btn-outline-warning">Editar</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["item"]
}
</script>