<template>
  <div style="height: 100%; width: 100%;background-color: #2d3a4b">
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
      <el-button type="primary" style="width: 100%" @click="submitForm" round>登录</el-button>
    </el-form>
  </div>
</template>

<script>
// import { postKeyValueRequest } from '../utils/api';
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
          this.postKeyValueRequest('doLogin', this.loginForm).then(resp => {
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
  height: 100%;
  border-radius: 15px;
  background-clip: padding-box;
  margin: 0 auto;
  width: 380px;
  background-color: #2d3a4b;
  position: relative;
  padding: 220px 35px 0;
}

.loginTitle {
  font-size: 26px;
  margin: 0 auto 40px auto;
  text-align: center;
  color: #eee;
  font-weight: 700;
}
</style>
