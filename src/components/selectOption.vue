<template>
  <!-- <div class="w-100 center-all"> -->
  <div class="butt p-2 c-p center-between m-1" @click="showMenu = !showMenu"
    :style="{border: '1px solid' + themeColor, width: width + 'px' }">
    <p class="m-0">{{correntSelect.name}}</p>
    <div class="img-cover img-color" v-if="correntSelect.img" :style="{backgroundImage: `url(${correntSelect.img})`}">
    </div>
    <div class="menu w-100 center" v-if="showMenu">
      <div class="w-100 center-between p-1 border-top border-bottem m-0 c-p" v-for="item in items" :key="item.id"
        @click="select(item)">
        <p>{{item.name}}</p>
        <div class="img-cover img-color" v-if="item.img" :style="{backgroundImage: `url(${item.img})`}">
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue
  // import * as KosherZmanim from "kosher-zmanim";

  export default {
    name: "selectOption",
    components: {},
    props: {
      width: Number,
      items: Array,
      defulteSelect: Number,
      themeColor: String
    },
    data() {
      return {
        showMenu: false,
      };
    },
    methods: {
      select(el) {
        this.$emit('mySelect', el.id)
      },
    },
    computed: {
      correntSelect() {
        let select = this.items.filter((val) => {
          return val.id === this.defulteSelect;
        })
        return select[0]
      }
    }
  };
</script>

<style scoped>
  .butt {
    /* background-color: #085f63; */
    border-radius: 5px;
    color: var(--main-text-color);
    font-size: 20px;
    /* font-weight: 100; */
    position: relative;
    user-select: none;
    /* margin-top: 2px; */
  }

  .menu {
    position: absolute;
    background-color: #fff;
    color: #000;
    z-index: 4;
    top: 101%;
    right: 0;
    box-shadow: 2px 7px 11px #00000054;
    max-height: 300px;
    overflow: auto;
  }

  .menu::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .img-color {
      width: 30px;
      padding-top: 21%;
    }

  p {
    font-size: 12px;
    margin: 0px;
  }

  @media (max-width: 767.98px) {
    
  }
</style>