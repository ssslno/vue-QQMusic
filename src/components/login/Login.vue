<!-- 登录弹框 -->
<template>
  <div id="login">
       <el-dialog
  :visible.sync="userFormdialogVisible"
  @close="userFormClose"
  width="30%"
  >
  <el-form :model="userForm"  :rules="userFormRules" ref="userFormRef" label-width="100px" class="demo-ruleForm">
      <el-form-item  prop="phone">
    <el-input placeholder="请输入手机号码" v-model="userForm.phone"></el-input>
  </el-form-item>
  <el-form-item prop="password">
    <el-input type="password" placeholder="请输入密码" v-model="userForm.password" autocomplete="off"></el-input>
  </el-form-item>
  </el-form>
    <el-button type="primary" @click="userLogin">提交</el-button>
     <el-button @click="addCatDialogVisible = false">取 消</el-button>
</el-dialog>
  </div>
</template>

<script>
import {getLogin} from '@/network/login'


export default {
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
        }
    }
  },
  created(){
    
  },
  methods:{
      userFormClose(){
        //  this.$refs.userFormRef.resetFields()
         this.userFormdialogVisible = !this.userFormdialogVisible
      },
     userLogin(){
          this.$refs.userFormRef.validate(async item => {
          if(!item) return
          getLogin({
              phone:this.userForm.phone,
              password:this.userForm.password
          }).then(res=>{
            //   if(res.name && res.name==='Error'){
            //        return this.$message.error('登录失败')
            //   }
              
            //   if(res.code!==200) return this.$message.error(res.msg) 
            //   this.$message.success('登录成功')
            //   console.log(res);
            console.log(res);
          })
        });
     } 
    
      }
  }

</script>

<style scoped>

/* .login{
    width: 700px;
    height: 470px;
    background-color: #fff;
    margin: 0 auto;
    z-index:999;
    position: relative; 
    box-shadow: 0 0 10px #999;
}
.header {
    width: 700px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    display: flex;  
    border-bottom: 1px solid #f2f2f2;
}
.header a:nth-child(1) {
 margin-left: 220px;
 margin-right: 116px;
 color:#66c272
} */


</style>
