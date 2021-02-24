<template>
  <el-aside :width="isCollapse ? '60px' : '200px'" style="height: 100%">
    <div class="aside-title">{{ systemName }}</div>
    <el-menu router :collapse="isCollapse">
      <el-submenu :index="index + ''" v-for="(item, index) in routes" :key="index">
        <template slot="title">
          <div></div>
          <i style="margin-right: 5px;color: #409eff" :class="item.iconCls"></i>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item :index="child.path" v-for="(child, indexj) in item.children" :key="indexj">
          <i style="margin-right: 5px;color: #409eff" :class="child.iconCls"></i>
          {{ child.name }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'CommonAside',
  data() {
    return {
      routesTest: []
    };
  },
  computed: {
    routes() {
      return this.$store.state.routes.filter(r => {
        return !r.hidden;
      });
    },
    isCollapse() {
      return this.$store.state.isCollapse;
    },
    systemName() {
      return this.$store.state.isCollapse ? 'SYS' : '一个未命名的系统';
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
