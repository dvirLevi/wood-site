<template>
  <div class="row row-title img-cover" :style="{backgroundImage: `url(${gallery[indexOfImg].img})`}">
    <div class="col center">
      <div class="text">
        <h1> מוצרים אדניות אדניות אדניות אדניות אדניות אדניות אדניות </h1>
        <h4> מוצרים אדניות אדניות אדניות אדניות אדניות אדניות אדניות </h4>
        <ButtonLink text="המשך לחנות" class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonLink from '@/components/ButtonLink.vue'

  export default {
    name: 'titleSectionGallery',
    components: {
      ButtonLink
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
    min-height: 750px;
  }

  .row-title .text {
    width: 30%;
  }
</style>