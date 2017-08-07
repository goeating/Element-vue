<template>
  <el-form ref="form" :model="form" :rules="rules" class="login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input v-model="form.account" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox-group v-model="form.remember">
        <el-checkbox label="记住密码" name="remember"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="isLogin" @click="onSubmit" class="login-btn">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      form: {
        account: '',
        password: '',
        remember: true
      },
      rules: {
        account: [
          {
            required: true,
            message: '请输入账号！',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码！',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.isLogin = true
          this.$router.push('/index')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  width: 350px;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #D3DCE6;
  box-shadow: 0 0 25px #C0CCDA;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #8492A6;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
