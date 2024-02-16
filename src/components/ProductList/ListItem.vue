<script setup>
const props = defineProps([
  "title",
  "category",
  "price",
  "img",
  "addToCart",
  "addedToWishlist",
]);
const emit = defineEmits(["addToCart"]);
</script>

<template>
  <li class="list-item">
    <div class="img-container">
      <img :src="props.img" alt="image" />
    </div>
    <div class="details">
      <h3>{{ props.title }}</h3>
      <div>
        <p>{{ props.category }}</p>
        <p>{{ props.price }}$</p>
      </div>
    </div>
    <div class="actions">
      <button :disabled="addedToWishlist" @click="emit('addToCart')">
        {{ addedToWishlist ? "Added" : "Add to cart" }}
      </button>
    </div>
  </li>
</template>

<style scoped>
.list-item {
  display: grid;
  grid-template-rows: 20rem 1fr 1fr;
}
.list-item > .img-container {
  display: flex;
}
</style>
