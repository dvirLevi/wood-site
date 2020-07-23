<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col center-right">
        <h2 class="font-weight-bold">שאלות ותשובות:</h2>
      </div>
    </div>
    <div class="row">
      <div class="col center-right">
        <p>שמריהו הוא מותג אדניות עץ ישראלי. אנחנו בונים אותן בקפדנות עם חומרי הגלם האיכותיים ביותר, ושולחים אותן במארז מעוצב עד לביתכם. את האדניות של שמריהו תוכלו לצבוע בגוונים המהממים שמציעה חברת <span class="font-weight-bold">THE REAL MILK PAINT</span> מארה"ב, עם שכבת הגנה פנימית שאנחנו מבצעים עם שמן טאנג טבעי וסופר איכותי.</p>
        <p>בשמריהו אנחנו נותנים את הנשמה כדי לייצר לכם אדניות עץ איכותיות, מעוצבות ועמידות, ולשלוח אותן אליכם במהירות האפשרית.</p>
        <p>בכל שאלה שיש לכם על המוצרים שלנו, על החומרים שאנחנו משתמשים בהם, או סתם על שתילת פלפל חריף ופטוניה באדנית – אנחנו <a class="link-color" href="https://api.whatsapp.com/send?phone=972537234223">כאן</a>!</p>
      </div>
    </div>
     <div class="row mt-3">
      <div class="col center-right">
        <h2 class="font-weight-bold">יצירת קשר:</h2>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import productInOpenCart from "@/components/productInOpenCart.vue";
  import Swal from "sweetalert2";

  export default {
    name: "about",
    components: {

    },
    data() {
      return {};
    },
    mounted() {
      fbq('track', 'ViewContent', {
        content_name: this.$route.name,
      });
    },
    methods: {

    },
    computed: {

    },
  };
</script>

<style scoped>

</style>