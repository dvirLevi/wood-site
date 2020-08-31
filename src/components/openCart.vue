<template>
  <!-- <div class="row row-sticky"> -->
  <!-- <div class="col"> -->
  <div class="bac-menu" @click="$emit('close')">
    <div class="wrap-items center-column-between">
      <div class="w-100 title center">
        <h1 class="w-100 text-center">סל קניות</h1>
        <div class="w-100 box-prod">
        <productInOpenCart v-for="(item, index) in inCart" :item="item" :key="index" />
      </div>
      </div>
      
      <div class="w-100 ">
         <div class="w-100 center-right pr-4">
          <codeDiscount />
          <h5 v-if="discountMoreTwo">15% הנחה בקניית 2 אדניות ומעלה</h5>
        </div>
        <div class="w-100 pl-4 pr-4 pt-3">
          <h3>סכום ביניים</h3>
          <h3>₪{{Payable}}</h3>
        </div>
       
        <div class="w-100 border-top p-md-4 p-3 center">
          <ButtonLink text="מעבר לסל הקניות" link="/beforePay" class="h5 m-0" />
        </div>
        
      </div>
      <!-- <nuxt-link class="items-menu" :to="item.link" v-for="item in categories" :key="item.id">
        {{item.text}}
      </nuxt-link> -->
    </div>
  </div>

</template>

<script>
  import productInOpenCart from '@/components/productInOpenCart.vue'
  import codeDiscount from '@/components/codeDiscount.vue'

  export default {
    name: 'openCart',
    components: {
      productInOpenCart,
      codeDiscount
    },
    props: {

    },
    data() {
      return {


      }
    },
    computed: {
      inCart() {
        return this.$store.getters.inCart;
      },
      Payable() {
        return this.$store.getters.Payable;
      },
       discountMoreTwo() {
        return this.$store.getters.discountMoreTwo;
      }

    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bac-menu {
    position: fixed;
    width: 100%;
    z-index: 100;
    background: #3333338c;
    right: 0;
    top: 0;
    height: 100%;

  }

  .wrap-items {
    position: absolute;
    right: 0;
    top: 0;
    width: 20%;
    background: #ffffff;
    height: 100%;
    flex-direction: column;
    animation-name: op;
    animation-duration: 0.3s;
    display: flex;
  }

  .items-menu {
    margin: 0;
    padding: 7px 10px;
    width: 100%;
    border-bottom: solid #d8d8d8 1px;
    font-size: 21px;
    animation-name: items;
    animation-duration: 0.5s;
    /* animation-delay: 0.5s; */
  }

  .items-menu:last-child {
    border-bottom: none;
  }

  /* .bac-menu .title {
    padding: 30px;
  } */

  .bac-menu .title h1 {
    padding: 15px;
    color: #fff;
    background-color: var(--main-text-color);
  }

  .bac-menu h3 {
    font-size: 26px;
    font-weight: 400;
  }


  @keyframes op {
    0% {
      right: -100%;
    }

    100% {
      right: 0%;
    }
  }

  @keyframes items {
    0% {
      padding: 0px 10px;
    }

    100% {
      padding: 7px 10px;
    }
  }

  .box-prod {
    max-height: 590px;
    overflow: auto;
  }


  @media (max-width: 767.98px) {
    .bac-menu .title h1 {
      padding: 15px;
      font-size: 21px;
    }

    .wrap-items {
      width: 75%;
    }

    .items-menu {
      font-size: 18px;
    }

    .bac-menu h3 {
      font-size: 21px;
    }

    .box-prod {
      max-height: 424px;
      overflow: auto;
    }

    /* .box-img {
      width: 100px;
    } */
  }
</style>