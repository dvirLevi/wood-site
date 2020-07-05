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
        console.log('qwe')
        if (this.$route.params.id === "regular") {
          console.log("asd")
          return this.$store.state.products.filter((val) => {
            return val.category === "regular"
          })
        } else if (this.$route.params.id === "special") {
          return this.$store.state.products.filter((val) => {
            return val.category === "special"
          })
        }
        return this.$store.state.products;
      }
    }
  }
</script>

<style scoped>

</style>