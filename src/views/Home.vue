<template>
  <div class="row">
    <div class="col">
      <titleSectionGallery />
      <categorySection />
      <div class="row row-icons center pt-5 pb-5">
        <div class="col-md-2 center icon" v-for="item in icons" :key="item.id">
          <div class="w-100 center">
            <i :class="item.icon"></i>
          </div>
          <h5 class="text-center text-white mt-3">{{item.text}}</h5>
        </div>
      </div>
      <div class="row row-details pt-5 pb-5 mt-4">
        <div class="col">
          <div class="container">
            <div class="row">
              <div class="col center-right" @click="showHideText">
                <h2>שאלות ותשובות: <span v-if="mobOrDesk"><i class="las la-angle-down"></i></span></h2>
              </div>
            </div>
            <div class="row" v-if="ifShowQues">
              <div class="col-md-6 mt-2" v-for="item in questions" :key="item.id">
                <div class="w-100 center-right">
                  <h4>{{item.question}}</h4>
                </div>
                <div class="w-100 center-right">
                  <h6>{{item.answer}}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import titleSectionGallery from '@/components/titleSectionGallery.vue'
  import categorySection from '@/components/categorySection.vue'

  export default {
    name: 'Home',
    components: {
      titleSectionGallery,
      categorySection
    },
    data() {
      return {
        ifShowQues: true,
        icons: [{
            icon: "lab la-pagelines",
            text: "עץ טבעי מלא",
            id: 1
          },
          {
            icon: "las la-shipping-fast",
            text: "משלוח מהיר",
            id: 2
          },
          {
            icon: "las la-swatchbook",
            text: "צבעים לבחירה",
            id: 3
          },
          {
            icon: "las la-lock",
            text: "רכישה מאובטחת",
            id: 4
          },
          {
            icon: "las la-star-of-david",
            text: "תוצרת ישראל",
            id: 5
          },
        ],
        questions: [{
            question: "האם האדניות עשויות מעץ מלא?",
            answer: "ב-ר-ו-ר! כל האדניות שלנו עשויות עץ אורן פיני מלא ומחוטא. ניתן להזמין גם עצים מיוחדים נוספים. שלחו לנו הודעת וואטספ ונשוב אליכם.",
            id: 1
          },
          {
            question: "האם תוכלו לצבוע לנו את האדניות?",
            answer: "במהלך הרכישה באתר תוכלו לסמן באיזה צבע תרצו את האדנית. זה מתחיל בצבע שמן טבעי, ונגמר בצבעים משוגעים לחלוטין. תוכלו גם להזמין צבע מיוחד מתוך המניפה של טמבור, באמצעות הוואטספ שלנו. הצביעה בתוספת תשלום.",
            id: 2
          },
          {
            question: "האם יש לכם משלוחים?",
            answer: "ברגע שהשלמתם את ההזמנה באתר, המחסן שלנו אורז לכם את המוצרים ושולח אותם עם חברת צ'יטה. המשלוח מגיע תוך שבוע, ובדרך כלל תוך 3 ימי עסקים. ",
            id: 3
          },
          {
            question: "האם ניתן לשלם על האדניות באתר?",
            answer: "כן. אנחנו מקבלים את כל כרטיסי האשראי, למעט אמריקן אקספרס.",
            id: 4
          },
          {
            question: "האם הרכישה באתר מאובטחת?",
            answer: "הסליקה שלנו מבוצעת עם חברת הסליקה האלקטרונית הטובה בישראל, טרנזילה. היא מאובטחת ועומדת בתקנים המחמירים ביותר. ",
            id: 5
          },
          {
            question: "האם ניתן לשלם בטלפון או בהעברה בנקאית?",
            answer: "כן. שלחו לנו הודעת וואטספ ונציג שלנו יחזור אליכם.",
            id: 6
          },
          {
            question: "האם אתם פתוחים להזמנות מיוחדות לבתי עסק?",
            answer: "כן. שלחו לנו הודעת וואטספ ונתקשר לשמוע מה בפיכם.",
            id: 7
          },
          {
            question: "רגע, מה מספר הוואטספ שלכם?",
            answer: "טוב ששאלתם! 053-7234223. או שפשוט תלחצו על לחצן הוואטספ בתחתית העמוד.",
            id: 8
          },
        ]
      }
    },
    mounted() {
      fbq('track', 'ViewContent', {
        content_name: this.$route.name,
      });
      
      if (this.mobOrDesk) {
        this.ifShowQues = false
      }
    },
    methods: {
      showHideText() {
        if (this.mobOrDesk) {
          this.ifShowQues = !this.ifShowQues
        }
      },
      // track() {
      //   alert()
      //   this.$ga.page('/')
      // }
    },
    computed: {
      mobOrDesk() {
        return this.$store.getters.mobOrDesk
      }
    }
  }
</script>

<style scoped>
  .row-icons {
    background-color: var(--main-text-color);
  }

  .row-icons img {
    width: 35%;
  }

  .row-icons .icon {
    border-left: solid #fff 1px;
  }

  .row-icons .icon:last-child {
    border-left: none;
  }

  .row-details {
    background-color: #f2f2f2;

  }

  .row-icons .icon i {
    font-size: 45px;
    color: #fff;
  }

  @media (max-width: 767.98px) {
    .row-icons .icon {
      /* border-bottom: solid 1px #fff; */
      padding: 20px;
      position: relative;
      border-left: none;
    }

    .row-icons .icon:before {
      content: "";
      border-bottom: 3px solid #fff;
      bottom: 0;
      width: 50px;
      height: 1px;
      display: block;
      position: absolute;
    }

    .row-icons .icon:last-child:before {
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