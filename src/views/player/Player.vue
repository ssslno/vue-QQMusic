<!--  -->
<template>
  <div class="player">
       <div class="bgc" :style="{'backgroundImage': 'url(' + currentSong.al.picUrl + ')'}">      
        <div class="mask"></div> 
        <player-lyric :lyric="lyric"/> 
            <player-button />
            <player-song :currentSong="currentSong" :lyric="lyric" :arName="arName"></player-song>
            <!-- 播放控件 -->
        <div id="playerButtom">
     <div class="play"> 
      <div class="left">
        <svg class="icon" aria-hidden="true" @click="preMusic" >
          <use xlink:href="#icon-houtui"></use>
        </svg>
        <i class="el-icon-video-play" v-if="musicStatus" @click="musicPlay"></i>
        <i class="el-icon-video-pause" v-else @click="musicStop"></i>
        <svg class="icon" aria-hidden="true" @click="nextMusic" >
  <use xlink:href="#icon-qianjin"></use>
</svg>
      </div>
      <div class="center">
        <div class="name">{{currentSong.al.name}}-{{currentSong.ar[0].name}}</div>
        <!-- <div class="radius"></div>
   <el-progress :text-inside="true" :stroke-width="2" :percentage="0" color="white"></el-progress>
      </div> -->
      <!-- 滑动进度条 -->
       <div class="block">
    <el-slider v-model="sliderTimer" @change="sliderChange" :show-tooltip="false"></el-slider>
  </div>
         <div>{{currentTime}}&nbsp;/{{duration}}</div>
      </div>
     <div class="right">
        <div>
          <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-menu"></use>
</svg>
        </div>
         <div>
          <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-fabulous"></use>
</svg>
        </div>
         <div>
          <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-direction-down"></use>
</svg>
        </div>
         <div>
          <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-edit-filling"></use>
</svg>
        </div>
      </div>
  </div>
  </div>
  
            <audio :src="songUrl.url" autoplay
            ref="audio" @timeupdate='timeupdate' @play="playLoad()"
            @playing="musicPlaying()" @pause="musicPause()" @ended="musicEnded()"></audio>
      </div> 
  </div>  
 
</template>

<script>
import Bus from '@/assets/bus'
import {getSongUrl,getDetailSong,getLyric} from '@/network/recommend'
import {formatDate,deepClone} from '@/utils/format-data'
import PlayerButton from './PlayerButton'
import PlayerSong from './PlayerSong'
import PlayerButtom from './PlayerButtom'
import PlayerLyric from './playerLyric'
export default {
  components:{
    PlayerButton,
    PlayerSong,
    PlayerButtom,
    PlayerLyric
  },
  data () {
    return {
      songUrl:{},
      currentSong:{},
      lyric:'',
      currentTime: '00:00',
      musicStatus:true,
      currentIndex:0,
      musicList:[],
      duration:'00:00',
      // slider的位置
      sliderTimer:0,
      arName:''
    }
  },
created(){
  Bus.$off('playMusic')
},
mounted(){
     Bus.$on('playMusic',(index,song)=>{
           this.getSongUrl(song[index].id)
          //  let cloneList = []
          //  deepClone(cloneList,song)
           this.currentIndex = index 
           this.musicList = song
           this.init()
     })
     
  },
     methods:{
      //  请求数据
       getSongUrl(id){
         getSongUrl(id).then(res=>{
                this.songUrl=res.data[0] 
                getDetailSong(id).then(res=>{
                this.currentSong = res.songs[0] 
                // 处理歌手位数
                let ar = this.currentSong.ar
                let arr=[]
                if(ar.length!==1){
                  for(let i=0;i<ar.length;i++){
                   arr.push(ar[i].name) 
                  }
                }
                this.arName = arr.join(',')
                // 歌词 
           getLyric(id).then(res=>{
             this.lyric = res.lrc.lyric  
             })  
                })
            this.$store.commit('editSongDetail',this.song[this.currentIndex])
            this.musicStatus = false
       })
       

       },
      //  开始播放
      musicPlaying(){
        this.$store.commit('editMusicPlay',true)
      },
      //暂停播放
      musicPause(){
        this.$store.commit('editMusicPlay',false)
      },
      //歌曲加载完成播放时
      playLoad(){
        let durationTime = this.musicList[this.currentIndex].dt
        let durationDate = new Date(durationTime)
        this.duration = formatDate(durationDate,'mm:ss')
        console.log(this.duration);
        // this.duration = formatDate(durationTime,'mm:ss')
      },
      //播放
      musicPlay(){
        this.$nextTick(()=>{
          if(this.songUrl!==''){
            this.$refs.audio.play()
            this.musicStatus = false
          }

        })
      },
      //暂停
       async musicStop(){
         this.musicStatus = true
         await this.$refs.audio.pause()
       },
      //  上一首歌
        preMusic(){
          // if(this.currentIndex ===0) return 0
          if(this.currentIndex ===0)  return '正在播放第一首'
          this.currentIndex-=1
          this.init()

        },
        // 下一首歌
        nextMusic(){
             if(this.musicList.length-1 == this.currentIndex){
               if(this.$refs.audio.ended){
                 //重新播放 this.currentIndex = 0
                 return this.musicLoad()
               }
               else {
                 return 
               }
               
             }
             this.currentIndex+=1 
             this.init()
        },
        // 重新播放
        musicLoad(){
          this.$refs.audio.load()
        },
        // 播放结束时
        musicEnded(){
          if(this.musicList.length -1 == this.currentIndex){
            this.musicLoad()
          }
          this.nextMusic()
        },
        // 进度条发生变化
        sliderChange(val){
             this.$refs.audio.currentTime = val / 100 * this.$refs.audio.duration
        },
        // 时间更新
       timeupdate(){
       if(!this.$refs.audio) return
       let duration = new Date(this.$refs.audio.duration *1000)
       let currentTime = new Date(this.$refs.audio.currentTime * 1000)
       this.currentTime  = formatDate(currentTime, 'mm:ss')
       //  滑块的位置
       this.sliderTimer = currentTime/duration *100 
       this.$store.commit('editCurrentTime',currentTime)
       },
      //  更新数据
       init(){
         this.getSongUrl(this.musicList[this.currentIndex].id)
         this.musicStatus = false
       }
     }}


</script>

<style  scoped>
.player { 
    position: relative;
    width: 100%;
    height: 100vh;  
    color:#000
   
}
.bgc {
  width: 100%;
  height: 100%;
  background-size: cover;
   /* opacity: .8; */
  
}

.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(43, 33, 33, .9); 
}
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
    width: 150px;
    display: flex;
}
.right div {
     flex:1;
     padding-right: 10px;
     
}
.center{
    width: 700px;
    margin-left: 30px;
}
.center /deep/.el-slider__runway {
  background-color: rgba(255,255,255,.3) !important;
  width: 700px;
  height: 2px;
}
 .center /deep/.el-slider__bar{
   background-color: #fff;
   height: 2px;
   
 }
 .center /deep/ .el-slider__button{
   background-color: #fff;
   border :2px solid #fff;
   width: 6px;
   height: 6px;

 }
.name {
   color:#ccc;
   margin-left: 10px;
}


</style>
