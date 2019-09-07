<template>
  <div class="account-activity">
    <div class="header">
      <div class="top clearfix">
        <div class="left">
          <p class="type">DEMAND DEPOST</p>
          <p class="number">
            <span class="phone">1387898766</span>
            <el-popover placement="bottom-start" width="200" v-model="visible">
              <div class="popover-content">
                <div class="left">
                  <p>Account Number</p>
                  <p>7913 1380 1389 8923</p>
                </div>
                <div class="right">
                  <i class="el-icon-close" @click="visible = false"></i>
                </div>
              </div>
              <span slot="reference" class="see-all"
                >see full account number</span
              >
            </el-popover>
          </p>
        </div>
        <div class="right header-search">
          <el-select v-model="value" placeholder="Things you can do">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="content clearfix">
        <div class="box" v-for="o in 7" :key="o">
          <span class="name">Book balance</span>
          <span class="price">$25,000.00</span>
        </div>
      </div>
      <div class="bottom">
        <el-button>Statements</el-button>
        <el-button>Paperless</el-button>
        <el-button>Transfer money</el-button>
      </div>
    </div>
    <template>
      <slot name="container-content"></slot>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      value: "Check statements",
      label: "Check statements"
    };
    return {
      options: Array(5).fill(item),
      visible: false
    };
  }
};
</script>

<style lang="scss" scoped>
.account-activity {
  // border: 1px solid #e4e7ed;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  padding-bottom: 0;
  .header {
    .top {
      padding-bottom: 10px;
      // border: 1px solid red;
      .left {
        color: #303133;
        .type {
          font-family: "Titillium_Web_SemiBold";
          line-height: 14px;
          padding: 10px 0;
        }
        .number {
          font-family: "Titillium_Web_Regular";
          line-height: 12px;
          font-size: 12px;
          .popover-content {
            padding: 10px;
          }
          .see-all {
            color: #005fc3;
            margin-left: 10px;
          }
        }
      }
    }
    .content {
      margin: 10px 0;
      .box {
        width: 20%;
        float: left;
        span {
          display: block;
          text-align: left;
          &.name {
            color: #303133;
            font-family: "Titillium_Web_Regular";
          }
          &.price {
            font-family: "Titillium_Web_SemiBold";
            color: #a71e32;
            padding: 5px 0 10px 0;
            font-size: 14px;
            font-weight: 600;
          }
        }
      }
    }
    .bottom {
      border-bottom: 1px solid #f0f2f5;
      .el-button {
        background: #f0f2f5;
        border-color: #f0f2f5;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
