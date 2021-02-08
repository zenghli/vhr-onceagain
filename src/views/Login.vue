<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
      <h3>系统登录</h3>
      <div>
        <el-form-item label="用户名" prop="username">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
      </div>
      <div>密码</div>
      <div>确认和取消</div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      }
    };
  }
};
</script>

<style lang="scss"></style>
