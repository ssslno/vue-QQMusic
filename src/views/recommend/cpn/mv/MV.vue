<!--  -->
<template>
  <div id="mv">
      <div> 
        <el-carousel height="460px">
             <el-carousel-item v-for="item in [0,1,2]" :key="item">
                <div class="mv-card">
                     <div class="mv-item" v-for="(item,index) in mv.slice(item*10,(item+1)*10)" :key="index">
                      <div class="mv-img">
                       <img :src="item.cover" alt="">
                      </div>
                      <p class="name">{{item.name}}</p>
                      <p class="artist-name">{{item.artistName}}</p>
                      <div>
                          <i class="el-icon-video-camera"></i>
                          <span> {{item.playCount}}</span>
                      </div>
                     </div>
                </div>
             </el-carousel-item>    
         </el-carousel>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        mv:{
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
.mv-card {
    width: 1200px;
    height: 460px;
    margin: 0 auto; 
    display: flex;
    flex-wrap: wrap;
}
.mv-item{
    width: 220px;
    height: 230px;
    margin-left: 16px;  
}
.mv-img { 
    height: 125px;  
}
.mv-item img {
    width: 100%;
    height:100%
}
.name {
   margin-top: 20px;
   font-size: 14px;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;

}
.artist-name {
    margin-top: 10px;
    color:#999
}
i{
    font-size: 20px;
    color:#999 !important;
    vertical-align: middle;
    
}
span {
    color:#999;
    display: inline-block;
    margin-left: 5px;
}
</style>
