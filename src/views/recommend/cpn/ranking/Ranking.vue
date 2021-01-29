<!--  -->
<template>
  <div id="ranking">
      <div class="ranking-item up"><ranking-item :ranking="ranking[0]"/></div>
      <div class="ranking-item hot"><ranking-item :ranking="ranking[1]"/></div>
      <div class="ranking-item new"><ranking-item :ranking="ranking[2]"/></div>
  </div>
</template>

<script>
import RankingItem from './cpns/RankingItem'
export default {
    components:{
        RankingItem
    },
    props:{
       ranking:{
           type:Array,
           default(){
               return []
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
#ranking {
    width: 1200px;
    height: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}
.ranking-item{
    width: 220px;
    height: 500px;
    background: url(../../../../assets/img/bg_index_top.jpg) no-repeat;
    
}
.up{
    background-color: #cf718c;
    background-position: 0 0;
}
.hot{
    background-color: #6e97b2;
    background-position: -224px 0;
}
.new {
    background-color: #f3a975;
    background-position: -896px 0;
}
</style>
