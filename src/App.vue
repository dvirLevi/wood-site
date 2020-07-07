<template>
  <div id="app" class="container-fluid">
    <toolBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import toolBar from '@/components/toolBar.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'Home',
    components: {
      toolBar,
      Footer
    }
  }
</script>

<style>
  
</style>