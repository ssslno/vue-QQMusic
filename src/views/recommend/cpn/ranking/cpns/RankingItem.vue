<!--  -->
<template>
  <div id="ranking-item">
     <div class="ranking-item"> 
      <p class="top">巅峰榜</p>
      <span class="name">{{ranking.name}}</span>
      <p class="line">——</p></div>
      <ul>
          <li class="ranking" v-show="index==0||index==1||index==2||index==3||index==4" v-for="(item,index) in ranking.tracks" :key="index">
            <span>{{index+1}}</span><span> {{item.name}}</span>
          </li>
      </ul>

  </div>
</template>

<script>
export default {
     props:{
       ranking:{
           type:Object,
           default(){
               return {}
           }
       }
    },
  data () {
    return {
    }
  }
}

</script>

<style  scoped>
.ranking-item{
    width: 224px;
    text-align: center;
    color:#fff;   
}
.top {
    padding-top: 20px;
    font-size: 18px;   
}
.name {
    font-size: 30px;
}
.line {
    font-weight: 700;
    font-size: 20px;
}
.ranking {
    padding: 15px 0;
    color:#fff;
    font-size: 16px;   
}
</style>
