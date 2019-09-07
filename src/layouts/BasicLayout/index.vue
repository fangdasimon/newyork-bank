<template>
  <div :class="classObj" class="app-container">
    <div class="bg-color"></div>
    <div class="fix-width">
      <div class="background">
        <TopBar></TopBar>
      </div>
      <el-container>
        <el-container class="app-left">
          <el-header style="height: auto;">
            <p class="tips">
              <span>
                <span class="hello">Good morning! </span>
                <span class="msg">You have 05 pending approvals</span>
              </span>
              <i
                class="el-icon-s-fold icon"
                @click="toggleSidebar"
                v-if="device === 'mobile'"
              ></i>
            </p>
            <NavBar></NavBar>
          </el-header>
          <el-main>
            <AppMain></AppMain>
          </el-main>
        </el-container>
        <el-aside width="270px" :class="[sidebar.name ? '' : 'noSidebar']">
          <SideBar>
            <transition name="fade-transform" mode="out-in">
              <keep-alive>
                <component :is="sidebar.name"></component>
              </keep-alive>
            </transition>
          </SideBar>
        </el-aside>
      </el-container>
    </div>
  </div>
</template>

<script>
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import AppMain from "./AppMain";
import SideBar from "./SideBar";
import OverviewSide from "../../views/account/overview/OverviewSide";
import ActivitySide from "../../views/account/activity/ActivitySide";
import ResizeMixin from "./mixin/ResizeHandler";
import { mapState } from "vuex";
export default {
  mixins: [ResizeMixin],
  components: {
    TopBar,
    NavBar,
    AppMain,
    SideBar,
    OverviewSide,
    ActivitySide
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device
    }),
    classObj() {
      return {
        // 只有设备是mobile并且菜单是打开状态才隐藏
        hideSidebar: !this.sidebar.opened && this.device === "mobile"
      };
    }
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch("app/toggleSideBar");
    }
  }
};
</script>

<style lang="scss">
.hideSidebar {
  .el-aside {
    width: 0 !important;
  }
}
.el-aside {
  &.noSidebar {
    width: 0 !important;
  }
}
</style>

<style lang="scss" scoped>
.app-container {
  // border: 1px solid red;
  background: #f5f5f5;
  position: relative;
  z-index: 0;
  .bg-color {
    width: 100%;
    height: 300px;
    background: #a71e32;
    position: absolute;
    top: -20px;
    left: 0;
    z-index: -2;
  }
  .fix-width {
    // z-index: 9;
    width: 90%;
    margin: 0 auto;
    // position: relative;
    // top: 0;
    // left: 50%;
    // transform: translateX(-50%);
    .app-left {
      margin-right: 10px;
      .el-header {
        padding: 0;
      }
      .el-main {
        padding: 0;
      }
      .tips {
        line-height: 12px;
        margin: 10px 0;
        .hello {
          color: #fff;
          font-family: "Titillium_Web_Bold";
          font-size: 14px;
        }
        .msg {
          margin-left: 5px;
          color: #fff;
          opacity: 0.5;
          font-family: "Titillium_Web_Regular";
          font-size: 12px;
        }
        .icon {
          float: right;
          margin-right: 10px;
          font-size: 20px;
          cursor: pointer;
        }
      }
    }
    .el-aside {
      width: 270px;
      transition: width 0.28s;
    }
  }
}
</style>
