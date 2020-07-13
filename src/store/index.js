import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowWidth: "",
    clientDatdlis: {},
    messengerPrice: 40,
    ifMessenger: true,
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
        description: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן,`,
        description1: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

      אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description2: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

      אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description3: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

      אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        addCart: false,
        price: 10,
        previousPrice: 0,
        amount: 0,
        category: "1",
        id: 1
      },
      {
        name: "אחד העם",
        img: [require("@/assets/IMG_1188.jpg"), require("@/assets/IMG_1220.jpg"), require("@/assets/IMG_1195.jpg")],
        drow: require("@/assets/drow3.png"),
        description: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן,`,
        description1: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description2: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description3: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        addCart: false,
        price: 10,
        previousPrice: 0,
        amount: 0,
        category: "1",
        id: 2
      },
      {
        name: "ביאליק",
        img: [require("@/assets/IMG_1329.jpg"), require("@/assets/IMG_1355.jpg"), require("@/assets/IMG_1311.jpg"), require("@/assets/IMG_1358.jpg")],
        drow: require("@/assets/drow1.png"),
        description: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן,`,
        description1: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description2: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description3: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        addCart: false,
        price: 1490,
        previousPrice: 0,
        amount: 0,
        category: "1",
        id: 3
      },
      {
        name: "ארלוזרוב",
        img: [require("@/assets/IMG_1298.jpg"), require("@/assets/IMG_1272.jpg"), require("@/assets/IMG_1277.jpg"), require("@/assets/IMG_1301.jpg"), require("@/assets/IMG_1269.jpg")],
        drow: require("@/assets/drow6.png"),
        description: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן,`,
        description1: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description2: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description3: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        addCart: false,
        price: 1490,
        previousPrice: 0,
        amount: 0,
        category: "1",
        id: 4
      },
      {
        name: "שינקין",
        img: [require("@/assets/IMG_1332.jpg"), require("@/assets/IMG_1254.jpg"), require("@/assets/IMG_1258.jpg"), require("@/assets/IMG_1260.jpg"), require("@/assets/IMG_1283.jpg")],
        drow: require("@/assets/drow5.png"),
        description: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן,`,
        description1: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description2: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description3: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        addCart: false,
        price: 1490,
        previousPrice: 0,
        amount: 0,
        category: "1",
        id: 5
      },
      {
        name: "דיזינגוף",
        img: [require("@/assets/IMG_1348.jpg"), require("@/assets/IMG_1349.jpg")],
        drow: require("@/assets/drow4.png"),
        description: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן,`,
        description1: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description2: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description3: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        addCart: false,
        price: 1490,
        previousPrice: 0,
        amount: 0,
        category: "1",
        id: 6
      },
      {
        name: "אביזרים",
        img: [require("@/assets/IMG_1323.jpg"), require("@/assets/IMG_1242.jpg")],
        drow: false,
        description: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן,`,
        description1: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description2: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description3: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        addCart: false,
        price: 1490,
        previousPrice: 0,
        amount: 0,
        category: "2",
        id: 7
      },
      {
        name: "שלטים",
        img: [require("@/assets/IMG_1284.jpg"), require("@/assets/IMG_1351.jpg"), require("@/assets/IMG_1354.jpg")],
        drow: false,
        description: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן,`,
        description1: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description2: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        description3: `אדנית היא מכל לטיפוח צמחים המיועד להצבה על אדן חלון של בתים. בתוך אדנית מצע לגידול צמחים, בדרך כלל עפר מדושן, ובו נזרעים או נשתלים צמחים פרחוניים. נועדה לנוי ולקישוט הבית, מבחוץ ומבפנים.

        אדניות מיוצרות ממגוון חומרים: עץ, פלסטיק ואחרים.`,
        addCart: false,
        price: 1490,
        previousPrice: 0,
        amount: 0,
        category: "2",
        id: 8
      },
    ]
  },
  getters: {
    inCart: (state) => {
      let inCart = state.products.filter((value) => {
        return value.amount > 0
      })
      return inCart
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
    changeAmount(state, amountAndId) {
      for (let i in state.products) {
        if (state.products[i].id == amountAndId.id) {
          if (amountAndId.addOn) {
            state.products[i].amount += amountAndId.amount
          } else {
            state.products[i].amount = amountAndId.amount
          }
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