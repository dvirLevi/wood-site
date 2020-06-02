<template>
  <div class="" @click.stop="$emit('customEvent')">
    <router-link v-if="link" class="" tag="button" :to="link">{{text}}</router-link>
    <button type="submit" :form="formId" class="" v-else>{{text}}</button>
  </div>
</template>

<script>
  export default {
    name: 'ButtonLink',
    props: {
      link: String,
      text: String,
      formId: String,
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    border: none;
    background-color: #2f2e2e;
    color: #ffffff;
    padding: 15px 25px;
    outline: none;
    font-weight: 400;
  }

  button:hover {
    background-color: #242424;
  }


  @media (max-width: 767.98px) {}

</style>
