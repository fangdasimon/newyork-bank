<template>
  <div class="login-text">
    <p>
      We do not recognize the computer you're using.
    </p>
    <p>
      For your protection, we need to send you an Authentication Code to further
      verify your identity. Please select how you would like to receive the
      Authentication Code and Click “Next” to send.
    </p>
    <p>
      Standard Camer Charges may apply if you select" Text “ option.
    </p>
    <div class="desc">
      <div class="box">
        <div class="img">
          <img src="../../assets/text.png" alt="text" />
        </div>
        <div class="text-content">
          <span class="text">Text</span>
          <el-radio v-model="radioPhone" label="1">xxx-xxx-8086</el-radio>
          <el-radio v-model="radioPhone" label="2">xxx-xxx-8087</el-radio>
        </div>
      </div>
      <div class="box">
        <div class="img">
          <img src="../../assets/email.png" alt="email" />
        </div>
        <div class="text-content">
          <span class="text">Email</span>
          <el-radio v-model="radioEmail" label="3">l…o@cloudcore.cn</el-radio>
        </div>
      </div>
    </div>
    <div class="text-wrapper">
      <el-button class="highlight" @click="goVerify">Next</el-button>
      <el-button>Back</el-button>
      <el-button>Exit</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioPhone: "1",
      radioEmail: "3"
    };
  },
  methods: {
    goVerify() {
      this.$router.push("/user/login-verify");
    }
  }
};
</script>

<style lang="scss">
.login-text {
  .el-radio__inner {
    width: 12px;
    height: 12px;
  }
}
</style>

<style lang="scss" scoped>
.login-text {
  // border: 1px solid red;
  width: 60%;
  // border: 1px solid red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  p {
    font-family: "Titillium_Web_Regular";
    font-size: 12px;
    color: #303133;
    text-align: justify;
    line-height: 13px;
    margin-bottom: 20px;
  }
  .desc {
    .box {
      // border: 1px solid red;
      margin-bottom: 10px;
      overflow: hidden;
      .img {
        float: left;
        // border: 1px solid red;
        width: 30px;
        height: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text-content {
        float: left;
        margin-left: 10px;
        line-height: 14px;
        span {
          display: block;
          margin-bottom: 8px;
        }
        .el-radio {
          font-size: 14px;
          display: block;
          margin-bottom: 8px;
        }
      }
    }
  }
  .text-wrapper {
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
