<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-6">
            <h4>פרטי ההזמנה</h4>
            <div class="w-100" v-for="product in inCart" :key="product.id">
              <P class="font-weight-bold">{{ product.name }}</P>
              <P>מחיר: {{ product.price }} ₪</P>
              <P>כמות: {{ product.amount }}</P>
              <P>סה"כ למוצר: {{ product.amount * product.price }}</P>
            </div>
            <div class="w-100">
              <!-- <p class="w-100" v-if="discount">הנחת קופון: {{discount}}%- </p> -->
              <p class="w-100" v-if="ifMessenger">
                משלוח עד הבית {{ messengerPrice }} ₪
              </p>
              <h5>סה"כ לתשלום: {{ PayablePlusMessenger }} ₪</h5>
              <!-- <h5>סה"כ לתשלום <span v-if="messenger">כולל משלוח</span>: {{allPayable}} ₪</h5> -->
            </div>
          </div>
          <div class="col-md-6">
            <h4>פרטי הלקוח</h4>
            <div class="w-100">
              <P>שם: {{ clientDatdlis.name }}</P>
              <P>טלפון: {{ clientDatdlis.tel }}</P>
              <P>מייל: {{ clientDatdlis.mail }}</P>
              <P>עיר: {{ clientDatdlis.city }}</P>
              <P>רחוב: {{ clientDatdlis.address }}</P>
              <P>מס' בית: {{ clientDatdlis.namHome }}</P>
              <!-- <P>מיקוד: {{clientDatdlis.mikod}}</P> -->
              <P>הערות: {{ clientDatdlis.note }}</P>
            </div>
          </div>
        </div>
        <div class="row border-top">
          <div class="col center-right mt-4">
            <ButtonLink class="m-1" text="חזרה לחנות" link="/store" />
            <ButtonLink class="m-1" link="/beforePay" text="לעריכת פרטים אישיים" />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <form v-show="false" ref="myForm" name="formname" method="POST"
          action="https://direct.tranzila.com/sabresltdch/iframenew.php" target="iframe">
          <input id="sum" name="sum" :value="PayablePlusMessenger" />
          <input id="currency" name="currency" value="1" />
          <input id="lang" name="lang" value="il" />
          <input id="cred_type" name="cred_type" :value="ifCredit" />
          <input v-if="ifCredit === 8" id="npay" name="npay" :value="numPay - 1" />
          <input v-if="ifCredit === 8" id="spay" name="spay" :value="namPayAmount" />
          <input v-if="ifCredit === 8" id="fpay" name="fpay" :value="firstPayAmount" />
          <input id="contact" name="contact" :value="clientDatdlis.name" />
          <input id="phone" name="phone" :value="clientDatdlis.tel" />
          <input id="email" name="email" :value="clientDatdlis.mail" />
          <input id="city" name="city" :value="clientDatdlis.city" />
          <input id="address" name="address" :value="clientDatdlis.address + ' ' + clientDatdlis.namHome" />
          <input id="json_purchase_data" name="json_purchase_data" :value="JSonProducts" />
          <input id="u71" name="u71" value="1" />
          <button type="submit"></button>
        </form>
        <div class="center w-100">
          <h4 class="w-100 text-center">תשלומים</h4>
          <div class="center w-100">
            <v-select class="w-100" :clearable="false" dir="rtl"
              :options="['1', '2', '3', '4', '5 ', '6', '7', '8', '9', '10']" v-model="numPay">
            </v-select>
            <p class="w-100" v-if="ifCredit == 8">
              תשלום ראשון: {{ firstPayAmount }} ₪
            </p>
            <p class="w-100" v-if="ifCredit == 8">
              שאר התשלומים: {{ namPayAmount }} ₪
            </p>
            <p class="w-100">סה"כ: {{ PayablePlusMessenger }} ₪</p>
          </div>
        </div>
        <div class="center w-100">
          <iframe name="iframe" class="mt-5" height="650" :width="ifWidth"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import productInOpenCart from '@/components/productInOpenCart.vue'
  import vSelect from "vue-select";
  import "vue-select/dist/vue-select.css";

  export default {
    name: "beforePay",
    components: {
      "v-select": vSelect,
    },
    data() {
      return {
        numPay: 1,
      };
    },
    mounted() {
       fbq('track', 'ViewContent', {
        content_name: this.$route.name,
      });
      setTimeout(() => {
        this.$refs.myForm.submit()
      }, 100)
    },
    methods: {
      vat(num) {
        let vat = num / 1.17;
        return vat.toFixed(2);
      },
    },
    computed: {
      inCart() {
        return this.$store.getters.inCart;
      },
      clientDatdlis() {
        return this.$store.state.clientDatdlis;
      },
      Payable() {
        return this.$store.getters.Payable;
      },
      PayablePlusMessenger() {
        return this.$store.getters.PayablePlusMessenger;
      },
      messengerPrice() {
        return this.$store.getters.messengerPrice;
      },
      ifMessenger() {
        return this.$store.state.ifMessenger;
      },
      //תשלום ראשון
      firstPayAmount() {
        let x = this.namPayAmount * this.numPay;
        let y = this.PayablePlusMessenger - x;
        return this.namPayAmount + y;
      },
      //שאר תשלומים
      namPayAmount() {
        let nam = this.PayablePlusMessenger / this.numPay;
        return Math.floor(nam);
      },
      ifCredit() {
        if (this.numPay == 1) {
          return 1;
        }
        return 8;
      },
      JSonProducts() {
        let json = [];
        for (let x in this.inCart) {
          let productName = `${this.inCart[x].name} ${this.inCart[x].size} ${this.inCart[x].color}`
          json.push({
            product_name: productName,
            product_quantity: this.inCart[x].amount,
            // product_price: this.products[x].price,
            product_price: this.vat(this.inCart[x].price),
          });
        }
        if (this.priceMessenger) {
          json.push({
            product_name: "משלוח",
            product_quantity: 1,
            // product_price: this.priceMessenger,
            product_price: this.vat(this.messengerPrice),
          });
        }
        // if (this.discount) {
        //   let vatDiscount = this.Payable - this.PayablePlusDiscount;
        //   json.push({
        //     product_name: "הנחה 10%",
        //     product_quantity: 1,
        //     product_price: -this.vat(vatDiscount),
        //     // product_price: - vatDiscount,
        //   })
        // }
        return encodeURIComponent(JSON.stringify(json));
      },
      ifWidth() {
        if (window.innerWidth > 767) {
          return 500;
        }
        return 300;
      },
    },
    watch: {
      numPay: function () {
        setTimeout(() => {
          this.$refs.myForm.submit()
        }, 100)

      }
    }
  };
</script>

<style scoped>
  iframe {
    border: none;
  }
</style>