<template>
  <div class="row row-toolbar border-bottom">
    <div class="col-md-4 center-right pr-5">
      <Hamburger @openClose="openCloseMenu = !openCloseMenu" :openCloseMenu="openCloseMenu" />
      <menus v-if="openCloseMenu" @openClose="openCloseMenu = !openCloseMenu"/>
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
  import menus from '@/components/menus.vue'

  export default {
    name: 'toolBar',
    components: {
      Hamburger,
      socialIcons,
      cart,
      menus
    },
    data() {
      return {
        openCloseMenu: false
      }
    }

  }
</script>

<style scoped>
.row-toolbar {
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 100;
}
.border {
  height: 30px;
}
</style>