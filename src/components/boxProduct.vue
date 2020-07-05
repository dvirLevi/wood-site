<template>
  <router-link :to="'/productPage/'+item.id" class="box-product p-2 center">
    <div class="w-100 img-cover img-product" :style="{backgroundImage: `url(${item.img[0]})`}">

    </div>
    <h5 class="w-100 text-center pt-3 pb-3 m-0">{{item.name}}</h5>
    <div class="border w-25"></div>
    <h6 class="w-100 text-center pt-3 pb-3 m-0">₪{{item.price}}</h6>
  </router-link>
</template>

<script>
  // import ButtonLink from '@/components/ButtonLink.vue'

  export default {
    name: 'boxProduct',
    components: {
      // ButtonLink
    },
    props: {
      item: Object
    },
    data() {
      return {

      }
    },
  }
</script>

<style scoped>
  .box-product {
    width: calc(100% / 3 + 0px);
  }

  .box-product .img-product {
    padding-top: 110%
  }

  .box-product h5 {
    font-size: 20px;
    font-weight: 400;
  }

  .box-product h6 {
    font-size: 18px;
    font-weight: 400;

  }

  @media (max-width: 767.98px) {
    .box-product {
      width: calc(100% / 2 + 0px);
    }

    .box-product h5 {
      font-size: 15px;
    }
  }
</style>