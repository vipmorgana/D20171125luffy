<!-- -*- coding: utf-8 -*-
"""
@version:
@author: morgana
@license: Apache Licence
@contact: vipmorgana@gmail.com
@site:
@software: PyCharm
@file: course_detail.vue
@time: 2017/11/26 下午3:16
-->


<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-8 col-md-push-3">
        <div class="panel panel-default">
          <div class="panel-heading"></div>
          <div class="panel-body" v-for="item in coursedetail">
           <p>{{item.name}}</p>
            <p>{{item.brief}}</p>
          </div>
        </div>
          <div class="panel-footer">haha</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
//        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your course_detail',
                coursedetail:{'name':''},
                id:"",
            }
        },
        mounted:function(){
          this.showList();
        },
        methods:{
          showList(){
            var url="http://127.0.0.1:8000/course/";
            var self = this;
            this.$axios.get(url,{
              params: {
                  id:self.$route.params.id
              }
            }).then(function(res){
//              console.log(res)
              self.coursedetail=res;
              console.log(self.coursedetail.data)
            }).catch(function (error) {
               console.log(error);
           })
          },
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
