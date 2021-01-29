<!--  -->
<template>
  <div id="tab-control">
     <div class="title">{{title}}</div>
     <div class="keywords"> 
         <span :key="index" v-for="(item,index) in keywords" 
               @click="itemClick(index)"
               :class="{active:index===currentIndex}">
               {{item}}
               </span>
     </div>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default(){
                return ''
            }
        },
        keywords:{
            type:Array,
            default(){
                return []
            }
        },
        activeColor:{
            type:Number,
            default:570,
        }
        },
  data () {
    return {
        currentIndex:0
    }
  },
methods:{
    itemClick(index){
       this.currentIndex = index
       this.$emit('tabclick',index)
    }

}
}

</script>

<style  scoped>
.title {
    font-size: 30px;
    margin: 0 auto; 
    padding: 50px 0 30px;  
    width: 160px;
    color:#333
    
}
.keywords{
   width: 570px;
   font-size: 15px;
   margin: 0 auto;
}
.keywords span {
    display: inline-block;
    padding:0 25px;
    cursor: pointer;
}
.active {
    color:#66c27c
}
</style>
