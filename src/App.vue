<template>
  <div id="app">
    <qq-header/>   
    <keep-alive exclude="Recommend">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
 import qqHeader from 'components/header/Header'
 import iconfont from 'assets/iconfont.js'
export default {
   name: 'app',
   components:{
     qqHeader
   } 
  }

</script>
 
<style>
@import "assets/css/normalize.css";
</style>
