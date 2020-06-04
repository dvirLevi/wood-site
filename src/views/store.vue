<template>
  <div class="container mt-5">
    <div class="row">
    <div class="col center-right">
      <boxProduct v-for="item in products" :item="item" :key="item.id" />
    </div>
  </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import boxProduct from '@/components/boxProduct.vue'

  export default {
    name: 'store',
    components: {
      boxProduct
    },
    data() {
      return {
        
      }
    },
    computed: {
      products() {
        return this.$store.state.products;
      }
    }
  }
</script>

<style scoped>
  
</style>