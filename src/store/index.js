import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowWidth: "",
    clientDatdlis: {},
    messengerPrice: 40,
    ifMessenger: true,
    inCart: [],
    categories: [{
        name: "בית",
        link: "/",
        id: 1,
      },
      {
        name: "חנות",
        link: "/store/all",
        id: 2,
      },
    ],
    products: [{
        name: "רוטשילד",
        img: [require("@/assets/IMG_1208.jpg"), require("@/assets/IMG_1209.jpg"), require("@/assets/IMG_1210.jpg"), require("@/assets/IMG_1230.jpg"), require("@/assets/IMG_1240.jpg"), require("@/assets/IMG_1263.jpg")],
        drow: require("@/assets/drow2.png"),
        description: `אדנית מוצקה ואלגנטית עם נוכחות מרשימה. ניצבת על ארבעה עמודים מרכזיים ומסגרת. כמו כל המוצרים שלנו, רוטשילד עשויה בקפדנות ובדיוק רב. מושלמת גם למרפסת האורבנית שלכם בבניין, וגם לפטיו הכפרי במושב.`,
        description1: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

      אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description2: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

      אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description3: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

      אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        color: true,
        size: 2,
        addCart: false,
        price: 10,
        previousPrice: 0,
        amount: 1,
        category: "1",
        id: 1
      },
      {
        name: "אחד העם",
        img: [require("@/assets/IMG_1188.jpg"), require("@/assets/IMG_1220.jpg"), require("@/assets/IMG_1195.jpg")],
        drow: require("@/assets/drow3.png"),
        description: `אדנית כפרית צרה ועמוקה, מושלמת לשתילת ירקות, צמחי תבלין ופרחים מעמיקי שורשים. עשויה לוחות מוקצעים מעץ טבעי מלא, ועל פתחה מסגרת עליונה יפה שבולטת החוצה. אחד העם תיתן למרפסת שלכם מראה כפרי מרענן.`,
        description1: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description2: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description3: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        color: true,
        size: 2,
        addCart: false,
        price: 10,
        previousPrice: 0,
        amount: 1,
        category: "1",
        id: 2
      },
      {
        name: "ביאליק",
        img: [require("@/assets/IMG_1329.jpg"), require("@/assets/IMG_1355.jpg"), require("@/assets/IMG_1311.jpg"), require("@/assets/IMG_1358.jpg")],
        drow: require("@/assets/drow1.png"),
        description: `האדנית הבסיסית של שמריהו. עשויה לוחות מוקצעים מעץ טבעי מלא, אבל עם טוויסט קטן משלה: מסגרת עליונה מרשימה. אז קדימה, אין כמו לפתוח את היום עם קפה ריחני וקרואסון טוב, מול אדניות הפרחים הססגוניות שלכם.`,
        description1: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description2: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description3: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        color: true,
        size: 2,
        addCart: false,
        price: 1490,
        previousPrice: 0,
        amount: 1,
        category: "1",
        id: 3
      },
      {
        name: "ארלוזרוב",
        img: [require("@/assets/IMG_1298.jpg"), require("@/assets/IMG_1275.jpg"), require("@/assets/IMG_1272.jpg"), require("@/assets/IMG_1277.jpg"), require("@/assets/IMG_1301.jpg"), require("@/assets/IMG_1269.jpg")],
        drow: require("@/assets/drow6.png"),
        description: `סט אדניות קטנות ושובבות, מושלמות לסוקולנטים ולצמחי צל. את האדניות תוכלו להציב על השולחן במשרד, במטבח, או סתם על המדרגות בכניסה לבית. ארלוזרוב עשויות בפרופורציות מושלמות, מעץ מלא משובח.`,
        description1: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description2: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description3: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        color: true,
        size: 2,
        addCart: false,
        price: 1490,
        previousPrice: 0,
        amount: 1,
        category: "1",
        id: 4
      },
      {
        name: "שינקין",
        img: [require("@/assets/IMG_1332.jpg"), require("@/assets/IMG_1254.jpg"), require("@/assets/IMG_1258.jpg"), require("@/assets/IMG_1260.jpg"), require("@/assets/IMG_1283.jpg")],
        drow: require("@/assets/drow5.png"),
        description: `המריצה של שמריהו היא יצירת אמנות. מושלמת לשתילת פרחים עונתיים שופעים כמו פטוניה, וינקה או בשמת. בכל מקום שתציבו את שינקין שלנו היא תהפוך את המרחב סביבה לכפר אירופי קטן וקסום. `,
        description1: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description2: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description3: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        color: true,
        size: 2,
        addCart: false,
        price: 1490,
        previousPrice: 0,
        amount: 1,
        category: "1",
        id: 5
      },
      {
        name: "דיזינגוף",
        img: [require("@/assets/IMG_1348.jpg"), require("@/assets/IMG_1349.jpg")],
        drow: require("@/assets/drow4.png"),
        description: `אדנית קונוס עמוקה. מושלמת לשיחים או עצים קטנים. שבו בחוץ, תנו לרוח ללטף לכם את הפנים, והתמסרו לניחוחות היסמין המשכרים ששתלתם בדיזינגוף. מומלץ לשלב עם פרחים משתפלים כמו סלסלי כסף או מפלית. `,
        description1: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description2: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description3: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        color: true,
        size: 2,
        addCart: false,
        price: 1490,
        previousPrice: 0,
        amount: 1,
        category: "1",
        id: 6
      },
      {
        name: "שקי אדמה",
        img: [require("@/assets/IMG_1323.jpg"), require("@/assets/IMG_1242.jpg")],
        drow: false,
        description: `את שקי השתילה של שמריהו אנחנו ממלאים לכם בידיים. הם מכילה קומפוסט (3/1) ותערובת שתילה (2/3), והם מושלמים להזנת השתילים שלכם בכל מה שנדרש להם. את התחושה הממכרת של ריקון השק לתוך האדנית, עם כל ניחוחות האדמה שהוא מעלה – אי אפשר להחליף!!!`,
        description1: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description2: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description3: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        color: false,
        size: false,
        addCart: false,
        price: 1490,
        previousPrice: 0,
        amount: 1,
        category: "2",
        id: 7
      },
      {
        name: "שלטים",
        img: [require("@/assets/IMG_1284.jpg"), require("@/assets/IMG_1351.jpg"), require("@/assets/IMG_1354.jpg")],
        drow: false,
        description: `שלטי העץ הקטנים והממותגים של שמריהו הם האביזר הכי חמוד שיש לנו כאן. בצדם האחד מתנוססת דמות דיוקנו הנאה של שמריהו, ובצדם השני תוכלו לרשום את שמות שתילי האדנית – נענע? בזיליקום? רקפת? גרניום? מה שתרצו!`,
        description1: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description2: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description3: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        color: false,
        size: false,
        addCart: false,
        price: 1490,
        previousPrice: 0,
        amount: 1,
        category: "2",
        id: 8
      },
    ]
  },
  getters: {
    inCart: (state) => {
      // let inCart = state.products.filter((value) => {
      //   return value.amount > 0
      // })
      return state.inCart
    },
    Payable: (state, getters) => {
      let Payable = 0;
      for (let x in getters.inCart) {
        Payable += getters.inCart[x].amount * getters.inCart[x].price;
      }
      return Payable
    },
    PayablePlusMessenger: (state, getters) => {
      let Payable = getters.Payable;
      if (state.ifMessenger) {
        Payable = Payable + state.messengerPrice;
      }
      return Payable
    },
    mobOrDesk: (state) => {
      if (state.windowWidth > 767) {
        return false;
      }
      return true;
    },


  },
  mutations: {
    changeAmount(state, item) {
      let ifExist = false;
      for (let i in state.inCart) {
        if (state.inCart[i].id === item.obj.id && state.inCart[i].color === item.obj.color && state.inCart[i].size === item.obj.size) {
          if (item.operation === "+") {
            state.inCart[i].amount = state.inCart[i].amount + item.obj.amount;
          } else if (item.operation === "-") {
            if (state.inCart[i].amount > 1) {
              state.inCart[i].amount = state.inCart[i].amount - 1;
            } else {
              state.inCart.splice(i, 1)
            }
          }
          ifExist = true;
        }
      }
      if (!ifExist) {
        if (item.operation === "+") {
          state.inCart.push(item.obj)
        }else if (item.operation === "-") {
          let index = state.inCart.findIndex((el)=>{
              el.id === item.obj.id
          })
          state.inCart.splice(index, 1)
        }
      }
    },
    setIfMessenger(state) {
      state.ifMessenger = !state.ifMessenger
    },
    setWindowWidth(state, windowWidth) {
      state.windowWidth = windowWidth;
    },
  },
  actions: {},
  modules: {}
})