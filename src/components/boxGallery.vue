<template>
  <div class="row row-title pb-5 pt-5">
    <div class="img-bac img-cover" :style="{backgroundImage: `url(${item.img})`}">

    </div>
    <div class="col center">
      <div class="text p-3">
        <h1> להפוך את המרפסת בשיינקין לכפר קטן ומטריף! <span v-if="mobOrDesk" @click="$emit('showText')"><i class="las la-angle-down"></i></span></h1>
        <h4 v-if="ifShowText">שמריהו הוא מותג אדניות עץ ישראלי. אנחנו בונים אותן בקפדנות עם חומרי הגלם האיכותיים ביותר, ושולחים אותן במארז
          מעוצב עד לביתכם</h4>
        <ButtonLink text="המשך לחנות" link="/store/all" class="mt-4" />
      </div>
    </div>
    <div class="wrap-points center mb-1">
      <div class="dotes c-p" v-for="(dote, index) in items" :key="dote.id" :class="{'dotes-bac': item.id === dote.id }"
        @click="$emit('sendIndex', index)">

      </div>
    </div>
  </div>
</template>

<script>
  // import ButtonLink from '@/components/ButtonLink.vue'

  export default {
    name: 'boxGallery',
    components: {
      // ButtonLink
    },
    props: {
      item: Object,
      items: Array,
      ifShowText: Boolean
    },
    data() {
      return {
        // ifShowText: true
      }
    },
    mounted() {
      
    },
    computed: {
      mobOrDesk() {
        return this.$store.getters.mobOrDesk
      }
    }
  }
</script>

<style scoped>
  .row-title {
    min-height: 750px;
    position: relative;
  }

  .wrap-points {
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
    z-index: 2;
  }

  .dotes {
    border: solid var(--main-text-color) 1px;
    border-radius: 100px;
    width: 12px;
    height: 12px;
    margin: 5px;
  }

  .dotes-bac {
    background-color: var(--main-text-color);
  }

  .img-bac {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    animation: op-anim 2s;
  }

  @keyframes op-anim {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .row-title .text {
    width: 30%;
    margin-left: 40%;
    background-color: #ffffffa6;
  }

  @media (max-width: 767.98px) {
    .row-title {
      min-height: 420px;
    }

    .row-title .text {
      width: 85%;
      margin-left: 0%;
    }

    .row-title .text h1 {
      font-size: 23px;
    }

    .row-title .text h4 {
      font-size: 18px;
    }
  }
</style>