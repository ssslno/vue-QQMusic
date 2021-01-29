<!--  -->
<template>
  <div id="newSong">
     <div>
         <el-carousel height="400px">
             <el-carousel-item v-for="(item,indey) in [0,1]" :key="indey">
                 <div class="newSong" >
                    <div class="song-item" v-for="(item,index) in newSong.slice(item*9,(item+1)*9)" :key="index" @click="newSongClick(index,indey,newSong)">
                        <div class="song-img">
                            <div class="mask"></div>
                             <img :src="item.picUrl" alt="">                           
                        </div> 
                        <div class="song-message">
                             <div class="left">
                                 <div class="name">{{item.name}}</div>
                         <p class="artist">{{item.artist.name}}</p>
                             </div>
                         <p class="publishTime">{{item.publishTime | showDate}}</p>
                        </div>
                    </div>
                 </div>
             </el-carousel-item>   
         </el-carousel>
     </div>
  </div>
</template>

<script>
import {formatDate} from '@/utils/format-data'
import Bus from '@/assets/bus.js'
export default {
     props:{
         newSong:{
            type:Array,
            default(){
                return []
            }
        }
     },
  filters:{
      showDate(value){
          const date = new Date(value*1000)
        return formatDate(date,'MM-dd')      
      }
  },
  methods:{
      newSongClick(index,indey,newSong){
          if(indey == 1){
              index +=9      
          }
        //   else if(indey ==2){
        //       index +=18

        //   }
        //   else if(indey ==3){
        //       index +=27
        //   }
        //   else if(indey==4){
        //       index +=36
        //   }
          console.log(newSong[index].id);
          const iid = newSong[index].id
          this.$router.push('/newSong/'+iid)
        //  setTimeout(()=>{
        //      Bus.$emit('playMusic',index,newSong)
        //  },5000)

      }
  }
}

</script>

<style scoped>
.newSong{
    width: 1200px;
    height: 400px;
    display: flex;
    margin: 50px auto 0;
    flex-wrap: wrap;
    background-color: #fafafa;
}
.song-item {
    width: 400px;
    height: 85px;
    display: flex; 
}
.song-img{
    position: relative;
    width: 85px;
    height: 85px;
}
.song-img:hover .mask{
    display: block;
}
.newSong img {
    width: 100%;
    height: 100%;   
}
.song-message {
    display: flex;
    width: 315px;
}
.left {
    flex:1
}
.name {
    padding-left: 20px;
    padding-top: 25px;
    
}
.artist {
    padding-left: 20px;   
    color:#999;
}
.publishTime{
     width: 50px;
     padding-top: 30px; 
     color:#999
}
.mask {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.2) url(../../../../assets/img/cover_play.png) no-repeat center;
    background-size: 40px 40px;
}
</style>
