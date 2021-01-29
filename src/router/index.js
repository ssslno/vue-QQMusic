import Vue from 'vue'
import VueRouter from 'vue-router'
 const Discover =()=>import('views/discover/Discover')
 const Recommend = ()=>import('views/recommend/Recommend')
const Album = ()=>import('views/album/Album')
 const Artist  =()=>import('views/artist/Artist')
 const Detail =()=>import('views/recommend/cpn/playList/cpns/Detail')
 const Player =()=>import('views/player/Player')
 const newSongCpn=()=>import('views/recommend/cpn/newSong/newSongCpn')
 const userHome =()=>import ('views/user/userHome')
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/discover'
  },
  {
    path:'/discover',
    component:Discover,
    children:[
      {
        path:'/discover',
        redirect:'/discover/recommend'
      },
      {
        path:'/discover/recommend',
        component:Recommend
      },
      {
        path:'/discover/artist',
        component:Artist
      },
      {path:"/discover/album",
      component:Album
      },{
        path:'/playlist/detail/:id',
        component:Detail
      },
      {
        path:'/newSong/:id',
        component:newSongCpn
      },{
        path:'/user/:id',
        component:userHome
      }
      
    ]
  },
  {path:'/player/:id',
    component:Player}
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
