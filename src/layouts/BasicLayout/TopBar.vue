<template>
  <div class="topbar-wrapper clearfix">
    <div class="topbar-left">
      <div class="img-wrapper">
        <div class="img"></div>
      </div>
    </div>
    <div class="topbar-right">
      <div class="description">
        <span class="name">Amazon.com Inc.</span>
        <span class="time">Last signed in July 29,2019 at 6:38AM ET</span>
      </div>
      <div class="btn-wrapper">
        <el-button type="primary" size="mini">sign out</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.topbar-wrapper {
  // border: 1px solid red;
  height: 60px;
  line-height: 60px;
  margin: 20px 0;
  .topbar-left {
    float: left;
    display: flex;
    .img-wrapper {
      width: 374px;
      height: 60px;
      margin-right: 10px;
      .img {
        width: 374px;
        height: 60px;
        @include bg-image("../../assets/business_logo");
        background-size: 374px 60px;
      }
    }
  }
  .topbar-right {
    float: right;
    display: flex;
    align-items: center;
    .description {
      height: 40px;
      line-height: 40px;
      margin-right: 10px;
      text-align: right;
      span {
        display: block;
        height: 20px;
        line-height: 20px;
        &.name {
          color: #fff;
          font-family: "Titillium_Web_SemiBold";
          font-size: 14px;
        }
        &.time {
          color: #fff;
          opacity: 0.5;
          font-family: "Titillium_Web_Regular";
          font-size: 12px;
        }
      }
    }
    .btn-wrapper {
      .el-button {
        background: #fff;
        color: #a71e32;
        font-family: "Titillium_Web_Regular";
        font-size: 12px;
        border-color: #fff;
      }
    }
  }
}
</style>
