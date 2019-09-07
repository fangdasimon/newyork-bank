<template>
  <div class="activity-side">
    <div class="header">
      <el-select v-model="value" placeholder="ALL accounts">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="card-container">
      <el-card shadow="never">
        <div slot="header" @click="depositSideShow = !depositSideShow">
          <p>
            <i
              :class="[
                depositSideShow ? 'el-icon-caret-bottom' : 'el-icon-caret-right'
              ]"
            ></i>
            <span class="name">Deposit Accounts</span>
            <span class="count">(8)</span>
          </p>
        </div>
        <el-collapse-transition>
          <div v-show="depositSideShow">
            <div class="box">
              <h4 class="title">
                <span class="name">USD</span><span class="number">(6)</span>
              </h4>
              <ul class="list">
                <li class="item clearfix" v-for="o in 6" :key="o">
                  <div class="left">
                    <p class="type">Checking</p>
                    <p class="phone">*******9030</p>
                  </div>
                  <div class="right">
                    <p class="avaliable-money">$1,000.00</p>
                    <p class="avaliable">Avaliable Balance</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="box">
              <h4 class="title">
                <span class="name">RMB</span><span class="number">(2)</span>
              </h4>
              <ul class="list">
                <li class="item clearfix" v-for="o in 2" :key="o">
                  <div class="left">
                    <p class="type">Checking</p>
                    <p class="phone">*******9030</p>
                  </div>
                  <div class="right">
                    <p class="avaliable-money">$1,000.00</p>
                    <p class="avaliable">Avaliable Balance</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-collapse-transition>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      value: "选项",
      label: "黄金糕"
    };
    return {
      value: "",
      options: Array(5).fill(item),
      depositSideShow: true
    };
  }
};
</script>

<style lang="scss">
.activity-side {
  .el-card {
    margin-bottom: 10px;
  }
  .el-card__header {
    padding: 12px 20px;
    color: #303133;
    font-family: "Titillium_Web_Regular";
  }
  .el-card__body {
    padding: 0 10px;
  }
}
</style>

<style lang="scss" scoped>
.activity-side {
  border-radius: 5px;
  background: #fff;
  .header {
    padding: 10px;
    .el-select {
      width: 100%;
    }
  }
  .box {
    .title {
      color: #303133;
      font-family: "Titillium_Web_Regular";
      font-size: 12px;
      margin: 15px 0;
    }
    .list {
      .item {
        border: 1px solid #e4e7ed;
        padding: 15px 5px;
        margin-bottom: 10px;
        font-family: "Titillium_Web_Regular";
        font-size: 12px;
        border-radius: 5px;
        background: #fff;
        .type {
          font-size: 13px;
          margin-bottom: 10px;
          color: #606266;
        }
        .phone {
          color: #303133;
        }
        .right {
          margin-top: 10px;
          text-align: right;
          color: #606266;
          .avaliable-money {
            font-family: "Titillium_Web_SemiBold";
            font-size: 14px;
            margin-bottom: 0px;
            color: #303133;
          }
        }
      }
      // .item:last-child {
      //   margin-bottom: 0;
      // }
      .item:hover {
        cursor: pointer;
        background: #a71e32;
        .avaliable-money {
          color: #fff;
        }
        p {
          color: #fff;
        }
      }
    }
  }
}
</style>
