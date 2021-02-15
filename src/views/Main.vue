<template>
  <el-container>
    <CommonAside></CommonAside>
    <el-container>
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
.el-container {
  height: 100%;
  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
}
</style>
