<template>
  <el-aside width="200px" style="height: 100%">
    <el-menu background-color="#545c64" class="el-menu-vertical-demo">
      <el-submenu :index="item.path" v-for="item in hasChildren" :key="item.path">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="subItem.path" v-for="(subItem, index) in item.children" :key="index">{{ subItem.label }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'CommonAside',
  computed: {
    noChildren() {
      return this.asideMenu.filter(item => !item.children);
    },
    hasChildren() {
      return this.asideMenu.filter(item => item.children);
    }
  },
  data() {
    return {
      asideMenu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home'
        },
        {
          path: '/echarts',
          name: 'echarts',
          label: 'echarts',
          icon: 'video-play'
        },
        {
          path: '/others',
          name: 'others',
          label: '其他',
          icon: 'eleme',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting'
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  .el-menu-item-group__title {
    padding: 0;
  }
}
</style>
