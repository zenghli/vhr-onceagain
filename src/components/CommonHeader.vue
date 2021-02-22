<template>
  <el-header>
    <div class="title">
      <span style="margin-left: 10px">
        <i class="el-icon-menu"></i>
      </span>
    </div>

    <div>
      <el-dropdown @command="commandHandler" class="userInfo">
        <span class="el-dropdown-link username">{{ user.name }}<el-avatar style="margin-left: 10px" size="medium" :src="user.userface"></el-avatar> </span>
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
  name: 'CommonHeader',
  data() {
    return {
      user: JSON.parse(window.sessionStorage.getItem('user'))
    };
  },
  methods: {
    commandHandler(cmd) {
      if (cmd === 'logout') {
        this.$confirm('此操作将注销登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        })
          .then(() => {
            this.getRequest('/logout');
            window.sessionStorage.removeItem('user');
            this.$router.replace('/');
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消注销操作'
            });
          });
      }
    }
  }
};
</script>

<style lang="scss">
.el-header {
  margin-left: 3px;
  .title span {
    margin: 0 10px;
    .el-icon-menu {
      margin-right: 10px;
    }
  }
  width: 100%;
  background-color: #409eff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-dropdown-link {
    color: #fff;
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
}
</style>
