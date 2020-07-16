<template>
  <div class="container mt-5 page-product">
    <div class="row">
      <div class="col-md-5">
        <div class="w-100 center">
          <h1 class="text-center">{{product.name}}</h1>
        </div>
        <div class="col-md-7 mobile-flex">
          <imgOfProduct :imgs="product.img" />
        </div>
        <div class="w-100 center mt-4 mb-4">
          <h5>₪{{product.price}}</h5>
        </div>
        <div class="w-100 center mb-4">
          <h4 class="text-center">{{product.description}}</h4>
        </div>
        <div class="row center-top">
          <div class="col-md-4">
            <div class="w-100 center mb-1 mt-2">
              <h3 class="text-center">כמות</h3>
            </div>
            <div class="w-100 center mt-2">
              <counter @customEvent="amount = $event" :passAmount="amount" operation="incroment" />
            </div>
          </div>
          <div class="col-md-4" v-if="product.color">
            <div class="w-100 center mb-1 mt-2">
              <h3 class="text-center">צבע</h3>
            </div>
            <div class="w-100 center">
              <selectOption :items="colors" :defulteSelect="selectedColor" themeColor="#444444"
                @mySelect="selectedColor = $event" :width="150" />
            </div>
          </div>
          <div class="col-md-4" v-if="product.size">
            <div class="w-100 center mb-1 mt-2">
              <h3 class="text-center">מידות</h3>
            </div>
            <div class="w-100 center">
              <selectOption :items="sizes" :defulteSelect="selectedSize" themeColor="#444444"
                @mySelect="selectedSize = $event" :width="150" />
            </div>
          </div>
        </div>



        <div class="w-100 center mt-5">
          <ButtonLink text="הוסף לעגלה" @customEvent="addToCart" class=" h5" />
          <openCart v-if="openCart" @close="openCart = !openCart" />
        </div>
        <div class="w-100 center drow mt-5" v-if="product.drow">
          <img :src="product.drow" alt="">
        </div>
      </div>
      <div class="col-md-7 desktop-flex">
        <imgOfProduct :imgs="product.img" />
      </div>
    </div>
    <div class="row row-description  mt-md-5 mt-0 border-bottom pb-5 pt-5">
      <h4 class="col-md-4">{{product.description1}}</h4>
      <h4 class="col-md-4">{{product.description2}}</h4>
      <h4 class="col-md-4">{{product.description3}}</h4>
    </div>
    <div class="row mt-3">
      <div class="col">
        <h3>מוצרים נוספים:</h3>
        <slider>
          <boxProduct v-for="item in products" :item="item" :key="item.id" :numInLine="(mobOrDesk)? 3:5" />
        </slider>
      </div>
    </div>

  </div>
</template>

<script>
  // @ is an alias to /src
  import counter from '@/components/counter.vue'
  import selectOption from '@/components/selectOption.vue'
  import openCart from '@/components/openCart.vue'
  import imgOfProduct from '@/components/imgOfProduct.vue'
  import slider from '@/components/slider.vue'
  import boxProduct from '@/components/boxProduct.vue'
  import shuffle from '@/helpers/shuffle.js'
  import colors from '@/helpers/colors.js'

  export default {
    name: 'productPage',
    components: {
      counter,
      openCart,
      imgOfProduct,
      slider,
      boxProduct,
      selectOption
    },
    data() {
      return {
        amount: 1,
        openCart: false,
        selectedColor: 0,
        selectedSize: 1,
        sizes: [{
            name: "קטן",
            img: false,
            id: 0
          },
          {
            name: "בינוני",
            img: false,
            id: 1
          },
          {
            name: "גדול",
            img: false,
            id: 2
          },
        ]
      }
    },
    mounted() {
      fbq('track', 'ViewContent', {
        content_name: this.$route.name,
      });

    },
    methods: {
      addToCart() {
        let product = {
          ...this.product
        };
        product.amount = this.amount;
        if (product.color) {
          product.color = this.colors[this.selectedColor].name;
        }
        if (product.size) {
          product.size = this.sizes[this.selectedSize].name;
        }
        this.$store.commit('changeAmount', {
          obj: product,
          operation: '+'
        });
        this.openCart = !this.openCart;
      },
    },
    computed: {
      product() {
        let product = this.$store.state.products.filter((val) => {
          return val.id.toString() === this.$route.params.id
        })
        return product[0];
      },
      products() {
        let arr = this.$store.state.products.filter((val) => {
          return val.id.toString() !== this.$route.params.id
        })
        return shuffle(arr);
      },
      colors() {
        return colors
      },
      mobOrDesk() {
        return this.$store.getters.mobOrDesk
      }
    }
  }
</script>

<style scoped>
  .page-product .img-product {
    padding-top: 100%
  }

  .page-product h1 {
    font-size: 40px;
    font-weight: 800;
  }

  .page-product h3 {
    font-size: 20px;
    font-weight: 500;
  }

  .page-product h4 {
    font-size: 20px;
    font-weight: 400;
  }

  .page-product h5 {
    font-size: 18px;
    font-weight: 300;
  }

  .row-description h4 {
    border-left: solid #dee2e6 1px;
    padding: 20px;
  }

  .row-description h4:last-child {
    border-left: none;
  }

  .drow img {
    width: 75%;
  }

  @media (max-width: 767.98px) {
    .row-description h4 {
      border-left: none;
    }

    .drow img {
      width: 100%;
    }
  }
</style>