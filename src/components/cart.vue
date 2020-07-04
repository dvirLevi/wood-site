<template>
  <router-link to="/beforePay" class="center cart">
  <i class="fas fa-shopping-cart m-2"></i><span>{{inCart.length}}</span>
  </router-link>
</template>

<script>
  export default {
    name: 'cart',
    computed: {
      inCart() {
        return this.$store.getters.inCart;
      }
    }



  }
</script>

<style scoped>
i {
  font-size: 22px;
}
</style>