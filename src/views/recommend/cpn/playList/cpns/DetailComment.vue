<!--  -->
<template>
  <div id="comment">
      <p>最新评论({{commentcount}})</p>
       <div class="comment-item" v-for="(item,index) in comments" :key="index">
          <div class="user-avatar"><img :src="item.user.avatarUrl" alt=""></div> 
         <div class="comment-right"> 
             <p class="user-name">{{item.user.nickname}}</p>
             <p>{{item.content}}</p>
             <div class="comment-icon"> 
              <p class="el-icon-star-off">&nbsp;&nbsp;{{item.likedCount}}</p>
              <p class="el-icon-chat-dot-square"></p>
              </div>
              <div class="publishTime">{{item.time | showTime}}</div>
        </div>
       </div>
       <el-pagination
            layout="prev, pager, next"
            :total="commentcount"
            :current-page="pagenum"
            :page-size=20
            @current-change="handleCurrentChange"
            >
       </el-pagination>
       </div>
</template>

<script>
import {formatDate1} from '@/utils/format-data'
export default {
    props:{
         commentcount:{
            type:Number,
            default(){
                return null
            }
        },
        comments:{
            type:Array,
            default(){
                return []
            }
        },
       
    },
  data () {
    return {
        pagenum:1,
       
       
    }

  },
  filters:{
       showTime(value){
           return formatDate1(value,'yyyy月MM日dd mm:ss')
       }
  },
  methods:{
     handleCurrentChange(newPage){
         this.pagenum = newPage
        this.$emit('handleCurrentChange',newPage)
        
     }
     
  }  
}

</script>

<style scoped>
#comment{
    width: 870px;
    
}
.comment-item{
    height: 106px;
    border-top: 1px solid #ededed;
    display: flex;
}

.user-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
}
.user-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    margin-top: 20px;
}
.comment-right{
    flex:1;
    margin-left: 20px;
    margin-top: 10px;
    font-size: 14px;
    line-height: .8em;
    color:#333;
}
.user-name{
    color:#999;
}
.comment-icon{
   float:right;
   right: 0;
   font-size: 16px;
   margin-top: -15px;
}
.comment-icon p {
    padding: 0 10px;
}
.page {
    width: 30px;
    height: 30px;
    border:1px solid #ccc
}
.el-pagination {
    display: flex;
    justify-content: center;
    height: 200px;
    margin-top: 50px;
}
 .el-pagination >>> .el-pager li {
    background-color:#fff;
    color: #ccc;
    width: 44px;
    height: 50px;
    font-size: 20px;
    margin: 0 10px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
  }
  .el-pagination >>> .el-pager li:hover{
      background-color: #66c27c;
      color:#fff
 }
 .el-pagination >>> .el-pager li:first-child{
     background-color: #66c272;
     color:#fff
 }



</style>
