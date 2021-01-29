<!--  -->
<template>
  <div id="playerButtom">
     <div class="play"> 
      <div class="left">
        <i class="el-icon-caret-left"></i>
        <i class="el-icon-caret-right"></i>
        <i class="el-icon-caret-right"></i>
      </div>
      <div class="center">
        <div class="name">{{currentSong.al.name}}-{{currentSong.ar[0].name}}</div>
        <div class="radius"></div>
   <el-progress :text-inside="true" :stroke-width="2" :percentage="0" color="white"></el-progress>
      </div>
      <div class="right">3</div></div>
     
  </div>
</template>

<script>
export default {
  props:{
    currentSong:{
      type:Object,
      default(){
        return {}
      }
    },
    songUrl:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  methods:{
    
  }
}

</script>

<style  scoped>
#playerButtom{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 85px;  
    color:#fff;
    width: 100%;
   
}
.play{
    width: 1200px;
     margin: 0 auto;
     display: flex;
}
.left{
    width: 160px;
    display: flex;
}
.left i:nth-child(1),.left i:nth-child(3){
  font-size: 30px;
  width: 30px;
}
.left i:nth-child(2){
  flex:1;
  text-align: center;
  font-size: 50px;
  margin-top: -10px;
}
.right{
    width: 400px;
}
.center{
    flex:1;
    margin-left: 30px;
}
.center /deep/.el-progress-bar__outer {
  background-color: rgba(255,255,255,.3) !important;
}
.radius{
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius:50%;
  position: absolute;
  margin-top: 4px;
  font-size: 14px;
}
.name {
   color:#ccc;
   margin-left: 10px;
}
</style>
