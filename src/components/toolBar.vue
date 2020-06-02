<template>
  <div class="row border-bottom">
    <div class="col-md-4 center-right pr-5">
      <Hamburger />
    </div>
    <div class="col-md-4 center">
      <h1 class="m-4">לוגו</h1>
    </div>
    <div class="col-md-4 center-left">
        <socialIcons />
        <div class="border m-3"></div>
        <cart />
    </div>
  </div>
</template>

<script>
  import Hamburger from '@/components/Hamburger.vue'
  import socialIcons from '@/components/socialIcons.vue'
  import cart from '@/components/cart.vue'

  export default {
    name: 'toolBar',
    components: {
      Hamburger,
      socialIcons,
      cart
    },
    

  }
</script>

<style scoped>
.border {
  height: 30px;
}
</style>