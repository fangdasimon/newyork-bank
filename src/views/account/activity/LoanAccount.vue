<template>
  <div class="loan-account">
    <Activity>
      <template v-slot:container-content>
        <div class="container">
          <div class="info">
            <div class="info-header clearfix">
              <div class="show left">
                <span class="name">SHOWING</span>
              </div>
              <div class="operator right">
                <div class="details">
                  <span>See all details</span>
                  <span class="divide">|</span>
                  <span>Hide all details</span>
                </div>
                <div class="bg-image print-icon"></div>
                <div class="bg-image download-icon"></div>
              </div>
            </div>
            <el-scrollbar class="my-scrollbar">
              <el-table
                :data="tableData"
                style="width: 100%"
                :header-cell-style="tableHeaderColor"
              >
                <el-table-column prop="date" label="Value Date">
                </el-table-column>
                <el-table-column prop="description" label="Desicription">
                </el-table-column>
                <el-table-column prop="type" label="Type"> </el-table-column>
                <el-table-column prop="number" label="Ref No.">
                </el-table-column>
                <el-table-column prop="check" label="Check No.">
                </el-table-column>
                <el-table-column prop="amount" label="Amount">
                </el-table-column>
                <el-table-column prop="balance" label="Balance">
                </el-table-column>
              </el-table>
            </el-scrollbar>
          </div>
        </div>
      </template>
    </Activity>
  </div>
</template>

<script>
import Activity from "./index";
export default {
  name: "LoanAccount",
  components: {
    Activity
  },
  data() {
    let itemTable = {
      date: "07/20/2019",
      description: "Deposit #239991",
      type: "ACH employee payment",
      number: "1234567890",
      check: "1234567890",
      amount: "$25,000.00",
      balance: "$25,000.00"
    };
    return {
      tableData: Array(8).fill(itemTable),
      tableHeaderColor: {
        background: "#f5f5f5",
        color: "#303133",
        "font-family": "Titillium_Web_SemiBold"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.loan-account {
  .container {
    .info {
      padding: 0 10px 10px;
      .info-header {
        padding: 10px 0;
        height: 30px;
        line-height: 30px;
        // margin-bottom: 10px;
        // border: 1px solid red;
        .show {
          display: flex;
          justify-content: center;
          align-items: center;
          .name {
            font-family: "Titillium_Web_SemiBold";
            color: #303133;
          }
        }
        .operator {
          div {
            float: left;
            &.details {
              font-size: 12px;
              font-weight: "Titillium_Web_Regular";
              color: #005fc3;
              margin-right: 10px;
              cursor: pointer;
              .divide {
                margin: 0 10px;
              }
            }
            &.bg-image {
              display: inline-block;
              width: 30px;
              height: 30px;
              vertical-align: middle;
              background-size: 30px 30px;
              margin-left: 15px;
              &.print-icon {
                @include bg-image("../../../assets/activity/print");
              }
              &.download-icon {
                @include bg-image("../../../assets/activity/download");
              }
            }
          }
        }
      }
    }
  }
}
</style>
