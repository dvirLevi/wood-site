import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/helpers/products.js'

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
    products: products
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