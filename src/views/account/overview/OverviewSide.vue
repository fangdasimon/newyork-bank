<template>
  <div class="overview-side">
    <div class="card">
      <div class="header">
        <p class="title">
          <span class="pending">Pending Approvals</span>
          <span class="time">09/25/2019</span>
        </p>
      </div>
      <div class="tab">
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="Pending Authorization" name="first">
            <ul class="tablist clearfix">
              <li>
                <div class="left">
                  <span class="name">Wire transfer</span>
                  <span class="msg">2 approval(s) due today</span>
                </div>
                <div class="right count">3</div>
              </li>
              <li>
                <div class="left">
                  <span class="name">ACH Collections</span>
                </div>
                <div class="right count">2</div>
              </li>
              <li>
                <div class="left">
                  <span class="name">ACH payment services</span>
                </div>
                <div class="right count">0</div>
              </li>
              <li>
                <div class="left">
                  <span class="name">Bill pay</span>
                </div>
                <div class="right count">0</div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="Pending Revision" name="second"
            >配置管理</el-tab-pane
          >
        </el-tabs>
      </div>
    </div>
    <div class="card activity">
      <div class="header">
        <p class="title">
          <span class="pending">Activity Center</span>
        </p>
      </div>
      <div class="nav">
        <ul class="navlist clearfix">
          <li class="alerts">
            <div class="img alerts"></div>
            <span>Alerts</span>
          </li>
          <li class="activity">
            <div class="img activity"></div>
            <span>Account Activity</span>
          </li>
          <li class="transfer">
            <div class="img transfer"></div>
            <span>Transfer</span>
          </li>
          <li class="wire">
            <div class="img wire"></div>
            <span>Wire</span>
          </li>
          <li class="message">
            <div class="img message"></div>
            <span>Message</span>
          </li>
          <li class="exchange">
            <div class="img exchange"></div>
            <span>RMB exchange</span>
          </li>
          <li class="statement">
            <div class="img statement"></div>
            <span>statement</span>
          </li>
          <li class="bill">
            <div class="img bill"></div>
            <span>Bill Pay</span>
          </li>
          <li class="find">
            <div class="img find"></div>
            <span>Find us</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  }
};
</script>

<style lang="scss">
.overview-side {
  .el-card__body {
    padding: 0;
  }
  .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border-radius: 0;
  }
  .el-tabs--card > .el-tabs__header .el-tabs__item:last-child {
    padding: 0;
  }
  .el-tabs__content {
    padding-left: 10px;
  }
  .el-tabs__header {
    margin-bottom: 0px;
  }
  .el-tabs__nav {
    width: 100%;
    .el-tabs__item {
      width: 50%;
      font-size: 12px;
      padding: 0;
      text-align: center;
      color: #303133;
      font-family: "Titillium_Web_SemiBold";
    }
  }
}
</style>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.overview-side {
  // border: 1px solid red;
  .card {
    background: #fff;
    // border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-bottom: 20px;
    .header {
      height: 30px;
      line-height: 30px;
      padding: 5px 10px;
      .title {
        font-size: 14px;
        font-family: "Titillium_Web_Regular";
        color: #303133;
        .time {
          font-size: 12px;
          color: #909399;
          margin-left: 5px;
        }
      }
    }
    .tab {
      li {
        overflow: hidden;
        padding: 10px;
        border-bottom: 1px solid #e5e8eb;
        .left {
          font-size: 12px;
          font-family: "Titillium_Web_Regular";
          color: #303133;
          .msg {
            color: #a71e32;
            display: block;
          }
        }
        .count {
          font-family: "Titillium_Web_SemiBold";
          color: #a71e32;
        }
      }
      li:last-child {
        border: none;
      }
    }
    .nav {
      border-top: 1px solid #e4e7ed;
      li {
        float: left;
        width: 33.3%;
        padding: 10px 0;
        text-align: center;
        box-sizing: border-box;
        &:hover {
          cursor: pointer;
          background: #a71e32;
          span {
            color: #fff;
          }
        }
        &.alerts:hover {
          .img {
            @include bg-image("../../../assets/nav/alerts_checked");
          }
        }
        &.activity:hover {
          .img {
            @include bg-image("../../../assets/nav/account_activity_checked");
          }
        }
        &.transfer:hover {
          .img {
            @include bg-image("../../../assets/nav/transfer_checked");
          }
        }
        &.wire:hover {
          .img {
            @include bg-image("../../../assets/nav/wire_checked");
          }
        }
        &.message:hover {
          .img {
            @include bg-image("../../../assets/nav/message_checked");
          }
        }
        &.exchange:hover {
          .img {
            @include bg-image("../../../assets/nav/RMB_exchange_checked");
          }
        }
        &.statement:hover {
          .img {
            @include bg-image("../../../assets/nav/statement_checked");
          }
        }
        &.bill:hover {
          .img {
            @include bg-image("../../../assets/nav/bill_pay_checked");
          }
        }
        &.find:hover {
          .img {
            @include bg-image("../../../assets/nav/find_us_checked");
          }
        }
        .img {
          width: 38px;
          height: 38px;
          margin: 0 auto;
          background-size: 38px 38px;
          &.alerts {
            @include bg-image("../../../assets/nav/alerts");
          }
          &.activity {
            @include bg-image("../../../assets/nav/account_activity");
          }
          &.transfer {
            @include bg-image("../../../assets/nav/transfer");
          }
          &.wire {
            @include bg-image("../../../assets/nav/wire");
          }
          &.message {
            @include bg-image("../../../assets/nav/message");
          }
          &.exchange {
            @include bg-image("../../../assets/nav/RMB_exchange");
          }
          &.statement {
            @include bg-image("../../../assets/nav/statement");
          }
          &.bill {
            @include bg-image("../../../assets/nav/bill_pay");
          }
          &.find {
            @include bg-image("../../../assets/nav/find_us");
          }
        }
        span {
          font-size: 12px;
          font-family: "Titillium_Web_Regular";
          color: #606266;
        }
      }
    }
  }
}
</style>
