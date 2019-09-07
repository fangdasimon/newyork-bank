<template>
  <div class="menu-wrapper">
    <el-menu
      mode="horizontal"
      class="el-menu-demo"
      :default-active="onRoute"
      active-text-color="#409EFF"
      router
    >
      <template v-for="item in menuData">
        <template v-if="!item.subs">
          <el-menu-item :index="item.index" :key="item.index">
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
        <!-- 抽离出sub-menu进行无限递归菜单 -->
        <template v-else>
          <NavSubMenu
            :menuInfo="item"
            :index="item.index"
            :key="item.index"
          ></NavSubMenu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import NavSubMenu from "./NavSubMenu.vue";

export default {
  props: {
    menuData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    NavSubMenu
  },
  computed: {
    onRoute() {
      return this.$route.path;
    }
  }
};
</script>

<style lang="scss">
.menu-wrapper {
  .el-menu--horizontal > .el-menu-item {
    border: none !important;
    height: 40px;
    line-height: 40px;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    color: #a71e32 !important;
  }
  .el-menu-item:first-child {
    padding-left: 0px;
  }
  .el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 40px;
    line-height: 40px;
  }
  .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    border: none;
  }
}
</style>
