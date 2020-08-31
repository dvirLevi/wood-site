<template>
  <router-link :to="'/productPage/'+item.id" class="box-product p-2 center" :style="{minWidth: `calc(100% / ${numInLine} + 0px)`}">
  <div class="label center" v-if="item.label">
    {{item.label}}
  </div>
    <div class="w-100 img-cover img-product" :style="{backgroundImage: `url(${item.img[0]})`}">

    </div>
    <h5 class="w-100 text-center pt-3 pb-3 m-0">{{item.name}}</h5>
    <div class="border w-25"></div>
    <h6 class="w-100 text-center pt-3 pb-3 m-0">₪{{item.type[0].price}}</h6>
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
      item: Object,
      numInLine: {
        default() {
          return (this.$store.getters.mobOrDesk)? 2:3
        },
        type: Number
      }
    },
    data() {
      return {

      }
    },
    computed: {
       mobOrDesk() {
        return this.$store.getters.mobOrDesk
      }
    }
  }
</script>

<style scoped>
  .box-product {
    /* min-width: calc(100% / 3 + 0px); */
    scroll-snap-align: end;
    position: relative;
  }

  .label {
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 50px;
    text-align: center;
    /* border-radius: 100px; */
    background-color: #6787a9;
    color: #fff;
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