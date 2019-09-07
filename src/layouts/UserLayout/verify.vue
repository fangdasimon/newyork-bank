<template>
  <div class="login-verify">
    <div class="welcome">
      <div class="text">Welcome Phrase</div>
      <div class="phrash">Welcome back!</div>
      <div class="text">Welcome Image</div>
      <div class="image">
        <img src="../../assets/welcome.png" alt="welcome image" />
      </div>
    </div>
    <div class="form">
      <div class="auth-code">
        <div class="text">Authentication Code</div>
        <el-input></el-input>
      </div>
      <div class="login-pass">
        <div class="text">Login Password</div>
        <el-input></el-input>
      </div>
      <!-- <span class="refresh">Request a new code</span> -->
    </div>
    <div class="refresh">Request a new code</div>
    <div class="message">
      <el-checkbox v-model="register">
        Register this computer: Register this computer and skip security
        questions next time you sign in from this computer. We recommend that
        you only register computers that are private, like your home computer
      </el-checkbox>
    </div>
    <div class="verify-wrapper">
      <el-button class="highlight" @click="goWelcome">Confirm</el-button>
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
    goWelcome() {
      this.$router.push("/user/login-welcome");
    }
  }
};
</script>

<style lang="scss">
.login-verify {
  .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
  .el-checkbox,
  .el-checkbox__input {
    white-space: normal;
  }
  .el-checkbox__label {
    position: relative;
    top: -20px;
    padding-left: 20px;
  }
}
</style>

<style lang="scss" scoped>
.login-verify {
  // border: 1px solid red;
  width: 60%;
  // border: 1px solid red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  .form {
    display: flex;
    justify-content: space-between;
    .auth-code {
      width: 48%;
    }
    .login-pass {
      width: 48%;
    }
  }
  .refresh {
    font-family: "Titillium_Web_Regular";
    font-size: 12px;
    color: #005fc3;
    margin: 5px 0 20px;
    cursor: pointer;
  }
  .message {
    width: 100%;
    font-family: "Titillium_Web_Regular";
    font-size: 12px;
    color: #303133;
    letter-spacing: 0;
    line-height: 14px;
  }
  .verify-wrapper {
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
