<script setup>
import { computed } from "vue";
const props = defineProps(["title", "category", "price", "count"]);
const emit = defineEmits(["removeHandler", "countHandler"]);
const count = computed({
  get() {
    return props.count;
  },
  set(value) {
    emit("countHandler", value);
  },
});
</script>

<template>
  <li>
    <p>{{ props.title }} - {{ props.category }}</p>
    <div class="actions">
      <input type="number" v-model="count" />
      <button @click="emit('removeHandler')">remove</button>
    </div>
    <p class="price">{{ props.price }}$</p>
  </li>
</template>

<style scoped>
li {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0.5rem 1rem;
  color: black;
  border-radius: 1rem;
  margin-block: 0.5rem;
}

li > .actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
}
li > .actions > input {
  width: 5ch;
}

li > .price {
  margin-left: 2rem;
}
</style>
