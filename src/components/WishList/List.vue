<script setup>
import ListItem from "./ListItem.vue";

import useWishList from "../../store/useWishList";
const store = useWishList();
</script>

<template>
  <h2>Wishlist</h2>
  <div v-if="store.wishlist.length > 0" class="total">
    Total : {{ store.totalOfCard }}$
  </div>
  <ul v-if="store.wishlist.length > 0">
    <ListItem
      v-for="product in store.wishlist"
      :key="product.id"
      :title="product.title"
      :category="product.category"
      :count="product.count"
      :price="store.totalPrice(product.id)"
      @removeHandler="() => store.removewishlist(product.id)"
      @countHandler="(count) => store.countChangeHandler(product.id, count)"
    />
  </ul>

  <div v-else>No item in wishlist</div>
</template>

<style scoped>
.total {
  margin-block: 2rem;
  text-align: right;
}
</style>
