<template>
  <div class="container mt-5 page-product">
    <div class="row">
      <div class="col-md-5">
        <div class="w-100 center">
          <h1>{{product.name}}</h1>
        </div>
        <div class="w-100 center mt-5 mb-5">
          <h5>₪{{product.price}}</h5>
        </div>
        <div class="w-100 center mb-5">
          <h4 class="text-center">{{product.description}}</h4>
        </div>
        <div class="w-100 center mb-3">
          <h3 class="text-center">כמות</h3>
        </div>
        <div class="w-100 center">
          <counter @customEvent="incrementAmount" :passAmount="amount" />
        </div>
        <div class="w-100 center mt-5">
          <ButtonLink text="הוסף לעגלה" @customEvent="addToCart" class=" h5" />
        </div>
      </div>
      <div class="col-md-7">
        <div class="w-100 img-cover img-product" :style="{backgroundImage: `url(${product.img})`}">

        </div>
      </div>
    </div>
    <div class="row row-description mt-5 border-bottom pb-5 pt-5">
      <h4 class="col-md-4">{{product.description1}}</h4>
      <h4 class="col-md-4">{{product.description2}}</h4>
      <h4 class="col-md-4">{{product.description3}}</h4>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import counter from '@/components/counter.vue'

  export default {
    name: 'productPage',
    components: {
      counter
    },
    data() {
      return {
amount: 1
      }
    },
    methods: {
      addToCart() {
        this.$store.commit('changeAmount', {
          id: this.$route.params.id,
          amount: this.amount
        })
      },
      incrementAmount(amount) {
        this.amount = amount
      }
    },
    computed: {
      product() {
        let product = this.$store.state.products.filter((val) => {
          return val.id.toString() === this.$route.params.id
        })
        return product[0];
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
</style>