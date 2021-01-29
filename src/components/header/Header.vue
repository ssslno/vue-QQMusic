<!--  -->
<template>
  <div id="header">
      <div class="nav">
        <div class="top">
        <div class="left">        
           <img  src="~assets/img/qqimg.png" alt="">
        </div>
        <div class="center">
          <ul>
            <li :key="index" v-for="(item,index) in headerLinks" 
            :class="{active:index===currentIndex}" 
            @click="titleClick(index)">
             {{item.titles}}
            </li>
          </ul>
          <div class="mark"><img src="~assets/img/mark.png" alt=""></div>
        </div>
        <div class="right">
          <!-- 少了一个 v-model=“input” -->
          <el-input  placeholder="搜索音乐、MV、歌单、用户" class="el-input"></el-input>
          
           <i class="el-icon-search"></i> 
           <div class="loginImgSrc" @click="userSong"  v-if="loginImgSrc!==undefined"><img  :src="loginImgSrc" alt=""></div>
           <span class="login" @click="qqIsLogin" >{{loginState}}</span>
      
           <el-select class="select1" v-model="value" :placeholder="options1[0].label">
              <el-option class="option1"
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                     :value="item.value"
                    >
               </el-option>
            </el-select>
            <!--充值  -->
            <el-select class="select2" v-model="value" :placeholder="options2[0].label">
              <el-option class="option1"
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                     :value="item.value"
                    >
               </el-option>
            </el-select>
        </div>
       
      </div>
      </div>
      <!-- 登录 -->
      <div id="login">
       <el-dialog
  :visible.sync="userFormdialogVisible"
  @close="userFormClose"
  width="30%"
  >
  <el-form :model="userForm"  :rules="userFormRules" ref="userFormRef" label-width="100px" class="demo-ruleForm">
      <el-form-item  prop="phone">
        <!--  -->
    <el-input placeholder="18370067761" v-model="userForm.phone"></el-input>
  </el-form-item>
  <el-form-item prop="password">
    <el-input type="password" placeholder="l4011147783" v-model="userForm.password" autocomplete="off"></el-input>
  </el-form-item>
  </el-form>
    <el-button type="primary" @click="userLogin">提交</el-button>
</el-dialog>
  </div>
  </div>
</template>

<script>
import Login from '../login/Login'
import {getLogin} from '@/network/login'
export default {
  components:{
    Login
  },
  data () {
     // 手机号码验证规则
    var checkMobile = (rule, value, cb) => {
      const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
      if (regMobile.test(value)) {
        return cb()
      }
      cb(new Error('请输入合法的手机号码'))
    }
    return {
      value:'',
      headerLinks:[
          {
        titles:'音乐馆',
        link:"/discover"
    },
    {
        titles:'我的音乐',
        link:"/mine"
    },
    {
        titles:'客户端',
        link:"/https://y.qq.com/download/index.html"
    },
    {
        titles:'开放平台',
        link:"/open"
    },
    {
        titles:'vip',
        link:"/vip"
    }
      ],
      currentIndex:0,
      options1:[
        {
          value: '选项1',
          label: '开通VIP'
        }, {
          value: '选项2',
          label: '开通绿钻豪华版'
        }, {
          value: '选项3',
          label: '开通付费包'
        }

      ],
      options2:[
        {
           value: '选项1',
          label: '充值'
        },
        {
           value: '选项2',
          label: '购买乐币'
        },
        {
           value: '选项3',
          label: '购买饭票'
        },

      ],
      userFormdialogVisible:false,
        userForm: {
          phone: '',
          password: ''
        },
        userFormRules: {
          phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
        },
        loginState:'登录',
        uId:'',

      
      
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index

    },
    qqIsLogin(){
      this.userFormdialogVisible = !this.userFormdialogVisible 
        if(this.loginState !=='登录'){
                this.userFormdialogVisible = false
              }
    },
      userFormClose(){
         this.$refs.userFormRef.resetFields()
         
      },
     userLogin(){
          this.$refs.userFormRef.validate((item) => {
          if(!item) return
          getLogin({
              phone:this.userForm.phone,
              password:this.userForm.password
          }).then(res=>{
            console.log(res);
                if(res.name && res.name==='Error'){
                   return this.$message.error('登录失败')
              }
              
              if(res.code!==200) return this.$message.error(res.msg) 
              this.$store.commit('addUser',res)
              this.uId = res.account.id
              this.loginImgSrc = res.profile.avatarUrl
              this.loginState = res.profile.nickname
              this.userFormdialogVisible = false   
            
          })
        })
     },
     userSong(){
       const id = this.uId
       console.log(id);
       this.$router.push('/user/'+id)

       

     }
  }
}

</script>

<style  scoped>
.active {
  background-color: #66c27c;
  color:#fff;
  height: 90px;
}
#header {
  height: 91px;
  background-color: #ffff;
}
.nav {
  width: 1200px;
  margin: 0 auto;
}
.top {
  display: flex;
  align-items: center;
  height: 90px;
  border-bottom: 1px solid #f2f2f2;
}
.left {
  width: 170px;
}
.right{
  width: 800px;
  display: flex;
}

.center{
   position: relative;
  flex:1
}
.left img{
  width: 170px;
  height: 46px;
}

.center ul{
  display: flex;
  width: 450px; 
}
.center li {
  font-size: 18px;
  flex:1;
  width: 90px;
  height: 90px;
  text-align: center; 
  line-height: 90px;
}
.mark{
  position: absolute;
  left: 275px;
  top:30px
}
.mark img {
  width: 37px;
  height: 14px;
}
.el-input {
  width: 220px;
   height: 90px;
  line-height: 90px;
}
.el-icon-search{
  font-size: 20px;
  font-weight: 700;
  color:#999;
   height: 90px;
  line-height: 90px;
  padding: 0 5px;
  display: inline-block;
}
.select1{
  width: 120px;
  margin-right: 10px;
   height: 90px;
  line-height: 90px;
}
.select2{
  width: 80px;
   height: 90px;
  line-height: 90px;
  
}
.option1{
color:#000 !important;
font-weight: 400 !important;
}
.option1:hover { 
  background-color: #66c27c;
  color:#fff !important;
}
.login {
  display: inline-block;
  height: 90px;
  line-height: 90px;
  padding: 0 10px;
  font-size: 16px; 
}
.loginImgSrc{
  width: 40px;
  height: 40px;
  border-radius:50%;
  line-height: 40px;
}
.loginImgSrc img{
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius:50%
}

</style>

