<template>
  <el-aside width="200px" style="height: 100%">
    <div class="aside-title">这是标题栏</div>
    <h3>导航栏</h3>
  </el-aside>
</template>

<script>
export default {
  name: 'CommonAside'
};
</script>

<style lang="scss">
.el-aside {
  /*background-color: #fff;*/
  color: #333;
  text-align: center;
  box-shadow: #001529 2px 0 6px;
  .aside-title {
    padding-top: 20px;
    height: 60px;
    background-color: #409eff;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>
