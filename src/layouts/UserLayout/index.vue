<template>
  <div class="user-layout">
    <div class="background">
      <div class="bg">
        <h4 class="title">NEW YORK BRANCH</h4>
      </div>
    </div>
    <div class="login-wrapper clearfix">
      <div class="img-wrapper">
        <div class="img">
          <img src="../../assets/logo.png" alt="Corporate logo" />
        </div>
        <img src="../../assets/building.png" alt="Corporate Bank" />
        <div class="words">
          <p>GOOD LIFE</p>
          <p>WISDOM FOR YOU</p>
        </div>
      </div>
      <div class="content">
        <h4 class="header">BOC(New York Branch) for CORPORATE</h4>
        <div class="container">
          <!-- <template slot="loginSlot"></template> -->
          <!-- <slot /> -->
          <router-view></router-view>
        </div>
        <div class="footer">
          <div class="copyright">
            <p>Copyright: Bank of China</p>
            <p>Disclaimer | Privacy Policy | Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.user-layout {
  // border: 1px solid red;
  .background {
    height: 100vh;
    background: #f5f5f5;
    .bg {
      width: 250px;
      height: 100%;
      background: #a71e32;
      .title {
        width: 128px;
        margin: 0;
        padding: 12px 0 0 17px;
        font-family: "Titillium_Web_Bold";
        font-size: 24px;
        color: rgba(255, 255, 255, 0.2);
        line-height: 32px;
      }
    }
  }
  .login-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    // width: 712px;
    width: 74%;
    transform: translate(-50%, -50%);
    // border: 1px solid blue;
    box-sizing: border-box;
    .img-wrapper {
      // width: 337px;
      // height: 450px;
      width: 45%;
      height: 500px;
      float: left;
      position: relative;
      .img {
        position: absolute;
        top: 10px;
        left: 20px;
        width: 200px;
        height: 40px;
        img {
          background-size: cover;
        }
      }
      img {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
      .words {
        position: absolute;
        bottom: 10px;
        left: 20px;
        line-height: 30px;
        opacity: 0.8;
        font-family: "Titillium_Web_Bold";
        font-size: 20px;
        color: #ffffff;
      }
    }
    .content {
      // width: 373px;
      // height: 450px;
      width: 55%;
      height: 500px;
      background: #ffffff;
      padding: 40px;
      box-sizing: border-box;
      float: left;
      position: relative;
      .header {
        text-align: center;
        font-family: "Titillium_Web_Bold";
        font-size: 16px;
        color: #a71e32;
        line-height: 17px;
      }
      .footer {
        position: absolute;
        width: 300px;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
        .copyright {
          margin: 0 auto;
          p {
            font-family: OpenSans;
            font-size: 12px;
            color: #303133;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
