<template>
  <div>
    <el-form
      v-loading="loading"
      element-loading-text="网速不给力啊，还在登陆，请稍后片刻！"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      ref="loginForm"
      :rules="rules"
      :model="loginForm"
      class="loginContainer"
    >
      <h3 class="loginTitle">系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" auto-complete="false" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="false" placeholder="请输入密码" @keydown.enter.native="submitForm"></el-input>
      </el-form-item>
      <el-checkbox class="loginRemember" v-model="checked">记住密码</el-checkbox>
      <el-button type="primary" style="width: 100%" @click="submitForm" round>登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { postKeyValueRequest } from '../utils/api';

export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      loginForm: {
        username: 'lcf',
        password: '123'
      },
      checked: true,
      rules: {
        username: [{ required: true, message: '用户名还未输入', trigger: 'blur' }],
        password: [{ required: true, message: '密码还未输入', trigger: 'blur' }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          postKeyValueRequest('doLogin', this.loginForm).then(resp => {
            this.loading = false;
            if (resp) {
              // console.log(resp);
              window.sessionStorage.setItem('user', JSON.stringify(resp.object));
              this.$router.replace('/home');
              // let path = this.$route.query.redirect;
              // this.$router.replace(path === '/' || path === undefined ? '/home' : path);
            }
          });
          // alert('submit!');
        } else {
          this.$message.error('错了哦，请输入所有字段');
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: whitesmoke;
  border: 1px solid #151414;
  box-shadow: 0 0 25px #151414;
}

.loginTitle {
  margin: 0 auto 40px auto;
  text-align: center;
  color: #151414;
}

.loginRemember {
  margin: 0 0 15px 0;
  text-align: left;
}
</style>
