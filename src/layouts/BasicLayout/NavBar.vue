<template>
  <div class="navbar-wrapper">
    <el-tabs v-if="tabMapRoute" v-model="activeName">
      <el-tab-pane
        v-for="(value, title) in tabMapRoute"
        :name="title"
        :key="title"
      >
        <span slot="label">
          <template v-for="item in value">
            <i
              v-if="item.icon"
              class="icon"
              :class="item.icon"
              :key="item.id"
            ></i>
          </template>
          {{ title }}
        </span>
        <NavMenu :menuData="value"></NavMenu>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue";
export default {
  data() {
    return {
      activeName: "Account",
      tabs: [],
      tabsIcon: [],
      routeData: [],
      tabMapRoute: {}
    };
  },
  components: {
    NavMenu
  },
  mounted() {
    this.handleTabData();
  },
  methods: {
    getFirstMenu(menu) {
      if (menu.meta && menu.meta.title) {
        this.tabs.push([menu.meta.title, menu.meta.icon]);
      }
    },
    getDeepMenu(menu) {
      let items = [];
      if (menu.children) {
        menu.children.forEach(item => {
          if (item.path && item.meta && item.meta.title) {
            let obj = {
              index: item.path,
              title: item.meta.title
            };
            if (item.children) {
              obj.subs = this.getDeepMenu(item);
            }
            items.push(obj);
          }
        });
      }
      return items;
    },
    getMenuData(routes) {
      const routeData = [];

      for (let menu of routes) {
        let items = [];
        if (menu.hideInMenu) {
          continue;
        }
        this.getFirstMenu(menu);
        items = this.getDeepMenu(menu);
        routeData.push(items);
      }
      this.routeData = routeData;
    },
    handleTabData() {
      // 关联每一个Tab对应的菜单数据
      for (let i = 0; i < this.routeData.length; i++) {
        let item = this.routeData[i];
        item = this.tabs[i][1] ? [...item, { icon: this.tabs[i][1] }] : item;
        this.$set(this.tabMapRoute, this.tabs[i][0], item);
      }
      console.log("tabMapRoute 2", this.tabMapRoute);
    }
  },
  created() {
    const menuData = this.$router.options.routes;
    this.getMenuData(menuData);
  }
};
</script>

<style lang="scss">
// 可以抽离出不用全局的scss
@import "~@/styles/mixin.scss";
.navbar-wrapper {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  .icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    vertical-align: middle;
    background-size: 40px 40px;
  }
  .account {
    @include bg-image("../../assets/account");
  }
  .bill {
    @include bg-image("../../assets/bill");
  }
  .transfer {
    @include bg-image("../../assets/transfer");
  }
  .profile {
    @include bg-image("../../assets/profile");
  }
  .el-tabs__item.is-active {
    .account {
      @include bg-image("../../assets/account_checked");
    }
    .bill {
      @include bg-image("../../assets/bill_checked");
    }
    .transfer {
      @include bg-image("../../assets/transfer_checked");
    }
    .profile {
      @include bg-image("../../assets/profile_checked");
    }
  }
  .el-tabs {
    padding-left: 20px;
    background: #fff;
    border-radius: 5px;
  }
  .el-tabs__nav {
    // padding-left: 20px;
    // transform: translateX(20px) !important;
    .el-tabs__item {
      height: 60px;
      line-height: 60px;
    }
    .el-tabs__item.is-active,
    .el-tabs__item:hover {
      color: #a71e32;
    }
    .el-tabs__active-bar {
      background: #a71e32;
    }
  }
  .el-tabs__header {
    margin: 0;
    background: #fff;
    border-radius: 5px 5px 0 0;
    .el-tabs__nav-next,
    .el-tabs__nav-prev {
      line-height: 60px;
    }
  }
  .el-tabs__content {
    border-radius: 0 0 5px 5px;
  }
}
</style>
