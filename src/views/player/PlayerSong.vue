<!--  -->
<template>
  <div id="song">
      <div class="img">
          <img :src="currentSong.al.picUrl" alt="">
      </div>
      <div class="al">
          <p>歌曲名:&nbsp;{{currentSong.name}}</p>
          <p>歌手名:&nbsp;{{arName}}</p>
          <p>专辑名:&nbsp;{{currentSong.al.name}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        currentSong:{
            type:Object,
            default(){
                return {}
            }
        },
        arName:{
            type:String,
            default(){
                return ''
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
#song {
    position: absolute;
    color:#fff;
    width: 140px;
    right: 160px;
    top: 60px;
}
.img {
    width: 194px;
    height: 194px;
}
.img img {
    width: 100%;
    height: 100%;
}

.al p {
    width: 194px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    color:#ccc;
    font-size: 14px;

}
</style>
