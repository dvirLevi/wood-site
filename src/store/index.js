import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/helpers/products.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowWidth: "",
    clientDatdlis: {},
    messengerPrice: 100,
    ifMessenger: true,
    inCart: [],
    discount: 0,
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
      {
        name: "אודות",
        link: "/about",
        id: 3,
      },
    ],
    products: products
  },
  getters: {
    inCart: (state) => {
      return state.inCart
    },
    PayableBeforeDiscount: (state, getters) => {
      let Payable = 0;
      for (let x in getters.inCart) {
        Payable += getters.inCart[x].amount * getters.inCart[x].price;
      }
      return Payable
    },
    discountMoreTwo(state, getters) {
      let ifExist = getters.inCart.filter((val) => {
        return val.category === "1"
      })
      if (ifExist.length > 1) {
        return 15
      }
      let ifExist2 = ifExist.filter((val) => {
        return val.amount > 1
      })
      // console.log(ifExist2)
      if(ifExist2.length) {
        return 15
      }
      return 0
    },
    Payable: (state, getters) => {
      let Payable = 0;
      for (let x in getters.inCart) {
        Payable += getters.inCart[x].amount * getters.inCart[x].price;
      }
      if (state.discount) {
        let x = Payable / 100;
        let y = x * state.discount
        return Payable - y;
      }
      if (getters.discountMoreTwo) {
        let x = Payable / 100;
        let y = x * getters.discountMoreTwo
        return Payable - y;
      }
      return Payable
    },
    PayablePlusMessenger: (state, getters) => {
      let Payable = getters.Payable;
      if (state.ifMessenger) {
        Payable = Payable + getters.messengerPrice;
      }
      return Payable
    },
    messengerPrice: (state, getters) => {
      let price = 50;
      for (let i in getters.inCart) {
        if (getters.inCart[i].id !== 8 && getters.inCart[i].id !== 7 && getters.inCart[i].id !== 4) {
          price = 100;
        }
      }
      return price
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
        } else if (item.operation === "-") {
          let index = state.inCart.findIndex((el) => {
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
    pushCode(state, discount) {
      state.discount = discount
    }
  },
  actions: {},
  modules: {}
})