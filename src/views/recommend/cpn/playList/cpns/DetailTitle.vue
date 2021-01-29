<!--  -->
<template>
  <div id="detail-title">
      <div class="detail-title">
          <div class="img">
            <img :src="playlist.coverImgUrl" alt="">
          </div>
          <div class="desc">
              <p class="name">{{playlist.name}}</p>
              <div class="creator">
                  <i class="el-icon-user icon"></i>
                  <span class="nickname">{{playlist.creator.nickname}}</span>
                  <div class="tag">标签：{{playlist.tags[0]}}&nbsp;{{playlist.tags[1]}}</div>
                  <div class="tag">播放量：{{playlist.playCount | showCount}}</div>
                  <div class="four-button" >
                      <el-button type="primary" icon="el-icon-video-play" class="current" >播放全部</el-button>
                      <el-button type="primary" icon="el-icon-star-off" class="button" >收藏</el-button>
                      <el-button type="primary" icon="el-icon-chat-dot-square" class="button">评论({{playlist.commentCount}})</el-button>
                      <el-button type="primary" icon="el-icon-chat-dot-round" class="button">更多</el-button>
                  </div>
              </div>
              <!-- 简介 description -->
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        playlist:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
         showCount(count){
          if(count<0) return;
          if(count<10000){
            return count
    }
    else if(Math.floor(count/10000)<10000){
        return Math.floor(count/1000)/10+'万'
    }
    else  {
        return Math.floor(count/10000000)/10+'亿'
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
#detail-title{
    height: 330px;
    background-color:#f7f7f7 
}
.detail-title{
    padding-top: 36px;
    width: 1200px;    
    margin: 0 auto;
    display: flex;
}
.img{
   width: 250px;
   height: 250px; 
}
.img img {
    width: 100%;
    height: 100%;
}
.desc{
    flex:1;
    margin-left: 30px;
}
.name {
    font-size: 30px;
}
.creator {
    margin-top: -20px;
}
.icon {
    font-size: 18px;
    color:#999
}
.nickname{
    display: inline-block;
    color:#66c27c;
    font-size: 18px;
    margin-left: 5px;
    
}
.tag{
    font-size: 14px;
    margin-top: 14px;
}
.button {
    /* background-color: #31c27c !important; */
    width: 120px;
    height: 36px;
    border:none;
    color:#000;
    background-color: #fff;
    border:1px solid #ccc;
}
.four-button{
    margin-top: 42px;
}
.current {
    background-color: #66c27c;
    color:#fff;
     width: 120px;
    height: 36px;
    border:none;
}
.button:hover {
    background-color: #ededed;
}



</style>
