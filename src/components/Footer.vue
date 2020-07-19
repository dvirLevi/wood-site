<template>
  <footer class="row text-white mt-4">
    <div class="col">
      <div class="row mt-4 center">
        <div class="col-md-2 center item-in-footer">
          <a href="https://api.whatsapp.com/send?phone=972537234223">
            <p><i class="lab la-whatsapp ml-2"></i>צור קשר בוואטספ</p>
          </a>
        </div>
        <div class="col-md-2 center item-in-footer">
          <!-- <a href=""> -->
          <p class="c-p" @click="showModal = !showModal">תקנון האתר</p>
          <!-- </a> -->
        </div>
        <div class="col-md-2 center item-in-footer">
          <router-link to="/">
            <p>שמריהו – אדניות עץ </p>
          </router-link>
        </div>
        <div class="col-md-2 center item-in-footer">
          <socialIcons />
        </div>
        <Modal v-if="showModal" @customEvent="showModal = !showModal">
          <Regulations />
        </Modal>
      </div>
      <div class="row mt-3">
        <div class="col center">
          <p class="m-2"><a href="https://apps-life.netlify.app" target="_blanc">נבנה ופותח בAppsLife</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  // @ is an alias to /src
  import socialIcons from '@/components/socialIcons.vue'
  import Regulations from "@/components/Regulations.vue"

  export default {
    name: 'Footer',
    components: {
      socialIcons,
      Regulations
    },
    data() {
      return {
        showModal: false
      }
    }
  }
</script>

<style>
  footer {
    background-color: var(--main-text-color);
    ;
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