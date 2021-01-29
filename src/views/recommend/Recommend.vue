<!--  -->
<template>
  <div id="recommend">
      <qq-header/>
      <tab-control title="歌单推荐" :keywords="['为你推荐','轻音乐','经典','伤感','官方歌单','情歌']"/>
      <play-list :playLists="playLists" />
       <tab-control ref="tabControl" title="新碟上架" :keywords="['最新','内地','','欧美','日本','韩国']" @tabClick="tabClick(index)"/>
      <new-song :newSong="newSong[currentType].list" />
      <tab-control title="排行榜" />
      <ranking :ranking="[upRanking,newRanking,originRanking]"/>
       <tab-control title="MV" />
       <m-v :mv="mv"/>
       

  </div>

</template>

<script>
import {getPlayList,getCat,getNewSong,getRanking,getMV} from '@/network/recommend'
import PlayList from './cpn/playList/PlayList'
import NewSong from './cpn/newSong/NewSong'
import hotRecommend from './cpn/hotRecommend/hotRecommend'
import TabControl from '@/components/tabControl/TabControl'
import Ranking from './cpn/ranking/Ranking'
import MV from './cpn/mv/MV'
export default {
    components:{
        PlayList,
        NewSong,
        hotRecommend,
        TabControl,
        Ranking,
        MV,
    },
  data () {
    return {
        playLists:[],
         //ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
        newSong:{
              'ALL':{list:[]},
              'ZH':{list:[]},
              'EA':{list:[]},
              'KR':{list:[]},
              'JP':{list:[]}
              },
        currentType:'ALL',
        upRanking:{},
        newRanking:{},
        originRanking:{},
        mv:[],
        
    }
  },
  created(){
       this.getPlayList(10)
       this.getNewSong(18,'ALL')
    //    this.getNewSong('ZH')
    //    this.getNewSong('EA')
    //    this.getNewSong('KR')
    //    this.getNewSong('JP')
       this.getRanking(0)
       this.getRanking(2)
       this.getRanking(3)
       this.getMV()


  },
  methods:{
    //   网络请求
      getPlayList(limit){
          getPlayList(limit).then(res=>{
            //   console.log(res);
              this.playLists = res.result           
          })          
      },
      getNewSong(limit,area){
          getNewSong(limit,area).then(res=>{
            //   console.log(res.albums);
             this.newSong[area].list.push(...res.albums)         
          })
      },
      getRanking(idx){
          getRanking(idx).then(res=>{
             switch(idx){
                 case 0:
                     this.upRanking = res.playlist
                     break
                 case 2:
                     this.newRanking = res.playlist
                     break
                 case 3:
                     this.originRanking = res.playlist
                     break
             }

          })
      },
      getMV(){
          getMV().then(res=>{
            //   console.log(res);
              this.mv = res.data
          })
      },
      tabClick(index){
          switch(index){
              //  ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
              case 0:
                  this.currentType = 'ALL'
                  break
              case 1:
                  this.currentType = 'ZH'
                  break
              case 2:
                  this.currentType = 'EA'
                  break
              case 3:
                  this.currentType = 'JP'
                  break
              case 4:
                  this.currentType = 'KR'
                  break
             
          }
          this.$refs.tabControl.currentIndex = index
      }
  }
}

</script>

<style  scoped>
#recommend{
    background-color: #f3f3f3;
}
</style>
