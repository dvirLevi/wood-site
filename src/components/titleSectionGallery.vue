<template>
  <div class="row row-title img-cover" :style="{backgroundImage: `url(${gallery[indexOfImg].img})`}">
    <div class="col center">
      <div class="text p-3">
        <h1> מוצרים אדניות אדניות אדניות אדניות אדניות אדניות אדניות </h1>
        <h4> מוצרים אדניות אדניות אדניות אדניות אדניות אדניות אדניות </h4>
        <ButtonLink text="המשך לחנות" link="/store/" class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script>
  // import ButtonLink from '@/components/ButtonLink.vue'

  export default {
    name: 'titleSectionGallery',
    components: {
      // ButtonLink
    },
    data() {
      return {
        gallery: [{
            img: require("@/assets/IMG_11945.jpg"),
            id: 1
          },
          {
            img: require("@/assets/IMG_11999.jpg"),
            id: 2
          },
          {
            img: require("@/assets/IMG_12411.jpg"),
            id: 3
          },
          {
            img: require("@/assets/IMG_1330.jpg"),
            id: 4
          },
          {
            img: require("@/assets/IMG_1238.jpg"),
            id: 5
          },
        ],
        indexOfImg: 0,
      }
    },
    mounted() {
      this.changeImg()
    },
    methods: {
      changeImg() {
        setInterval(() => {
          console.log("asd")
          this.indexOfImg++
          if (this.indexOfImg === this.gallery.length) {
            this.indexOfImg = 0
          }
        }, 4000)
      }
    }



  }
</script>

<style scoped>
  .row-title {
    height: 750px;
  }

  .row-title .text {
    width: 30%;
    margin-left: 40%;
    background-color: rgba(255, 255, 255, 0.582);
  }

  @media (max-width: 767.98px) {
    .row-title {
      height: 340px;
    }

    .row-title .text {
      width: 70%;
      
      margin-left: 0%;
      /* color: #fff; */
    }

    .row-title .text h1 {
      font-size: 23px;
    }

    .row-title .text h4 {
      font-size: 18px;
    }
  }
</style>