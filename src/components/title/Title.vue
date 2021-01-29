<!--  -->
<template>
  <div id="title">
     <div class="title">
         <slot></slot>
      </div>
      <ul class="keywords" >
          <li :key="index" v-for="(item,index) in keywords">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}

</script>

<style lang='stylus' scoped>

</style>
