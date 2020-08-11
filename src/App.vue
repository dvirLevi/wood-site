<template>
  <div id="app" class="container-fluid">
    <toolBar />
    <router-view />
    <Footer />
    <autoModal v-if="ifAutoModel" @closeModal="ifAutoModel = !ifAutoModel" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import toolBar from '@/components/toolBar.vue'
  import Footer from '@/components/Footer.vue'
  import autoModal from '@/components/autoModal.vue'

  export default {
    name: 'Home',
    components: {
      toolBar,
      Footer,
      autoModal
    },
    data() {
      return {
        ifAutoModel: false
      }
    },
    created() {
      let windowWidth = window.innerWidth;
      this.$store.commit('setWindowWidth', windowWidth);
    },
    mounted() {
      setTimeout(()=>{
        this.ifAutoModel = true;
      }, 7000)
    }
  }
</script>

<style>

</style>