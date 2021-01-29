
<template>
  <div id="album">
      <Swiper :banners="banners" />
      <Item :albums="albums" title="最新上架" />
    
  </div>
  
</template>

<script>
import Swiper from '@/views/recommend/cpn/swiper/Swiper'
import Item from '@/components/item/Item'
import {getTopBanners,getNewAlbum} from '@/network/recommend'
export default {
    components:{
      Swiper,
      Item
  },
  data () {
    return {
        banners:[],
        albums:[]
    }
  },
  created(){
      this.getTopBanners()
      this.getNewAlbum(5)

  },
  methods:{
       getTopBanners(){
           getTopBanners().then(res=>{
               this.banners = res.banners
           })
       },
       getNewAlbum(limit){
           getNewAlbum(limit).then(res=>{
              this.albums = res.albums
           })
       }

  }
}

</script>

<style  scoped>

</style>

