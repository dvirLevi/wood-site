<template>
  <nav class="row row-toolbar border-bottom">
    <div class="col-4 center-right pr-md-5 pr-3">
      <Hamburger @openClose="openCloseMenu = !openCloseMenu" :openCloseMenu="openCloseMenu" />
      <menus v-show="openCloseMenu" @openClose="openCloseMenu = !openCloseMenu" />
    </div>
    <div class="col-md-4 center desktop-flex logo">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="logo">
      </router-link>
    </div>
    <div class="col-md-4 col-8 center-left">
      <socialIcons />
      <div class="border m-3"></div>
      <cart />
    </div>
    <div class="col-md-4 center mobile-flex border-top logo">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="logo">
      </router-link>
    </div>
  </nav>
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

  .logo img {
    width: 140px;
  }

  @media (max-width: 767.98px) {
    .logo img {
      width: 107px;
    }
  }
</style>