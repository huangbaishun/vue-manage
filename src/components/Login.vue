<template>
  <div class="login-view">
    <div class="login">
      <div class="title">后台管理系统</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="content" label-width="0px" >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="hbs123">
            <el-button slot="prepend" icon="el-icon-s-check"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" placeholder="hbs123" @keyup.enter.native="submitForm('ruleForm')">
            <el-button slot="prepend" icon="el-icon-lock"></el-button>
          </el-input>
        </el-form-item>
        <el-button type="primary" style="width: 100%" @click="submitForm('ruleForm')">登录</el-button>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        username: 'hbs123',
        password: 'hbs123'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(name){
      this.$refs[name].validate((valid) => {
        if (valid) {
          localStorage.setItem('username', this.ruleForm.username);
          this.$router.push('/');
        } else {
          alert('error submit!!');
          return false;
        }
      })
    }
  },
}
</script>
<style scoped>
  .login-view {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/login-bg.jpg');
    background-size: 100% 100%;
  }
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -190px 0 0 -175px;
    width: 350px;
    border: 1px solid #ccc;
    background: rgba(255,255,255, 0.3);
  }
  .login .content {
    padding: 30px;
  }
  .login .title {
    font-size: 20px;
    color: #fff;
    line-height: 50px;
    border: 1px solid #ddd;
    text-align: center;
  }
  .login-tips {
    font-size:12px;
    line-height:30px;
    color:green;
  }
</style>

