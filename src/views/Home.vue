<template>
  <div class="row">
    <div class="col">
      <titleSectionGallery />
      <categorySection />
      <div class="row row-icons center pt-5 pb-5">
         <div class="col-md-2 center icon" v-for="item in icons" :key="item.id">
           <img :src="item.img" alt="">
           <h5 class="text-center text-white mt-3">{{item.text}}</h5>
         </div>
      </div>
      <div class="row row-details pt-5 pb-5 mt-4">
         <div class="col">
           <h5 class="text-center mt-3"> פרטים אדניות פרטים אדניותפרטים אדניות פרטים אדניות פרטים אדניות פרטים אדניות פרטים אדניות פרטים אדניות פרטים אדניות</h5>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import titleSectionGallery from '@/components/titleSectionGallery.vue'
  import categorySection from '@/components/categorySection.vue'

  export default {
    name: 'Home',
    components: {
      titleSectionGallery,
      categorySection
    },
    data() {
      return {
        icons: [
          {
            img: "https://static.wixstatic.com/media/5f09b6_bd609eb080264993a86a658c6eca8bdd~mv2.png/v1/fill/w_79,h_76,al_c,q_95/5f09b6_bd609eb080264993a86a658c6eca8bdd~mv2.webp",
            text: "אדניות אדניות אדניות אדניות",
            id: 1
          },
          {
            img: "https://static.wixstatic.com/media/5f09b6_bd609eb080264993a86a658c6eca8bdd~mv2.png/v1/fill/w_79,h_76,al_c,q_95/5f09b6_bd609eb080264993a86a658c6eca8bdd~mv2.webp",
            text: "אדניות אדניות אדניות אדניות",
            id: 2
          },
          {
            img: "https://static.wixstatic.com/media/5f09b6_bd609eb080264993a86a658c6eca8bdd~mv2.png/v1/fill/w_79,h_76,al_c,q_95/5f09b6_bd609eb080264993a86a658c6eca8bdd~mv2.webp",
            text: "אדניות אדניות אדניות אדניות",
            id: 3
          },
          {
            img: "https://static.wixstatic.com/media/5f09b6_bd609eb080264993a86a658c6eca8bdd~mv2.png/v1/fill/w_79,h_76,al_c,q_95/5f09b6_bd609eb080264993a86a658c6eca8bdd~mv2.webp",
            text: "אדניות אדניות אדניות אדניות",
            id: 4
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .row-icons {
    background-color: #2f2e2e;
  }
  .row-icons img {
    width: 35%;
  }

  .row-icons .icon {
border-left: solid #fff 1px;
  }

  .row-icons .icon:last-child {
border-left: none;
  }

  .row-details {
    background-color: #f2f2f2;

  }
</style>