<template>
  <router-link to="/beforePay" class="center cart">
    <p class="m-0 c-p">עגלת קניות <span>{{inCart.length}}</span></p>
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

</style>