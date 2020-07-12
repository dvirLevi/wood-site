<template>
    <router-link :to="'store/'+ item.path" class="col-md-6 mt-md-4 mb-md-4  mt-2 mb-2 pr-md-3 pl-md-3 pr-0 pl-0 c-p" >
      <div class="w-100 col-box img-cover center-right-bottom" :style="{backgroundImage: `url(${item.img})`}">
        <div class="m-md-5 m-3 c-p">
          <h2 class="p-2">{{item.text}} <i class="las la-arrow-left"></i></h2>
        </div>
      </div>
    </router-link>
</template>

<script>
  // import ButtonLink from '@/components/ButtonLink.vue'

  export default {
    name: 'boxCategory',
    components: {
      // ButtonLink
    },
    props: {
      item: Object
    },
    data() {
      return {

      }
    },
  }
</script>

<style scoped>
.col-box {
  height: 700px;
}
 .col-box h2 {
    background-color: #ffffffbf;
    font-weight: 800;
    /* text-shadow: 2px 2px 4px #000000d1; */
 }

 @media (max-width: 767.98px) {
.col-box {
  height: 340px;
}

.col-box h2 {
  font-size: 30px;
}
 }
</style>