<!-- -*- coding: utf-8 -*-
"""
@version:
@author: morgana
@license: Apache Licence
@contact: vipmorgana@gmail.com
@site:
@software: PyCharm
@file: myfoot.vue
@time: 2017/11/27 下午2:33
-->


<template>
  <div class="panel panel-default">
    <div class="footWrap foot">
      <ul class="foot-link">
        <li v-for="i in f">
          {{i}}
        </li>
      </ul>
      <p class="main">Copyright © luffy.com版权所有</p></div>
  </div>

</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your myfoot',
                f:['关于我们','联系我们','商务合作','帮助中心','意见反馈','新手指南']

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     /*@import "https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/css/bootstrap.css";*/
     .footWrap {
       width: 100%;
       height: 128px;
       margin-bottom: -10px;
       display: -webkit-box;
       display: -ms-flexbox;
       display: flex;
       -webkit-box-align: center;
       -ms-flex-align: center;
       align-items: center;
       -webkit-box-pack: center;
       -ms-flex-pack: center;
       justify-content: center;
       background: #25292e;
     }

     .foot-link {
       list-style: none;
       width: 14%;
       font-size: 14px;
       color: #fff;
       letter-spacing: .22px;
       cursor: pointer;
     }

    h1, h2 {
        font-weight: normal;
    }
    .foot{
          margin-top: auto;
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
