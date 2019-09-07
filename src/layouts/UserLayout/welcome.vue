<template>
  <div class="welcome-verify">
    <div class="welcome">
      <div class="text">Welcome Phrase</div>
      <div class="phrash">Welcome back!</div>
      <div class="text">Welcome Image</div>
      <div class="image">
        <img src="../../assets/welcome.png" alt="welcome image" />
      </div>
    </div>
    <div class="message">
      If you do not recognize the personalized Welcome Phrase and Welcome Image,
      click EXIT to quit and contact the Bank immediately.
    </div>
    <div class="welcome-wrapper">
      <el-button class="highlight" @click="goAccount">Confirm</el-button>
      <el-button>Back</el-button>
      <el-button>Exit</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: false
    };
  },
  methods: {
    goAccount() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.welcome-verify {
  // border: 1px solid red;
  width: 60%;
  // border: 1px solid red;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  .text {
    font-family: "Titillium_Web_Regular";
    font-size: 12px;
    color: #303133;
    line-height: 26px;
  }
  .welcome {
    .phrash {
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding-left: 10px;
      box-sizing: border-box;
      background: #f1f1f1;
      font-family: "Titillium_Web_Regular";
      font-size: 12px;
      color: #0077f3;
      border-radius: 4px;
    }
    .image {
      width: 100px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .message {
    width: 100%;
    font-family: "Titillium_Web_Regular";
    font-size: 12px;
    color: #303133;
    letter-spacing: 0;
    line-height: 14px;
    margin: 10px 0 20px;
  }
  .welcome-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .el-button {
      width: 33%;
      padding: 10px 20px;
      font-size: 12px;
      &.highlight {
        background: #a71e32;
        color: #fff;
      }
    }
  }
}
</style>
