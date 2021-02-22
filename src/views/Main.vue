<template>
  <el-container class="el-container-one">
    <CommonAside> </CommonAside>
    <el-container class="el-container-two">
      <CommonHeader></CommonHeader>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from '../components/CommonHeader';
import CommonAside from '../components/CommonAside';
export default {
  name: 'Main',
  components: {
    CommonHeader,
    CommonAside
  }
};
</script>

<style lang="scss">
.el-container-one {
  /*background-color: #fff;*/
  height: 100%;
  .el-container-two {
    display: flex;
    flex-direction: column;
  }
  .el-header {
    padding: 0;
  }
  .el-main {
    color: #409eff;
    width: 100%;
  }
}
</style>
