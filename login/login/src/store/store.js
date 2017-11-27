import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookies'

Vue.use(Vuex);

export default new Vuex.Store({
  // 组件中通过 this.$store.state.username 调用
  state: {
    username: Cookie.get('username'),
    token: Cookie.get('token'),
    apiList: {
      auth: 'http://127.0.0.1:8000/login/',
      courses: 'http://127.0.0.1:8000/course_list/',
    }
  },
  mutations: {
    // 组件中通过 this.$store.commit(saveToken,参数)  调用
    saveToken: function (state, username, token) {
      state.username = username;
      Cookie.set("username", username, "20min");
      Cookie.set("token", token, "20min")

    },
    clearToken: function (state) {
      state.username = null
      Cookie.remove('username')
      Cookie.remove('token')

    }
  },

})
