<!--  -->
<template>
  <div id="user"  v-if="userDetail!==''">
      <div class="avatarUrl">
          <img :src="avatarUrl" alt="">
      </div>
      <!-- <span>{{nickname}}</span>
      <div class="level">Lv{{level}}</div> -->
      
  </div>
</template>

<script>

export default {
    computed:{
      userDetail(){
          return this.$store.state.userDetail
      }
    },
  data () {
    return {
        avatarUrl:'',
        nickname:'',
        newFollows:'',
        follows:'',
        signature:'',
        gender:'',
        eventCount:'',
        level:''
    }
  },
  created(){
      this.user( this.$store.state.userDetail)
  },
  methods:{
      user(user){
          console.log(user);
          this.avatarUrl = user.profile.avatarUrl
          this.nickname=user.profile.nickname
          this.newFollows = user.profile.newFollows
          this.follows = user.profile.follows
          this.signature = user.profile.signature
          this.gender = user.profile.gender 
        //  动态
          this.eventCount = user.profile.eventCount
          this.level = user.profile.level 






      
  }}
}

</script>

<style scoped>
.avatarUrl{
    width: 180px;
    height: 180px;
    border-radius:50%;
}
.avatarUrl img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.level{
    width: 32px;
    height: 10px;
    border-radius:5px;
}

</style>
