<template>
    <div class="col-md-6  mt-4  mb-4" >
      <div class="w-100 col-box img-cover center-right-bottom" :style="{backgroundImage: `url(${item.img})`}">
        <div class="m-5 c-p">
          <h2>{{item.text}} <i class="fas fa-arrow-left"></i></h2>
        </div>
      </div>
    </div>
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
  min-height: 700px;
}
</style>