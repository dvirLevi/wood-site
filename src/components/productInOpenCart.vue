<template>
  <div class="w-100 center-top product-in-cart p-md-4 p-2">
    <div class="img-cover img-product" :style="{backgroundImage: `url(${item.img[0]})`}">
    </div>
    <div class="text pr-2 center-right">
      <div class="w-100 center-right">
        <div class="w-100 center-right">
          <h5 class="m-0">{{item.name}} {{item.size}}</h5>
          <div class="img-cover img-color m-1" v-if="item.img" :style="{backgroundImage: `url(${correntColor(item.color)})`}">
          </div>
        </div>
        <h5>₪{{item.price}}</h5>
      </div>
      <div class="w-100 center-left">
        <counter @customEvent="changeAmount" :passAmount="item.amount" />
      </div>
    </div>
  </div>



</template>

<script>
  import counter from '@/components/counter.vue'
  import colors from '@/helpers/colors.js'

  export default {
    name: 'productInOpenCart',
    components: {
      counter
    },
    props: {
      item: Object,
    },
    data() {
      return {


      }
    },
    computed: {
       

    },
    methods: {
      changeAmount(operation) {
        this.$store.commit('changeAmount', {
          obj: this.item,
          operation: operation
        });
      },
      correntColor(name) {
         let color = colors.filter((val)=>{
           return val.name === name
         })
         console.log(color)
         return color[0].img
       }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product-in-cart .img-product {
    padding-top: 20%;
    width: 20%;
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
  }

  .img-color {
    width: 20px;
    height: 20px;
  }


  @media (max-width: 767.98px) {
    .product-in-cart .img-product {
      padding-top: 20%;
      width: 20%;
    }

    .product-in-cart .text h4 {
      font-size: 18px;
    }

    .product-in-cart .text h5 {
      font-size: 15px;
    }
  }
</style>