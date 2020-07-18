<template>
  <div class="center social-icons">
    <a href="https://www.facebook.com/Shemaryahu/?view_public_for=101487504963764" target="_blanc">
      <i class="lab la-facebook-f"></i>
    </a>
    <a href="">
      <i class="lab la-instagram"></i>
    </a>
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