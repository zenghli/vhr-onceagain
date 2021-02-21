<template>
  <el-container>
    <CommonAside></CommonAside>
    <el-container class="right">
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
  .right {
    display: flex;
    flex-direction: column;
    .el-main {
      padding: 0;
      background-color: white;
      color: #333;
    }
  }
}
</style>
