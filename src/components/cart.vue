<template>
  <router-link to="/beforePay" class="center cart">
  <i class="las la-shopping-cart"></i><span>{{inCart.length}}</span>
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
  font-size: 40px;
}
</style>