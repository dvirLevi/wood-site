<template>
  <div id="app" class="container-fluid">
    <toolBar />
    <router-view />
    <footer class="row text-white mt-5">
      <h2>פוטר</h2>
    </footer>
  </div>
</template>

<script>
  // @ is an alias to /src
  import toolBar from '@/components/toolBar.vue'

  export default {
    name: 'Home',
    components: {
      toolBar
    }
  }
</script>

<style>
  footer {
    background-color: #2f2e2e;
    min-height: 100px
  }
</style>