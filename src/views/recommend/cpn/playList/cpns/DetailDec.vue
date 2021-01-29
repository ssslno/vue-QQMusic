
<!--  -->
<template>
  <div id="desc">
      <p class="jianjie">简介</p>
      <p class="desc">{{desc}}</p>
  </div>
</template>

<script>
export default {
    props:{
        desc:{
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

<style scoped>
#desc {
    margin-left: 50px;
    flex:1
}
.jianjie{
    font-size: 20px;
}
.desc {
    font-size: 14px;
    line-height: 1.5em;
}
</style>
