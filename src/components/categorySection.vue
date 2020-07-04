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
            text: "אדניות רגילות"
          },
           {
            img: require("@/assets/IMG_1258.jpg"),
            text: "אדניות מיוחדות"
          },
        ]
      }
    },
  }
</script>

<style scoped>

</style>