<template>
  <div id="app" class="container-fluid">
    <toolBar />
    <router-view/>
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

</style>
