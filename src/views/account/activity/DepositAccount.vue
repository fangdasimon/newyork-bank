<template>
  <div class="deposit-account">
    <Activity>
      <template v-slot:container-content>
        <div class="container">
          <div class="info">
            <div class="info-header clearfix">
              <div class="show left">
                <span class="name">SHOWING</span>
                <el-select v-model="value" placeholder="Things you can do">
                  <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <span class="transaction-search" @click="changeSearch"
                  >Transaction Search</span
                >
              </div>
              <div class="print right">
                <div class="bg-image print"></div>
                <div class="bg-image download"></div>
              </div>
            </div>
            <div class="transaction-wrapper">
              <transition name="fade-transform" mode="out-in">
                <div class="info-table" v-show="!showSearch">
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
                      <el-table-column prop="type" label="Type">
                      </el-table-column>
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
                  <div class="info-more">
                    <el-button size="mini">See more activity</el-button>
                  </div>
                </div>
              </transition>
              <transition name="fade-transform" mode="out-in">
                <div class="info-form" v-show="showSearch">
                  <el-form
                    :model="transactionForm"
                    status-icon
                    :rules="transactionRules"
                    ref="transactionForm"
                    label-width="100px"
                    class="demo-transactionForm"
                  >
                    <el-form-item label="Type" prop="type">
                      <el-select
                        v-model="transactionForm.type"
                        placeholder="All accounts"
                      >
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="Date" prop="date" class="date-form-item">
                      <div class="date-container">
                        <div class="clearfix">
                          <div class="half left">
                            <span class="demonstration">From</span>
                            <el-date-picker
                              v-model="transactionForm.dateStart"
                              type="date"
                              placeholder="mm/dd/yyyy"
                              value-format="MM/dd/yyyy"
                              prefix-icon=""
                              align="right"
                            >
                            </el-date-picker>
                          </div>
                          <div class="half right">
                            <span class="demonstration">To</span>
                            <el-date-picker
                              v-model="transactionForm.dateEnd"
                              type="date"
                              placeholder="mm/dd/yyyy"
                              value-format="MM/dd/yyyy"
                              align="right"
                            >
                            </el-date-picker>
                          </div>
                        </div>
                        <div class="botttom">
                          <p class="or">Or</p>
                          <el-select
                            v-model="transactionForm.dateTime"
                            placeholder="Choose a time period"
                          >
                            <el-option
                              label="区域一"
                              value="shanghai"
                            ></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                          </el-select>
                        </div>
                      </div>
                    </el-form-item>
                    <el-form-item
                      label="Refine"
                      prop="refine"
                      class="refine-form-item"
                    >
                      <el-radio-group v-model="transactionForm.refine">
                        <el-radio :label="3">Check number</el-radio>
                        <el-radio :label="6">Location ID</el-radio>
                      </el-radio-group>
                      <div class="input-container">
                        <div class="clearfix">
                          <div class="half left">
                            <span class="demonstration">From</span>
                            <el-input></el-input>
                          </div>
                          <div class="half right">
                            <span class="demonstration">To</span>
                            <el-input></el-input>
                          </div>
                        </div>
                      </div>
                    </el-form-item>
                    <el-form-item label="Amount" prop="amount">
                      <div class="amount-container">
                        <div class="clearfix">
                          <div class="half left">
                            <span class="demonstration">From</span>
                            <el-input slot="suffix">
                              <template slot="prepend">
                                <span>$</span>
                              </template>
                            </el-input>
                          </div>
                          <div class="half right">
                            <span class="demonstration">To</span>
                            <el-input>
                              <template slot="prepend">
                                <span>$</span>
                              </template>
                            </el-input>
                          </div>
                        </div>
                      </div>
                    </el-form-item>
                    <el-form-item>
                      <div class="clearfix">
                        <div class="half left">
                          <el-button
                            class="cancel"
                            type="primary"
                            @click="submitForm('transactionForm')"
                            >Cancel</el-button
                          >
                        </div>
                        <div class="half right">
                          <el-button
                            @click="resetForm('transactionForm')"
                            class="approve"
                            >Approve</el-button
                          >
                        </div>
                      </div>
                    </el-form-item>
                  </el-form>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </template>
    </Activity>
  </div>
</template>

<script>
import Activity from "./index";
export default {
  name: "DepositAccount",
  components: {
    Activity
  },
  data() {
    const item2 = {
      value: "All credit transactions",
      label: "All credit transactions"
    };
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
      options2: Array(5).fill(item2),
      tableData: Array(8).fill(itemTable),
      value: "",
      tableHeaderColor: {
        background: "#f5f5f5",
        color: "#303133",
        "font-family": "Titillium_Web_SemiBold"
      },
      transactionForm: {
        type: "",
        dateStart: "",
        dateEnd: "",
        dateTime: "",
        refine: 3,
        amount: ""
      },
      transactionRules: {},
      showSearch: false
    };
  },
  methods: {
    changeSearch() {
      this.showSearch = !this.showSearch;
    }
  },
};
</script>

<style lang="scss">
.deposit-account {
  .el-form-item__label {
    font-family: "Titillium_Web_SemiBold";
    color: #303133;
  }
}
</style>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.deposit-account {
  .container {
    .info {
      padding: 0 10px 10px;
      .info-header {
        padding: 10px 0;
        height: 30px;
        line-height: 30px;
        margin-bottom: 10px;
        // border: 1px solid red;
        .show {
          display: flex;
          justify-content: center;
          align-items: center;
          .name {
            font-family: "Titillium_Web_SemiBold";
            color: #303133;
          }
          .el-select {
            margin: 0 20px;
          }
          .transaction-search {
            font-size: 14px;
            font-family: "Titillium_Web_Regular";
            color: #005fc3;
            text-decoration: underline;
            cursor: pointer;
          }
        }
        .print {
          .bg-image {
            display: inline-block;
            width: 30px;
            height: 30px;
            vertical-align: middle;
            background-size: 30px 30px;
          }
          .print {
            @include bg-image("../../../assets/activity/print");
          }
          .download {
            margin-left: 15px;
            @include bg-image("../../../assets/activity/download");
          }
        }
      }
      .info-form {
        // border: 1px solid red;
        width: 60%;
        margin: 0 auto;
        .el-select {
          width: 100%;
        }
        .el-button {
          width: 100%;
          font-family: "Titillium_Web_SemiBold";
          border-color: transparent;
          &.cancel {
            background: #dcdfe6;
            color: #606266;
          }
          &.approve {
            background: #a71e32;
            color: #fff;
          }
        }
        .date-form-item {
          margin-bottom: 0px;
        }
        .refine-form-item {
          margin-bottom: 10px;
        }
        .date-container {
          line-height: 20px;
          position: relative;
          top: -16px;
        }
        .input-container,
        .amount-container {
          line-height: 20px;
        }
        .half {
          width: 48%;
        }
        .el-date-editor.el-input,
        .el-date-editor.el-input__inner {
          width: auto;
        }
      }
      .info-more {
        margin: 10px 0;
        .el-button {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          background: #f0f2f5;
          border-color: #f0f2f5;
        }
      }
    }
  }
}
</style>
