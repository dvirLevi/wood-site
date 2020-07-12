<template>
  <div class="row">
    <div class="col position-relative">
      <i class="las la-angle-left arrow-l c-p" @click="scrollR"></i>
      <i class="las la-angle-right arrow-r c-p" @click=" scrollL"></i>
      <div class="box-slider" ref="boxSlider">
        <slot>
          <!-- <div class="slider center-all"> -->
          <!-- <boxArticleImgAndCircleLogo v-for="article in fivoritArticles" :key="article.id" :article="article" /> -->
          <!-- </div> -->
        </slot>
      </div>

    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import boxArticleImgAndCircleLogo from '@/components/boxArticleImgAndCircleLogo.vue'


  export default {
    name: 'slider',
    components: {
      // boxArticleImgAndCircleLogo
    },
    props: [],
    data() {
      return {}
    },
    computed: {

    },
    methods: {
      scrollR() {
        this.$refs.boxSlider.scrollBy(-210, 0);
      },
      scrollL() {
        this.$refs.boxSlider.scrollBy(210, 0);
      },
    }
  }
</script>

<style scoped>
  .box-slider {
    text-align: left;
    width: 100%;
    height: max-content;
    overflow-x: scroll;
    display: flex;
    box-sizing: border-box;
    /* border: 1px solid #000; */
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }

  .arrow-l {
    position: absolute;
    z-index: 1;
    left: -20px;
    top: 40%;
    font-size: 50px;
    text-shadow: 1px 1px 9px #fff;
  }

  .arrow-r {
    position: absolute;
    z-index: 1;
    right: -20px;
    top: 40%;
    font-size: 50px;
    text-shadow: 1px 1px 9px #fff;
  }

  /* .slider {
    width: max-content;
  } */

  /* width */
  .box-slider::-webkit-scrollbar {
    height: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 767.98px) {
    .arrow-l {
    left: -12px;
  }

  .arrow-r {
    right: -12px;
  }
  }
</style>