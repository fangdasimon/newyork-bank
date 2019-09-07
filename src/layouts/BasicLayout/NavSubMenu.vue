<template functional>
  <el-submenu :index="props.menuInfo.index">
    <span slot="title">
      <i v-if="props.menuInfo.icon" class="props.menuInfo.icon"></i>
      <span>{{ props.menuInfo.title }}</span>
    </span>
    <template v-for="item in props.menuInfo.subs">
      <el-menu-item v-if="!item.subs" :index="item.index" :key="item.key">
        <i v-if="item.icon" class="item.icon"></i>
        <span>{{ item.title }}</span>
      </el-menu-item>
      <NavSubMenu
        v-else
        :menu-info="item"
        :index="item.index"
        :key="item.key"
      />
    </template>
  </el-submenu>
</template>

<script>
export default {
  props: ["menuInfo"]
};
</script>
