<!-- -*- coding: utf-8 -*-
"""
@version:
@author: morgana
@license: Apache Licence
@contact: vipmorgana@gmail.com
@site:
@software: PyCharm
@file: login.vue
@time: 2017/11/25 下午6:28
-->


<template>
  <!--<div>{{msg}}</div>-->
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-md-offset-8 col-md-push-3">
        <div class="form-group">
          <!--<label for="username">username</label>/ -->
          <input type="text" class="form-control" id="username" placeholder="username" name="username" v-model="username" >
        </div>
        <div class="form-group">
          <!--<label for="exampleInputPassword1">Password</label>-->
          <input type="password" class="form-control" id="exampleInputPassword1" name="password" placeholder="Password" v-model="password">
        </div>
        <p><input type="button" class="btn btn-primary" value="登陆" v-on:click="login"></p>
      </div>
    </div>
  </div>
</template>


<script>

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome  login',
                username:'',
                password:'',
            }
        },
        methods:{
          login:function () {
           var url="http://127.0.0.1:8000/login/";
           var self=this;
           var $cookie=this.$cookie
            this.$axios.post(url,{
              username:this.username,
              password:this.password,
            },{
//             "headers":{"Content-Type":"application/x-www-form-urlencodeed"}
           }).then(function (res) {
//             console.log(res);
              self.$store.commit('saveToken',self.username,res);
             console.log(res);
//             $cookie.set("token",res.data.token);
//             $cookie.set("username",res.data.username);
             self.$router.push("/course_list/")
              console.log($cookie.get("token"));
              console.log($cookie.get("username"));
           }).catch(function (error) {
               console.log(error);
           })
          }
        }

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
