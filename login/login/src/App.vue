<template>
    <div id="app">

      <headerr></headerr>
      <mfoot></mfoot>
      <!--<router-link to="/">hello</router-link>-->
          <!--&lt;!&ndash;<span v-if="$store.state.username">{{$store.state.username}}&ndash;&gt;-->
        <!--&lt;!&ndash;<span v-on:click="logout">注销</span>&ndash;&gt;-->
      <!--&lt;!&ndash;</span>&ndash;&gt;-->

          <!--&lt;!&ndash;<span v-else>&ndash;&gt;-->
        <!--&lt;!&ndash;<router-link :to="{path:'/login',query:{next:$route.path}}">login</router-link>&ndash;&gt;-->
      <!--&lt;!&ndash;</span>&ndash;&gt;-->
          <!--&lt;!&ndash;<router-link to="/course_list">course_list</router-link>&ndash;&gt;-->
          <router-view/>
</div>
</template>

<script>
  import headerr from '@/header/head'
  import mfoot   from '@/footer/myfoot'
  export default {
  name: 'app',
//    methods:{
//    logout:function () {
//      this.$store.commit('clearToken');
//    }
//    },
    components:{
      headerr,
      mfoot,

    }
}
</script>
<style>
  @import "https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/css/bootstrap.css";
</style>
<style>
html,body{height:100%}
.wrap{min-height:100%}
.main{padding-bottom:30px;overflow:hidden;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
