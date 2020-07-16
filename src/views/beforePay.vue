<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <TitleAndBorderC class="mb-5">מוצרים בעגלה</TitleAndBorderC>
        <!-- <h2 class="w-100 text-center">מוצרים בעגלה</h2> -->
        <template v-if="inCart.length">
          <productInOpenCart v-for="item in inCart" :item="item" :key="item.id" />
        </template>
        <h4 class="w-100 text-center" v-else>אין מוצרים בעגלה</h4>
        <template v-if="inCart.length">
          <div class="w-100 center border-top p-4">
            <!-- <p class="w-100" v-if="discount">הנחת קופון: {{discount}}%-</p> -->
            <p class="w-100">סה"כ: {{ Payable }} ₪</p>
            <template v-if="ifMessenger">
              <p class="w-100">משלוח עד הבית {{ messengerPrice }} ₪</p>
              <p class="w-100">
                סה"כ כולל משלוח : {{ Payable + messengerPrice }} ₪
              </p>
            </template>
          </div>
        </template>
        <template>
          <div class="w-100 center mt-3">
            <input class="m-2" type="checkbox" :checked="!ifMessenger" @click="$store.commit('setIfMessenger')"
              required />
            <p class="m-0">איסוף עצמי</p>
          </div>
          <p class="w-100 text-center">
            כתובת לאיסוף: רחוב שמריהו לוין 13, ירושלים. בתיאום מראש.
          </p>
        </template>
      </div>
      <div class="col-md-6">
        <div class="w-100 center">
          <form @submit.prevent="nextToPay" class=" center">
            <TitleAndBorderC>פרטים אישיים</TitleAndBorderC>
            <div class="w-100 center mt-5">
              <input type="text" placeholder="*שם מלא" v-model="clientDatdlis.name" required />
            </div>
            <div class="w-100 center">
              <input type="tel" placeholder="*טלפון" pattern="[0-9]+" minlength="9" maxlength="11"
                v-model="clientDatdlis.tel" required />
            </div>
            <div class="w-100 center">
              <input type="email" placeholder='*דוא"ל' v-model="clientDatdlis.mail" required />
            </div>
            <div class="w-100 center">
              <input type="text" placeholder="*עיר" v-model="clientDatdlis.city" required />
            </div>
            <div class="w-100 center">
              <input type="text" placeholder="*רחוב" v-model="clientDatdlis.address" required />
            </div>
            <div class="w-100 center">
              <input type="text" placeholder="*מספר בית" v-model="clientDatdlis.namHome" required />
            </div>
            <!-- <div class="w-100 center">
              <input type="text" placeholder="*מיקוד" pattern="[0-9]+" minlength="5" v-model="clientDatdlis.mikod"
                required>
            </div> -->
            <div class="w-100 center">
              <textarea id="" rows="5" placeholder="הערות" v-model="clientDatdlis.note"></textarea>
            </div>
            <div class="w-100 center mt-3 confirm">
              <input type="checkbox" required />
              <p>
                קראתי והסכמתי
                <span @click="showModal = !showModal">לתקנון השימוש</span>
              </p>
            </div>
            <Modal v-if="showModal" @customEvent="showModal = !showModal">
              <Regulations />
            </Modal>
            <div class="w-100 center mt-3">
              <ButtonLink class="m-1" text="חזרה לחנות" link="/store/all" />
              <ButtonLink class="m-1" type="submit" text="המשך לתשלום מאובטח" />
              <!-- <button type="submit">המשך לתשלום מאובטח</button> -->
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import productInOpenCart from "@/components/productInOpenCart.vue";
  import TitleAndBorderC from "@/components/TitleAndBorderC.vue";
  import Regulations from "@/components/Regulations.vue";
  import Swal from "sweetalert2";

  export default {
    name: "beforePay",
    components: {
      productInOpenCart,
      TitleAndBorderC,
      Regulations,
    },
    data() {
      return {
        showModal: false,
      };
    },
    mounted() {
      fbq('track', 'ViewContent', {
        content_name: this.$route.name,
      });
    },
    methods: {
      nextToPay() {
        if (this.inCart.length) {
          this.$router.push("pay");
           fbq('track', 'AddPaymentInfo');
        } else {
          Swal.fire({
            icon: "error",
            title: "אופס...",
            text: "יש להוסיף פריטים לעגלה",
            timer: 1500,
          });
        }
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
      messengerPrice() {
        return this.$store.state.messengerPrice;
      },
      ifMessenger() {
        return this.$store.state.ifMessenger;
      },
    },
  };
</script>

<style scoped>
  h2 {
    font-size: 40px;
    border-bottom: 2px solid #000;
  }

  form input,
  form textarea {
    width: 80%;
    margin: 8px;
    padding: 10px;
    border: solid black 2px;
  }

  form input[type="checkbox"] {
    width: 20px;
    margin: 5px;
    padding: 5px;
    border: solid black 2px;
  }

  form .pay input {
    width: 357px;
    border: none;
    border-bottom: solid #9e9e9e 1px;
  }

  form form {
    width: 100%;
  }

  form button {
    border: none;
    background-color: black;
    color: #ffffff;
    padding: 10px;
    outline: none;
    margin: 5px;
    margin-top: 20px;
    font-weight: 400;
  }

  form .confirm span {
    color: #ff3d00;
    cursor: pointer;
    font-size: 22px !important;
    font-weight: 500 !important;
  }

  form button:hover {
    background-color: #8c8c8c;
  }

  form p {
    margin: 0;
    font-size: 18px !important;
  }
</style>