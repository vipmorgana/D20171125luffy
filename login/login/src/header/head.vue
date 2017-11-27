<!-- -*- coding: utf-8 -*-
"""
@version:
@author: morgana
@license: Apache Licence
@contact: vipmorgana@gmail.com
@site:
@software: PyCharm
@file: head.vue
@time: 2017/11/27 上午11:02
-->


<template>
<div>

  <router-link to="/">hello</router-link>
  <span v-if="$store.state.username">{{$store.state.username}}
        <span v-on:click="logout">注销</span>
      </span>
  <span v-else>
        <router-link :to="{path:'/login',query:{next:$route.path}}">login</router-link>
      </span>
  <router-link to="/course_list">course_list</router-link>

  <!--<router-view/>-->
</div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your head'
      }
    },
    methods: {
      logout: function () {
        this.$store.commit('clearToken');
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     @import "https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/css/bootstrap.css";
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
