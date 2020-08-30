<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <h3 class="text-center font-weight-light" v-if="$route.params.id != 2">שׁמַרְיָהוּ הוא מפעל קטן ואיכותי לאדניות עץ כפריות. המוצרים שלנו עשויים מחומרי הגלם האיכותיים והחזקים ביותר. דברו איתנו - <a href="https://api.whatsapp.com/send?phone=972537234223">
            <i class="lab la-whatsapp ml-2"></i>
          </a></h3>
      </div>
    </div>
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
    mounted() {
      fbq('track', 'ViewContent', {
        content_name: this.$route.name,
      });
    },
    computed: {
      products() {
        if (this.$route.params.id === "1") {
          return this.$store.state.products.filter((val) => {
            return val.category === "1"
          })
        } else if (this.$route.params.id === "2") {
          return this.$store.state.products.filter((val) => {
            return val.category === "2"
          })
        }
        return this.$store.state.products;
      }
    }
  }
</script>

<style scoped>

</style>