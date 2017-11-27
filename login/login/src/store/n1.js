/*
version: 5.6.1
author: morgana
license: Apache Licence
contact: vipmorgana@gmail.com
site:
software: PyCharm
file: n1.js
time: 2017/11/27 下午1:55
*/
Vue.use(Vuex);
const  store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
   increment(state){
     state.count++
   }
  }
})

state.commit("increment");
console.log(store.state.count);
