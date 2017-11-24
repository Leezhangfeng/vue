<template>
  <div id="header" style="margin:0;padding: 0;">
    <div class="top">
      <div class="header">
            <span class="left">菜单</span>
            <span class="right"><router-link to="/login">登陆</router-link></span>
            <span class="right"><router-link to="/regist">注册</router-link></span>
          </div>
          <div class="nav">
            <span class="left"><router-link to="/music">推荐</router-link></span>
            <span class="left"><router-link to="/detail">排行榜</router-link></span>
            <span class="left"><router-link to="/search">搜索</router-link></span>
          </div>
    </div>
    
  </div>
</template>
<script>
  import axios from 'axios';
  import { Swipe, SwipeItem } from 'mint-ui';
  export default {
    name: "Header-comp",

  }
</script>
<style scoped>
  #header{
    width: 100%;
    height: 90px;
  }
  .top{
    position: fixed;
    z-index: 1000;
    width: 100%;height: 90px;
    top: 0;
    left: 0
    

  }
  .header{
    background:#31c27c;
    width: 100%;
    height: 45px;

  }
  .header span {
    width: 50px;
    height: 45px;
    line-height: 45px;
    margin: 0 10px;
    color: #fff;
  }
  .right{
    float: right;
  }
  .left{
    float: left;
  }
  .nav{
    width: 100%;
    height: 45px;
    background: #fff;
  }
  .nav span{
    width: 33.3%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color:#666;
    border-bottom: 2px solid #31c27c;
  }
  a{
    text-decoration: none;
    color: #333;
  }
</style>

