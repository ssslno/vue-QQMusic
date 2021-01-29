import Vue from 'vue'
import Vuex from 'vuex'
import {getUserDetail} from '@/network/login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMusicPlay: false,
    currentTime: 0,
    songList:[],
    songDetail:{},
    user:{},
    cookie:'',
    uId:'',
    songList:[],
    userDetail:{},
    a:'111'
  },
  mutations:{
    editMusicPlay (store, type) {
      store.isMusicPlay = type
      
    },
    editCurrentTime (store, time) {
      store.currentTime = time
    },
    editSongDetail(store,obj){
      store.songDetail = obj
    },
    addUser(store,obj){
      store.user = obj
      store.cookie = store.user.cookie 
      store.uId = store.user.account.id 
      getUserDetail(store.uId).then(result=>{
        store.userDetail = result
      })

    }
  }
 

})
