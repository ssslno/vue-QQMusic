<!--  -->
<template>
  <div id="title">
       <detail-title :playlist="playlist"/>
      <div class="songList">
        <detail-table :song="songs" :trackCount="playlist.trackCount"
        :songUrl="songUrl"/>
        <detail-dec :desc="playlist.description"></detail-dec>
      </div>
        <dowload />
       <detail-comment @handleCurrentChange="handleCurrentChange" :comments="comment.comments" :commentcount="commentCount"/>
  </div>
</template>

<script>
import {getPlayListDetail,getDetailSong,getPlayListComment,getSongUrl} from '@/network/recommend'
import DetailTitle from './DetailTitle'
import DetailTable from './DetailTable'
import DetailDec from './DetailDec'
import Dowload from './Dowload'
import DetailComment from './DetailComment'
export default {
    components:{
        DetailTitle,
        DetailTable,
        DetailDec,
        Dowload,
        DetailComment
    },
  data () {
    return {
        id:null,
        playlist:{},
        // songId:null
        // playlist.trackIds[0].id
        song:[],
        songs:[],
        commentCount:null,
        comment:{
          limit:20,
          offset:0,
          comments:[],
        },
        arr:[],
        songUrl:{},
        currentSong:{}

    }
  },
  created(){
      this.id= this.$route.params.id
      this. getPlayListDetail(this.id)
      this.getPlayListComment(this.id)    
         
  },
  methods:{    
     getPlayListDetail(id){
       getPlayListDetail(id).then(res=>{  
           this.playlist = res.playlist
           this.commentCount = res.playlist.commentCount 
           for( let i=0;i<this.playlist.trackIds.length;i++){           
              getDetailSong(this.playlist.trackIds[i].id).then(res=>{
               //因为是异步请求 console.log在ajax请求后打印不出具体数据 所以要放在ajax请求前面
                //  console.log(this.song[10]);
                this.songs = this.song.slice(0,10)
                 this.song.push(res.songs[0])                              
              })        
           }           
     })
     },
     getPlayListComment(id,offset){
        getPlayListComment(id,offset).then(res=>{
                  this.comment.comments = res.comments
                 
       })
     },
     handleCurrentChange(newPage){
        this.id= this.$route.params.id
          const offset = (newPage)*this.comment.limit
           this.getPlayListComment(this.id,offset)
        
     },
     

  }}
</script>

<style  scoped>
#title {
  width: 1200px;
  margin: 0 auto;

}
.songList {
   width: 1200px;
   display: flex;
}
</style>