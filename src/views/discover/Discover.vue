
<template>
  <div id="discover" >
      <div class="wrap1">
        <div class="wrap"  :key="index" v-for="(item,index) in discoverMenu">      
          <router-link class="children-nav" :to="item.link">{{item.title}}</router-link> 
      </div>  
      </div>
       <router-view></router-view>   
  </div>
</template>

<script>
export default {
  name:'Discover',
  data () {
    return {
      discoverMenu:[
        {
          title:'首页',
          link:'/discover/recommend'
        },
        {
          title:'歌手',
          link:'/discover/artist'
        },
        {
          title:'新碟',
          link:'/discover/artist'
        },
        {
          title:'排行榜',
          link:'/discover/artist'
        },
        {
          title:'歌单',
          link:'/discover/artist'
        },
        {
          title:'电台',
          link:'/discover/artist'
        },
        {
          title:'数字专辑',
          link:'/discover/album'
        },
        
      ]
    }
  }
}

</script>

<style  scoped>
.wrap1 {
  display: flex;
  margin:0 auto;
  width: 720px;
  height: 50px;
  line-height: 50px;
}
.wrap {
 flex:1;
}
.children-nav{
  font-size: 16px;
  color:#000;
  text-decoration: none;
}
.children-nav:hover{
  color:#66c27c;
}
</style>
