<template>
  <el-aside width="200px" style="height: 100%">
    <div class="aside-title">这是标题栏</div>
    <el-menu router>
      <el-submenu index="1" v-for="(item, index) in routes" :key="index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item :index="child.path" v-for="(child, indexj) in item.children" :key="indexj">{{ child.name }}</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'CommonAside',
  computed: {
    routes: function() {
      return this.$router.options.routes.filter(function(route) {
        return !route.hidden;
      });
    }
  }
};
</script>

<style lang="scss">
.el-aside {
  /*background-color: #fff;*/
  color: #333;
  /*text-align: center;*/
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
