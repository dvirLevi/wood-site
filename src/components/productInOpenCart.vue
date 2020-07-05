<template>
  <div class="w-100 center-top product-in-cart p-4">
    <div class="img-cover img-product" :style="{backgroundImage: `url(${item.img[0]})`}">
    </div>
    <div class="text p-2">
      <h4>{{item.name}}</h4>
      <h5>₪{{item.price}}</h5>
      <div class="w-100 center-left">
        <counter @customEvent="changeAmount" :passAmount="item.amount" />
      </div>
    </div>
  </div>



</template>

<script>
  import counter from '@/components/counter.vue'

  export default {
    name: 'productInOpenCart',
    components: {
      counter
    },
    props: {
      item: Object
    },
    data() {
      return {


      }
    },
    computed: {


    },
    methods: {
      changeAmount(amount) {
        this.$store.commit('changeAmount', {
          id: this.item.id,
          amount: amount
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product-in-cart .img-product {
    padding-top: 30%;
    width: 30%;
  }

  .product-in-cart .text {
    width: 70%;
  }

  .product-in-cart .text h4 {
    font-size: 20px;
    font-weight: 300;
    ;
  }

  .product-in-cart .text h5 {
    font-size: 18px;
    font-weight: 300;
    ;
  }


  @media (max-width: 767.98px) {}
</style>