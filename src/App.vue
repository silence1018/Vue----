<template>
  <div id="app">
    <!--公共头部-->
    <div class="app-header">
      <div class="goback" @click="goBack">
        <span class="arrow">
          <span class="arrow green">
          </span>
        </span>
      </div>
      <h1>Selience团购网站</h1>
      <div class="login">登陆</div>
    </div>
      <!--如果是详情页，不现实搜索框-->
    <div class="app-search" v-show="$route.path.indexOf('/detail/')!==0">
      <input type="text" placeholder="请输入搜索关键字" v-model="msg" @keyup.enter="gotoSearch">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
    methods:{
        changeNum:function () {
            this.$store.commit("changeNum",10)
            // console.log("6666")
        },
        gotoSearch:function(){
            //将数据提交给store
            this.$store.commit("updateWord",this.msg)
            //清空msg
            this.msg=""
        },
        goBack:function () {
            this.$router.back(-1)
        },




    },
    data:function(){
        return {
            msg:""
        }

    },
    // watch:{
    //     $route:function () {
    //         console.log("watch",arguments)
    //
    //     }
    // }
    watch:{
        $route:function(){
            // console.log("路由有变化")
        }
    },



}
</script>


<style  lang="scss">
@import "./base.scss";
html,body{overflow:hidden;overflow-y:auto;}
*{
  margin: 0;
  padding: 0;
  list-style: none
}
#app{
  .app-header{
    background-color: $navColor;
    height: 60px;
    display: flex;
    text-align: center;
    color:#fff;
    line-height: 60px;
    .goback{
      width: 50px;
      position:relative;
      .arrow{
        @include arrow(10px,#fff,right);
        position:absolute;
        left: 6px;
        top: 20px;
        .green{
          position:absolute;
          left:-7px;
          top:-10px;
          border-right-color:$navColor;
        }
     }
    }
    h1{
      flex:1;
      font-size: 24px;
      text-indent: -0.5em;
    }
    .login{
      width: 50px;
    }
  }
  .app-search{
    background-color: #fff;
    padding:10px 20px;
    display:flex;
    input{
      flex:1;
      padding: 10px 20px;
      outline: none;
      background-color: #eee;
      border-radius: 20px;
      border:none;
    }
  }
}
</style>
