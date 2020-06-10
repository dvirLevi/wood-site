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
            img: "https://cdn.pixabay.com/photo/2017/05/19/06/22/desktop-2325627_960_720.jpg",
            id: 1
          },
          {
            img: "https://cdn.pixabay.com/photo/2015/05/31/15/18/technology-792180_960_720.jpg",
            id: 2
          },
          {
            img: "https://cdn.pixabay.com/photo/2017/12/10/15/16/white-horse-3010129_960_720.jpg",
            id: 3
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
  }
 @media (max-width: 767.98px) {
     .row-title {
    height: 340px;
  }

   .row-title .text {
    width: 70%;
    background-color: rgba(255, 255, 255, 0.582);
    /* color: #fff; */
  }

   .row-title .text h1{
    font-size: 23px;
  }
  .row-title .text h4{
    font-size: 18px;
  }
 }
     
</style>