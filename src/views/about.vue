<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col center-right">
        <h2 class="font-weight-bold">אודות:</h2>
      </div>
    </div>
    <div class="row">
      <div class="col center-right">
        <p>שמריהו הוא מותג אדניות עץ ישראלי. אנחנו בונים אותן בקפדנות עם חומרי הגלם האיכותיים ביותר, ושולחים אותן במארז
          מעוצב עד לביתכם. את האדניות של שמריהו תוכלו לצבוע בגוונים המהממים שמציעה חברת <span
            class="font-weight-bold">THE REAL MILK PAINT</span> מארה"ב, עם שכבת הגנה פנימית שאנחנו מבצעים עם שמן טאנג
          טבעי וסופר איכותי.</p>
        <p>בשמריהו אנחנו נותנים את הנשמה כדי לייצר לכם אדניות עץ איכותיות, מעוצבות ועמידות, ולשלוח אותן אליכם במהירות
          האפשרית.</p>
        <p>בכל שאלה שיש לכם על המוצרים שלנו, על החומרים שאנחנו משתמשים בהם, או סתם על שתילת פלפל חריף ופטוניה באדנית –
          אנחנו <a class="link-color" href="https://api.whatsapp.com/send?phone=972537234223">כאן</a>!</p>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col center-right">
        <h2 class="font-weight-bold">יצירת קשר:</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form @submit.prevent="sendMail" class=" center-right">
          <div class="w-100 center-right">
            <input type="text" placeholder="*שם מלא" v-model="clientDatdlis.name" required>
          </div>
          <div class="w-100 center-right">
            <input type="tel" placeholder="*טלפון" pattern="[0-9]+" minlength="9" maxlength="11"
              v-model="clientDatdlis.tel" required>
          </div>
          <div class="w-100 center-right">
            <input type="email" placeholder='*דוא"ל' v-model="clientDatdlis.mail" required>
          </div>
          <div class="w-100 center-right">
            <textarea id="" rows="5" placeholder="*סיבת הפנייה" v-model="clientDatdlis.note" required></textarea>
          </div>
          <div class="w-100 center-right mt-3 confirm">
            <input type="checkbox" :checked="clientDatdlis.ifConfirmMail"
              @click="clientDatdlis.ifConfirmMail = !clientDatdlis.ifConfirmMail">
            <span>לקבלת טיפים, עדכונים ומבצעים לדוא"ל</span>
          </div>
          <div class="w-100 center-right">
            <ButtonLink :text="textSend" class="mt-4" />
            <!-- <button type="submit">{{textSend}}</button> -->
          </div>
        </form>
      </div>
    </div>
    <div class="row border-top mt-5">
      <div class="col mt-3">
        <p>שׁמַרְיָהוּ | אדניות עץ 053-7234223 </p>
        <p>יוחנן 11, אלעזר</p>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import productInOpenCart from "@/components/productInOpenCart.vue";
  import Swal from "sweetalert2";
  import myMail from '@/helpers/myMail.js'

  export default {
    name: "about",
    components: {

    },
    data() {
      return {
        clientDatdlis: {
          ifConfirmMail: true,
        },
        textSend: "שלח טופס"
      };
    },
    mounted() {
      fbq('track', 'ViewContent', {
        content_name: this.$route.name,
      });
    },
    methods: {
      async sendMail() {
        if (this.textSend === "שלח טופס") {
          this.textSend = "המתן..."
          await myMail.sendToMail(this.clientDatdlis, null, "יצירת קשר נאפולי");
          this.clientDatdlis = {
            ifConfirmMail: true,
          };
          this.textSend = "שלח טופס"
        }
      }
    },
    computed: {

    },
  };
</script>

<style scoped>
  form {
    width: 100%;
  }

  input,
  textarea {
    width: 50%;
    border-radius: 5px;
    border: solid var(--main-text-color) 1px;
    color: var(--main-text-color);
    margin: 10px 0px;
    padding: 10px;
  }

  input[type="checkbox"] {
    width: 20px;
    margin-left: 5px;
    padding: 5px;
    border: solid var(--main-text-color) 2px;
  }

  @media (max-width: 767.98px) {

    input,
    textarea {
      width: 100%;
    }
  }
</style>