<template>
  <el-header>
    <div class="title">
      <span style="margin-left: 20px">
        <i class="el-icon-apple"></i>
        办公管理系统
      </span>
    </div>

    <div>
      <el-dropdown class="userInfo">
        <span class="el-dropdown-link username"> 曾宏亮<el-avatar style="margin-left: 10px" size="medium"></el-avatar> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userinfo">个人中心</el-dropdown-item>
          <el-dropdown-item command="setting">设置</el-dropdown-item>
          <el-dropdown-item divided command="logout">注销登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'CommonHeader'
};
</script>

<style lang="scss">
.el-header {
  padding-left: 0;
  width: 100%;
  padding-left: 0;
  background-color: #eeeeee;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-dropdown-link {
    color: #eeeeee;
    display: flex;
    align-items: center;
  }
}
</style>
