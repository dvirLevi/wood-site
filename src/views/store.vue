<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col center">
        <h5 class="text-center font-weight-light" v-if="$route.params.id != 2">שְׁמַרְיָהוּ הוא מפעל קטן ואיכותי לאדניות
          עץ כפריות. המוצרים שלנו עשויים מחומרי הגלם האיכותיים והחזקים ביותר.</h5>
        <div class="w-100 center mt-3 mb-3">
          <h5>דברו איתנו -
            
          </h5>
          <div class="wrap-w center w mr-2">
              <a href="https://api.whatsapp.com/send?phone=972537234223">
                <i class="lab la-whatsapp"></i>
              </a>
            </div>
        </div>
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
i {
    font-size: 35px;
    color: #ffffff;
  }

  .wrap-w {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    box-shadow: 0 0 14px #000000bd;
  }

  .w {
    background-color: #2cb742;
  }
</style>