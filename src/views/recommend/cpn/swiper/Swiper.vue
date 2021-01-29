<!-- 轮播图 -->
<template>
  <div id="swiper">
     <div class="swiper">
          <el-carousel class="el-crousel" :interval="4000" type="card" height="300px">
     <el-carousel-item v-for="(item,index) in banners" :key="index">
         <img :src="item.imageUrl" alt="">
    </el-carousel-item>
  </el-carousel>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props:{
      banners:{
          type:Array,
          default(){
              return []
          }
      }
  }
}

</script>

<style  scoped>
.swiper {
    height: 400px;
    background-color: #f5f5f5;  
}
 .el-carousel{
     padding-top: 65px;
 }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
