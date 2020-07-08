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
            img: require("@/assets/IMG_1208.jpg"),
            path: "1",
            text: "אדניות"
          },
           {
            img: require("@/assets/IMG_1279.jpg"),
            path: "2",
            text: "אביזרים"
          },
        ]
      }
    },
  }
</script>

<style scoped>

</style>