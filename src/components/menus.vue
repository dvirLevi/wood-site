<template>
  <div class="menu">
    <router-link class="m-3" :to="item.link" v-for="item in categories" :key="item.id" @click.native="$emit('openClose')">
      <h1>{{item.name}}</h1>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'menus',
    data() {
      return {
        
      }
    },
    computed: {
      categories() {
        return this.$store.state.categories;
      }
    }



  }
</script>

<style scoped>
.menu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content:center;
  justify-content: center;
  position: fixed; /* Stay in place */
  z-index: 99; /* Sit on top */
  /* padding-top: 100px; Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(255, 255, 255, 0.849); /* Black w/ opacity */
}

.menu h1 {
  border-bottom: solid #000 4px;
  font-size: 60px;
}
</style>