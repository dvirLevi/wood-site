<template>
  <div class="center-right" v-if="!discountMoreTwo">
    <template v-if="!discount">
      <input class="ml-2" type="text" @click.stop="" v-model="myCode" placeholder="הכנס קוד קופון">
      <ButtonLink text="הפעל" @customEvent="checkCode" type="button" />
    </template>
    <P class="w-100 text-center m-0" v-else>הנחה של {{discount}}% הופעלה!</P>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Swal from 'sweetalert2'


  export default {
    name: 'codeDiscount',
    components: {

    },
    data() {
      return {
        myCode: "",
        arrCodes: [{
            code: "hashaka",
            discount: 10
          },
          {
            code: "special",
            discount: 15
          }
        ],
        codeHashaka: 'HASHAKA',
        codeSpecial: 'SPECIAL',
      }
    },
    computed: {
      products() {
        return this.$store.getters.inCart
      },
      discount() {
        return this.$store.state.discount
      },
      // ifCode() {
      //   return this.$store.state.ifCode
      // },
      discountMoreTwo() {
        return this.$store.getters.discountMoreTwo;
      }
    },
    // watch: {
    //   products: function (products) {
    //     if (products.length) {
    //       if (this.myCode.toLowerCase() === this.code || this.myCode.toLowerCase() === this.codeGush) {
    //         this.$store.commit('IfCodeTrue', 10)
    //         this.$store.commit('pushNameCode', this.myCode.toLowerCase())
    //       } else if (this.myCode.toLowerCase() === this.codeSpecial) {
    //         this.$store.commit('IfCodeTrue', 15)
    //         this.$store.commit('pushNameCode', this.myCode.toLowerCase())
    //       } else if (this.myCode.toLowerCase() === this.codeBezza) {
    //         this.$store.commit('IfCodeTrue', 10)
    //         this.$store.commit('IfCodeDiscountMessengerTrue', 0)
    //         this.$store.commit('pushNameCode', this.myCode.toLowerCase())
    //       } else if (this.myCode.toLowerCase() === this.napoli200 && this.ifNapoliDeal) {
    //         this.$store.commit('IfCodeTrueInteger', 200)
    //         // this.$store.commit('IfCodeDiscountMessengerTrue', 0)
    //         this.$store.commit('pushNameCode', this.myCode.toLowerCase())

    //       } else {
    //         this.$store.commit('IfCodeFalse')
    //       }
    //     }
    //   }
    // },
    methods: {
      checkCode() {
        let ifTrue = false;
        for (let i in this.arrCodes) {
          if (this.arrCodes[i].code === this.myCode.toLowerCase()) {
            this.$store.commit('pushCode', this.arrCodes[i].discount);
            ifTrue = true;
          }
        }
        if (!ifTrue) {
          Swal.fire({
            icon: 'error',
            text: 'קוד קופון שגוי',
            timer: 1500
          });
        }
      }
    }
  }
</script>

<style scoped>
  input {
    width: 50%;
    border-radius: 5px;
    border: solid var(--main-text-color) 1px;
    color: var(--main-text-color);
    padding: 10px;
  }

  @media (max-width: 767.98px) {}
</style>