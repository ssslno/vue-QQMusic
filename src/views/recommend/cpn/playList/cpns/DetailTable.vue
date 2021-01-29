<!--  -->
<template>
  <div id="table">
    <table class="table">
      
        <tr>
          <td>&nbsp;</td>
          <td>歌名</td>
          <td width="80px"></td>
          <td>歌手</td>
          <td>专辑</td>
          <td>时长</td>
        </tr>
        <tr @click="itemClick(index,song)" v-for="(item,index) in song" :key="index">
          <td >{{index+1}}</td>
          <td width="300px">{{item.name}}</td>
          <td >
            <div class="play" >
              <el-button icon="el-icon-caret-right" circle></el-button>          
           </div>
       </td>
          <td>{{item.ar[0].name}}</td>
          <td>{{item.al.name}}</td>
          <td>{{item.dt | dateFormat}}</td>
        </tr> 
    </table>
  </div>
</template>

<script>
import{formatDate} from '@/utils/format-data'
import Bus from '@/assets/bus.js';
export default {
  props:{
    song:{
      type:Array,
      default(){
      return []
      }
    },
    songUrl:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    // playMusic(row,column,cell,event){   
    //   const rowID = row.id
    //   this.$router.push('/player/'+rowID)
    //   setTimeout(()=>{
    //     Bus.$emit('playMusic',rowID)
    //   },700)
    // }
    // }
    itemClick(index,song){
         console.log(song[index].id);
         const iid = song[index].id
         this.$router.push('/player/'+iid)
         setTimeout(()=>{
           Bus.$emit('playMusic',index,song)
         },700)
    }
    
  }}


</script>

<style scoped>
#table {
  width: 850px;
  margin: 0 auto;
  font-size: 16px;
  padding:0 20px;
  border-spacing: 0;

}
#table td{
  line-height: 40px;
  padding: 10px;
}
#table tr:nth-child(2n-1){
  background-color: #fcfcfc;
}
.play {
  display: flex;
}



</style>
