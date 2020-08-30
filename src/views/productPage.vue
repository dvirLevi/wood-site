<template>
  <div class="container mt-5 page-product">
    <div class="row">
      <div class="col-md-5">
        <div class="w-100 center-right">
          <router-link to="/store/all" tag="h5" class="text-center c-p"><i class="las la-angle-right"></i>חזרה
          </router-link>
        </div>
        <div class="w-100 center">
          <h1 class="text-center">{{product.name}}</h1>
        </div>
        <div class="col-md-7 mobile-flex p-0">
          <imgOfProduct :imgs="product.img" />
        </div>
        
        <div class="w-100 center mb-4">
          <h4 class="text-center">{{product.description}}</h4>
        </div>
        <div class="row center-top">
          <div class="col-md-4">
            <div class="w-100 center mb-1 mt-2">
              <h3 class="text-center">כמות <span v-if="amountInPackage">{{amountInPackage}}</span></h3>
            </div>
            <div class="w-100 center mt-2">
              <counter @customEvent="amount = $event" :passAmount="amount" operation="incroment" />
            </div>
          </div>
          <div class="col-md-4" v-if="product.color">
            <div class="w-100 center mb-1 mt-md-2 mt-3">
              <h3 class="text-center">תוספת צבע</h3>
            </div>
            <div class="w-100 center">
              <selectOption :items="colors" :defulteSelect="selectedColor" themeColor="#444444"
                @mySelect="selectedColor = $event" :width="150" />
            </div>
          </div>
          <div class="col-md-4" v-if="product.size">
            <div class="w-100 center mb-1 mt-2">
              <h3 class="text-center">דגם</h3>
            </div>
            <div class="w-100 center">
              <selectOption :items="sizes" :defulteSelect="selectedSize" themeColor="#444444"
                @mySelect="selectedSize = $event" :width="150" />
            </div>
          </div>
        </div>
<div class="w-100 center mt-4 mb-4">
          <h2>₪{{computePrice}}</h2>
        </div>


        <div class="w-100 center mt-4">
          <ButtonLink text="הוסף לעגלה" @customEvent="addToCart" class=" h5" />
          <openCart v-if="openCart" @close="openCart = !openCart" />
        </div>
        <div class="w-100 center drow mt-5" v-if="product.drow">
          <img class="c-p" :src="product.drow" alt="" @click="showDrow = true">
          <Modal v-if="showDrow && !mobOrDesk" @customEvent="showDrow = !showDrow">
            <img :src="product.drow" alt="drow">
          </Modal>
        </div>
      </div>
      <div class="col-md-7 desktop-flex">
        <imgOfProduct :imgs="product.img" />
      </div>
    </div>
    <div class="row row-description  mt-md-5 mt-0 border-bottom pb-3 pt-3"
      v-if="product.description1 || product.description2 || product.description3">
      <div class="col-md-4 description" v-if="product.description1" v-html="product.description1"></div>
      <div class="col-md-4 description" v-if="product.description2" v-html="product.description2"></div>
      <div class="col-md-4 description" v-if="product.description3" v-html="product.description3"></div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <h2 class="font-weight-bold">מוצרים נוספים:</h2>
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
        showDrow: false,
        amount: 1,
        openCart: false,
        selectedColor: 0,
        selectedSize: 0,
      }
    },
    created() {
      this.selectedSize = this.sizes[0].id;

    },
    mounted() {
      fbq('track', 'ViewContent', {
        content_name: this.$route.name,
      });
    },
    methods: {
      addToCart() {
        fbq('track', 'AddToCart');
        let product = {
          ...this.product
        };
        product.amount = this.amount;
        product.price = this.computePrice;
        if (product.color) {
          product.color = this.colors.filter((val) => {
            return val.id === this.selectedColor
          })[0].name;
        }
        if (product.size) {
          product.size = this.computeSelectedSize.name;
        }
        this.$store.commit('changeAmount', {
          obj: product,
          operation: '+'
        });
        this.openCart = !this.openCart;
      },
    },
    computed: {
      route() {
        return this.$route.params.id
      },
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
      sizes() {
        return this.product.type
      },
      computeSelectedSize() {
        return this.sizes.filter((val) => {
          return val.id === this.selectedSize
        })[0]
      },
      computePrice() {
        let price = this.computeSelectedSize.price;
        if (this.selectedColor) {
          price += 100;
        }
        return price
      },
      amountInPackage() {
        if (this.product.name === "שלטים") {
          return '(10 פריטים בחבילה)'
        } else if (this.product.name === "שקי אדמה") {
          return '(כל שק מכיל 25 ליטר תערובת)'
        }
        return false
      },
      mobOrDesk() {
        return this.$store.getters.mobOrDesk
      }
    },
    watch: {
      route: function () {
        this.selectedColor = 0;
        this.selectedSize = this.sizes[0].id;
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

  /* .page-product h5 {
    font-size: 18px;
    font-weight: 300;
  } */

  .row-description .description {
    border-left: solid #dee2e6 1px;
    padding: 20px;
  }

  .row-description .description:last-child {
    border-left: none;
  }

  .drow img {
    width: 100%;
  }

  @media (max-width: 767.98px) {
    .row-description .description {
      border-left: none;
      position: relative;
    }

    .row-description .description::before {
      content: "";
      border-top: solid #dee2e6 1px;
      position: absolute;
      top: 0;
      right: 20px;
      width: 35%;
    }

    .row-description .description:first-child::before {
      content: "";
      border-top: none;
      position: absolute;
      top: 0;
      right: 20px;
      width: 35%;
    }



    .drow img {
      width: 100%;
    }
  }
</style>