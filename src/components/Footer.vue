<template>
  <footer class="row text-white mt-4 center">
    <div class="col-md-2 center item-in-footer">
      <a href="https://api.whatsapp.com/send?phone=972537234223">
        <p><i class="lab la-whatsapp m-2 h6"></i>צור קשר בוואטספ</p>
      </a>
    </div>
    <div class="col-md-2 center item-in-footer">
      <a href="">
        <p>תקנון האתר</p>
      </a>
    </div>
    <div class="col-md-2 center item-in-footer">
      <a href="">
        <p>שמריהו – אדניות עץ </p>
      </a>
    </div>
    <div class="col-md-2 center item-in-footer">
      <socialIcons />
    </div>
  </footer>
</template>

<script>
  // @ is an alias to /src
  import socialIcons from '@/components/socialIcons.vue'

  export default {
    name: 'Footer',
    components: {
      socialIcons
    }
  }
</script>

<style>
  footer {
    background-color: var(--main-text-color);;
    min-height: 100px
  }

  footer p {
    margin: 0px;
  }

  footer .item-in-footer {
    border-left: solid 1px #fff;
  }

  footer .item-in-footer:last-child {
    border-left: none;
  }

   @media (max-width: 767.98px) {
     footer .item-in-footer {
    border-left: none;
    padding: 20px 0px;
    position: relative;
  }

  footer .item-in-footer:before {
      content: "";
      border-bottom: 3px solid #fff;
      bottom: 0;
      width: 50px;
      height: 1px;
      display: block;
      position: absolute;
    }

    footer .item-in-footer:last-child:before {
      content: "";
      border-bottom: none;
      bottom: 0;
      width: 50px;
      height: 1px;
      display: block;
      position: absolute;
    }
   }
</style>