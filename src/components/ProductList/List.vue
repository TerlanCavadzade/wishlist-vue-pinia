<script setup>
import { ref, onMounted } from "vue";
import useWishList from "../../store/useWishList";
const store = useWishList();
import ListItem from "./ListItem.vue";
import axios from "axios";
const products = ref([]);

const addToCart = (product) => {
  store.addwishlist(product);
  product.addedToWishlist = true;
};

onMounted(async () => {
  const res = await axios("https://dummyjson.com/products");
  products.value = res.data.products.map((product) => ({
    ...product,
    addedToWishlist: store.wishlist.find((item) => item.id === product.id),
  }));
});
</script>

<template>
  <ul class="list-container">
    <ListItem
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :category="product.category"
      :price="product.price"
      :img="product.thumbnail"
      :addedToWishlist="product.addedToWishlist"
      @addToCart="() => addToCart(product)"
    />
  </ul>
</template>

<style scoped>
.list-container {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(min(30rem, 100%), 1fr));
  grid-auto-rows: 1fr;
}
</style>
