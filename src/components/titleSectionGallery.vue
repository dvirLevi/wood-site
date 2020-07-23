<template>
  <section class="row">
    <div class="col">
      <boxGallery :items="gallery" :item="correntImg" :key="correntImg.id" @sendIndex="sendIndex" :ifShowText="ifShowText" @showText="ifShowText = !ifShowText"  />
    </div>
  </section>
</template>

<script>
  import boxGallery from '@/components/boxGallery.vue'

  export default {
    name: 'titleSectionGallery',
    components: {
      boxGallery
    },
    data() {
      return {
        gallery: [{
            img: require("@/assets/IMG_1242.jpg"),
            id: 1
          },
          {
            img: require("@/assets/IMG_1276.jpg"),
            id: 0
          },
          {
            img: require("@/assets/IMG_1266.jpg"),
            id: 2
          },
          {
            img: require("@/assets/IMG_1243.jpg"),
            id: 3
          },
          {
            img: require("@/assets/IMG_1274.jpg"),
            id: 4
          },
          // {
          //   img: require("@/assets/IMG_1238S.jpg"),
          //   id: 5
          // },
        ],
        indexOfImg: 0,
        ifShowText: true
      }
    },
    mounted() {
      this.changeImg();
      if (this.mobOrDesk) {
        this.ifShowText = false
      }
    },
    methods: {
      changeImg() {
        setInterval(() => {
          this.indexOfImg++
          if (this.indexOfImg === this.gallery.length) {
            this.indexOfImg = 0
          }
        }, 6000)
      },
      sendIndex(index) {
        this.indexOfImg = index
      }

    },
    computed: {
      correntImg() {
        return this.gallery[this.indexOfImg]
      },
       mobOrDesk() {
        return this.$store.getters.mobOrDesk
      }
    },
  }
</script>

<style scoped>
  @media (max-width: 767.98px) {}
</style>