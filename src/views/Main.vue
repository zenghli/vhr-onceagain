<template>
  <el-container>
    <div>
      <div class="aside-title">这是标题栏</div>
      <CommonAside></CommonAside>
    </div>
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
  .aside-title {
    height: 60px;
    background-color: #2d3a4b;
  }
  height: 100%;
  .el-header {
    padding: 0;
  }
  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
}
</style>
