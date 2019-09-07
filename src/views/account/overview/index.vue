<template>
  <div class="overview-wrapper">
    <el-card class="deposit-card">
      <div slot="header" @click="depositAccountShow = !depositAccountShow">
        <i
          :class="[
            depositAccountShow ? 'el-icon-caret-bottom' : 'el-icon-caret-right'
          ]"
        ></i>
        <span class="header-title">Deposit Accounts</span>
      </div>
      <div class="content">
        <el-collapse-transition>
          <div v-show="depositAccountShow">
            <div class="box">
              <div class="account-type">USD</div>
              <BaseTable
                class="deposit-table"
                :tableData="USDNormalAccount"
                :getSummaries="USDSummaries"
              >
                <template v-slot:table>
                  <el-table-column
                    prop="type"
                    label="Account Type"
                  ></el-table-column>
                  <el-table-column prop="number" label="Account Number">
                    <template slot-scope="scope">
                      <span class="account-number">{{
                        scope.row.number | hidePartNumer(0, 4)
                      }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="currency"
                    label="Currency"
                  ></el-table-column>
                  <el-table-column prop="bookblance" label="Book Blance">
                    <template slot-scope="scope">
                      <span>${{ scope.row.bookblance }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="avaliableblance"
                    label="Avaliable Blance"
                  >
                    <template slot-scope="scope">
                      <span>${{ scope.row.avaliableblance }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="100px">
                    <template slot-scope="scope">
                      <el-dropdown>
                        <span class="el-dropdown-link">
                          Transfer<i
                            class="el-icon-arrow-down el-icon--right"
                          ></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item
                            >黄金糕${{ scope.index }}</el-dropdown-item
                          >
                          <el-dropdown-item>狮子头</el-dropdown-item>
                          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </template>
                  </el-table-column>
                </template>
              </BaseTable>
              <BaseTable
                class="deposit-table"
                :tableData="USDCDAccount"
                :getSummaries="CDSummaries"
              >
                <template v-slot:table>
                  <el-table-column
                    prop="type"
                    label="Account Type"
                    width="100px"
                  ></el-table-column>
                  <el-table-column prop="number" label="CD No." width="120px">
                    <template slot-scope="scope">
                      <span class="account-number">{{
                        scope.row.number | hidePartNumer(0, 4)
                      }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="currency"
                    label="Currency"
                    width="80px"
                  ></el-table-column>
                  <el-table-column prop="valdate" label="Value date">
                  </el-table-column>
                  <el-table-column prop="matdate" label="Mat date">
                  </el-table-column>
                  <el-table-column
                    prop="rate"
                    label="Rate(%)"
                    width="80px"
                  ></el-table-column>
                  <el-table-column prop="principal" label="Principal">
                    <template slot-scope="scope">
                      <span>${{ scope.row.principal }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="apy"
                    label="APY"
                    width="60px"
                  ></el-table-column>
                  <el-table-column
                    prop="term"
                    label="Term"
                    width="60px"
                  ></el-table-column>
                </template>
              </BaseTable>
            </div>
            <div class="box">
              <div class="account-type">RMB</div>
              <BaseTable
                class="deposit-table"
                :tableData="RMBNormalAccount"
                :getSummaries="USDSummaries"
              >
                <template v-slot:table>
                  <el-table-column
                    prop="type"
                    label="Account Type"
                  ></el-table-column>
                  <el-table-column prop="number" label="Account Number">
                    <template slot-scope="scope">
                      <span class="account-number">{{
                        scope.row.number | hidePartNumer(0, 4)
                      }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="currency"
                    label="Currency"
                  ></el-table-column>
                  <el-table-column prop="bookblance" label="Book Blance">
                    <template slot-scope="scope">
                      <span>${{ scope.row.bookblance }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="avaliableblance"
                    label="Avaliable Blance"
                  >
                    <template slot-scope="scope">
                      <span>${{ scope.row.avaliableblance }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="100px">
                    <template slot-scope="scope">
                      <el-dropdown>
                        <span class="el-dropdown-link">
                          Transfer<i
                            class="el-icon-arrow-down el-icon--right"
                          ></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item
                            >黄金糕${{ scope.index }}</el-dropdown-item
                          >
                          <el-dropdown-item>狮子头</el-dropdown-item>
                          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </template>
                  </el-table-column>
                </template>
              </BaseTable>
              <BaseTable
                class="deposit-table"
                :tableData="RMBCDAccount"
                :getSummaries="CDSummaries"
              >
                <template v-slot:table>
                  <el-table-column
                    prop="type"
                    label="Account Type"
                    width="100px"
                  ></el-table-column>
                  <el-table-column prop="number" label="CD No." width="120px">
                    <template slot-scope="scope">
                      <span class="account-number">{{
                        scope.row.number | hidePartNumer(0, 4)
                      }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="currency"
                    label="Currency"
                    width="80px"
                  ></el-table-column>
                  <el-table-column prop="valdate" label="Value date">
                  </el-table-column>
                  <el-table-column prop="matdate" label="Mat date">
                  </el-table-column>
                  <el-table-column
                    prop="rate"
                    label="Rate(%)"
                    width="80px"
                  ></el-table-column>
                  <el-table-column prop="principal" label="Principal">
                    <template slot-scope="scope">
                      <span>${{ scope.row.principal }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="apy"
                    label="APY"
                    width="60px"
                  ></el-table-column>
                  <el-table-column
                    prop="term"
                    label="Term"
                    width="60px"
                  ></el-table-column>
                </template>
              </BaseTable>
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </el-card>
    <el-card class="Loan-card">
      <div slot="header" @click="LoanAccountShow = !LoanAccountShow">
        <i
          :class="[
            LoanAccountShow ? 'el-icon-caret-bottom' : 'el-icon-caret-right'
          ]"
        ></i>
        <span class="header-title">Loan Accounts</span>
      </div>
      <div class="content">
        <el-collapse-transition>
          <div v-show="LoanAccountShow">
            <div class="box">
              <div class="account-type">USD</div>
              <BaseTable
                class="deposit-table"
                :tableData="loanAccount"
                :getSummaries="LoanSummaries"
              >
                <template v-slot:table>
                  <el-table-column
                    prop="type"
                    label="Loan Type"
                    width="120px"
                  ></el-table-column>
                  <el-table-column
                    prop="number"
                    label="LD/MG Ref Nos"
                    width="120px"
                  >
                    <template slot-scope="scope">
                      <span class="account-number">{{
                        scope.row.number | hidePartNumer(2, 4)
                      }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="currency"
                    label="Currency"
                    width="80px"
                  ></el-table-column>
                  <el-table-column prop="bal" label="O/S Bal">
                    <template slot-scope="scope">
                      <span>${{ scope.row.bal }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="bookdate" label="Book Date">
                  </el-table-column>
                  <el-table-column prop="maturitydate" label="Maturity Date">
                  </el-table-column>
                  <el-table-column prop="intRate" label="Int.Rate" width="80px">
                  </el-table-column>
                  <el-table-column width="100px">
                    <template slot-scope="scope">
                      <el-dropdown>
                        <span class="el-dropdown-link">
                          Pay Loan<i
                            class="el-icon-arrow-down el-icon--right"
                          ></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item
                            >黄金糕${{ scope.$index }}</el-dropdown-item
                          >
                          <el-dropdown-item>狮子头</el-dropdown-item>
                          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </template>
                  </el-table-column>
                </template>
              </BaseTable>
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </el-card>
  </div>
</template>

<script>
import BaseTable from "@/components/BaseTable";
import { getDepositAccount, getLoanAccount } from "@/api/account";
export default {
  name: "Overview",
  components: {
    BaseTable
  },
  data() {
    return {
      USDNormalAccount: [],
      USDCDAccount: [],
      RMBNormalAccount: [],
      RMBCDAccount: [],
      loanAccount: [],
      depositAccountShow: true,
      LoanAccountShow: true
    };
  },
  filters: {
    hidePartNumer() {
      const star = "***********";
      const number = arguments[0] + "";
      const start = arguments[1];
      const end = arguments[2];
      const numstr = start
        ? number.slice(0, start) +
          star.slice(start + end) +
          number.slice(11 - end)
        : star.slice(end) + number.slice(11 - end);
      return numstr;
    }
  },
  methods: {
    totalCount(column, data, sums, index) {
      const values = data.map(item => Number(item[column.property]));
      if (!values.every(value => isNaN(value))) {
        sums[index] = values.reduce((prev, curr) => {
          const value = Number(curr);
          if (!isNaN(value)) {
            return prev + curr;
          } else {
            return prev;
          }
        }, 0);
        sums[index] = "$" + sums[index];
      } else {
        sums[index] = " ";
      }
    },
    USDSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "Total";
          return;
        }
        if (index === 1) {
          return;
        }
        if (index === 2) {
          sums[index] = "USD";
          return;
        }
        this.totalCount(column, data, sums, index);
      });

      return sums;
    },
    CDSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "Total";
          return;
        }
        if (index === 1 || index === 5 || index === 7) {
          return;
        }
        if (index === 2) {
          sums[index] = "USD";
          return;
        }
        this.totalCount(column, data, sums, index);
      });

      return sums;
    },
    getDepositAccount() {
      getDepositAccount().then(res => {
        console.log("res is", res);
        if (res.code === 200) {
          this.USDNormalAccount = res.data.list.USD.normalAccount;
          this.USDCDAccount = res.data.list.USD.cdAccount;
          this.RMBNormalAccount = res.data.list.RMB.normalAccount;
          this.RMBCDAccount = res.data.list.RMB.cdAccount;
        }
      });
    },
    getLoanAccount() {
      getLoanAccount().then(res => {
        console.log("res is", res);
        if (res.code === 200) {
          this.loanAccount = res.data.list.loanAccount;
        }
      });
    },
    LoanSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "Total";
          return;
        }
        if (index === 1 || index === 6) {
          return;
        }
        if (index === 2) {
          sums[index] = "USD";
          return;
        }
        this.totalCount(column, data, sums, index);
      });

      return sums;
    }
  },
  created() {
    this.getDepositAccount();
    this.getLoanAccount();
  }
};
</script>

<style lang="scss">
.overview-wrapper {
  .el-card {
    margin-bottom: 10px;
    .el-card__body {
      padding-top: 0;
    }
  }
  .el-table td,
  .el-table th.is-leaf {
    border: none;
  }
  .el-table td,
  .el-table th {
    padding: 5px 0;
  }
  .el-table__footer-wrapper tbody td {
    color: #303133;
    background: transparent;
  }
  .deposit-table {
    .el-table__footer-wrapper {
      font-family: "Titillium_Web_SemiBold";
      .el-table_1_column_4,
      .el-table_1_column_5,
      .el-table_2_column_13,
      .el-table_3_column_19,
      .el-table_3_column_20,
      .el-table_4_column_28,
      .el-table_5_column_34,
      .el-table_5_column_37 {
        color: #a71e32;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.overview-wrapper {
  .header-title {
    font-family: "Titillium_Web_Regular";
    font-size: 14px;
    color: #303133;
  }
  .box {
    .account-type {
      font-family: "Titillium_Web_SemiBold";
      font-size: 14px;
      color: #303133;
      margin: 10px;
    }
    .account-number {
      color: #409eff;
      text-decoration: underline;
      cursor: pointer;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>
