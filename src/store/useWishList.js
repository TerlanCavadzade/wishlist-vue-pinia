import { defineStore } from "pinia";

const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    wishlist: [],
  }),
  actions: {
    addwishlist(item) {
      this.wishlist.push({ ...item, count: 1 });
    },
    removewishlist(id) {
      this.wishlist = this.wishlist.filter((i) => i.id !== id);
    },
    countChangeHandler(id, count) {
      if (count < 1) {
        this.removewishlist(id);
      }
      this.wishlist = this.wishlist.map((item) => {
        return item.id === id ? { ...item, count } : item;
      });
    },
  },
  getters: {
    totalPrice(state) {
      return (id) => {
        const product = state.wishlist.find((i) => i.id === id);
        return product.price * product.count;
      };
    },
    totalOfCard(state) {
      return state.wishlist.reduce(
        (acc, item) => acc + item.price * item.count,
        0,
      );
    },
  },
});

export default useWishlistStore;
