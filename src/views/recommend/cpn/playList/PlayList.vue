<!--  -->
<template>
  <div class="playlist">
      <el-carousel height="360px">
             <el-carousel-item v-for="(item,indey) in [0,1]" :key="indey" >
                  <div class="image-card" ref="img">
          <div class="card-item" :key="index" v-for="(item,index) in playLists.slice(item*5,(item+1)*5)">
              <div class="card-img"  >
                  <div class="mask" @click="toDetail(index,indey)"></div>
                  <img :src="item.picUrl" alt="">
              </div>
              <p class="name">{{item.name}}</p>
              <p class="count"> 播放量{{item.playCount}}</p>
          </div>
      </div> 
             </el-carousel-item>    
         </el-carousel>
  </div>
</template>

<script>
import {getCount} from '@/utils/format-data'
export default {
    props:{
        playLists:{
            type:Array,
            default(){
                return []
            }
        }
        },
        data(){
            return {
                isShow:false
            }
        } ,
        methods:{
           
            coverPlay(){
                this.isShow = !true
            },
            toDetail(index,indey){
                if(indey == 1){
                    index +=5
                }
               
                console.log(indey);
                this.$router.push('/playlist/detail/'+this.playLists[index].id)
            }
        }     
}

</script>

<style scoped>


.image-card {
    display: flex;
    width: 1200px;
    margin: 0 auto; 
    padding-top: 30px;
    overflow: hidden;
}
.card-img {
    position: relative;
    width: 225px;
    height: 225px;
    overflow: hidden;

}
.card-img:hover .mask{
    display: block;
}
.card-item img {
    flex:1;
    width: 225px;
    height: 225px;
}
.name {
    font-size: 14px;
    margin-top: 20px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 225px;
    margin-left: 18px;
   
}
.count {
    color: #999;
    margin-left: 9px;
}
/* 遮罩 */
.mask {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.2) url(../../../../assets/img/cover_play.png) no-repeat center;
}

</style>
