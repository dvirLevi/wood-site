<template>
  <div class="center social-icons">
    <i class="lab la-facebook-f"></i>
    <i class="lab la-instagram"></i>
  </div>
</template>

<script>
  export default {
    name: 'socialIcons',



  }
</script>

<style scoped>
  .social-icons i {
    margin: 10px;
    cursor: pointer;
  }

  .social-icons .la-instagram {
    font-size: 35px;
  }
   .social-icons .la-facebook-f {
     font-size: 25px;
  }



  @media (max-width: 767.98px) {
    .social-icons i {
      margin: 5px;
      /* font-size: 21px; */
    }
  }
</style>