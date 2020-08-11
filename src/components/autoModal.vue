<template>
  <!-- <ModalTransition> -->
  <ModalTransition myClass="modal-transition">
    <div class="w-100">
      <span class="h3 c-p" @click="$emit('closeModal')">x</span>
    </div>
    <div class="w-100 center">
      <img src="../assets/ass20.jpg" alt="">
    </div>
    <h2 class="text-center font-weight-bold mt-4">מבצע השקה בשׁמַרְיָהוּ</h2>
    <h1 class="text-center mt-3">הכניסו עכשיו את קוד הקופון <span class="font-weight-bold">HASHAKA</span> בעגלת הקניות </h1>
    <h2 class="text-center font-weight-bold">וקבלו 10 אחוז הנחה על כל המוצרים באתר!!!</h2>
    <div class="w-100 center-all">
     
      <!-- <div class="center-all w-100">
        <h3 class="text-center h4">שלחו הודעה - </h3>
        <div class="wrap-w center-all w m-1">
          <a href="https://api.whatsapp.com/send?phone=972537234223" target="_blanc">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div> -->
     
    </div>
  </ModalTransition>
</template>

<script>
  // @ is an alias to /src
  import ModalTransition from '@/components/ModalTransition.vue'

  export default {
    name: 'autoModal',
    components: {
      ModalTransition
    },
    props: {

    },
    methods: {
      closeModal() {
        // this.$store.commit('closeAutoModel')
      }
    }
  }
</script>

<style scoped>
  img {
    width: 50%;
  }

  i {
    font-size: 50px;
    color: #ffffff;
  }

  .wrap-w {
    width: 70px;
    height: 70px;
    border-radius: 100px;
    box-shadow: 0 0 14px #000000bd;
  }

  .f {
    background-color: #4267b2;
  }

  .w {
    background-color: #2cb742;
  }

  h1 {
        font-size: 31px;
  }

  h2 {
    font-size: 24px;
    width: 100%;
  }

  .link a h4 {
    color: #1a0dab;
    /* text-decoration: underline; */
    cursor: pointer;
    font-weight: 500 !important;
    font-size: 27px;
  }

  .link a h4 span {
    text-decoration: underline;

  }

  .stompa {
    width: 100px;
    height: 100px;
    background-color: #c94719;
    border-radius: 100px;
    position: absolute;
    top: 19px;
    left: 30px;
    font-size: 18px;
    text-align: center;
    color: #fff;
  }


  @media (max-width: 767.98px) {
    img {
      width: 100%;
    }

    h2 {
      font-size: 18px;
      width: 100%;
    }

    h3 {
      font-size: 20px;
    }

    .link a h4 {
      font-size: 18px;
    }

    .stompa {
      top: 4px;
      left: 3px;
    }
  }
</style>