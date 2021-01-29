<!--  -->
<template>
  <div id="item">
         <div class="title"> {{title}}</div>
         <div class="item">
             <div class="item-img" v-for="(item,index) in albums" :key="index">
             <img :src="item.picUrl" alt="">
             <div class="item-name">{{item.name}}</div>
             <div class="item-artist">{{item.artists[0].name}}</div>
             <span><button>立即购买</button></span>
         </div>
         </div>
  </div>
</template>

<script>
export default {
    props:{
        albums:{
            type:Array,
            default(){
                return []
            }
        },
        title:{
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
#item{
    width: 1200px;
    margin: 0 auto;
}
.item {
    display: flex;
    width: 1200px;
    margin: 0 auto;
}
.item-img{
    flex:1;
    width: 220px;
    height: 220px;
}
.item-img img {
    width: 220px;
    height: 220px;
}
.title{
    height: 60px;
    font-size: 24px;
    margin-top: 60px;
}
.item-name{
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.item-artist {
    color:#999;
    font-size: 14px;
}
button{
    float:right;
    margin-right: 17px;
    height: 28px;
    width: 80px;
    border:1px solid #999;
    background-color: #fff;
}
</style>
