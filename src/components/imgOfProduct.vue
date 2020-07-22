<template>
  <div class="w-100">
    <div class="w-100 img-cover img-product mt-md-0 mt-5 c-p" :style="{backgroundImage: `url(${correntImg})`}" @click="nextImg">

    </div>
    <div class="center mt-2">
      <div class="dotes c-p" :class="{'dotes-bac': imgIndex === index }" v-for="(dote, index) in imgs" :key="dote"
        @click="imgIndex = index">

      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'imgOfProduct',
    props: {
      imgs: Array
    },
    data() {
      return {
        imgIndex: 0
      }
    },
    methods: {
      nextImg() {
        if (this.imgIndex < this.imgs.length - 1) {
          this.imgIndex++
        } else {
          this.imgIndex = 0
        }
      }
    },
    computed: {
      correntImg() {
        return this.imgs[this.imgIndex]
      },

    }
  }
</script>

<style scoped>
  .img-product {
    padding-top: 100%
  }

  .dotes {
    border: solid var(--main-text-color) 1px;
    border-radius: 100px;
    width: 12px;
    height: 12px;
    margin: 5px;
  }

  .dotes-bac {
    background-color: var(--main-text-color);
  }


  @media (max-width: 767.98px) {}
</style>