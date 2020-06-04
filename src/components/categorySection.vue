<template>
  <div class="row">
    <boxCategory v-for="item in category" :key="item.img" :item="item"  />
  </div>
</template>

<script>
  import boxCategory from '@/components/boxCategory.vue'

  export default {
    name: 'categorySection',
    components: {
      boxCategory
    },
    data() {
      return {
        category: [
          {
            img: "https://cdn.pixabay.com/photo/2017/08/24/12/28/flowers-2676662_960_720.jpg",
            text: "אדניות רגילות"
          },
           {
            img: "https://cdn.pixabay.com/photo/2017/02/27/01/40/tulips-2101912_960_720.jpg",
            text: "אדניות מיוחדות"
          },
        ]
      }
    },
  }
</script>

<style scoped>
 
</style>