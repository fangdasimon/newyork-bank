<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    show-summary
    :summary-method="getSummaries"
    :header-cell-style="tableHeaderColor"
    :row-style="tableRowStyle"
  >
    <template>
      <slot name="table"></slot>
    </template>
  </el-table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default() {
        return [];
      }
    },
    getSummaries: {
      type: Function
    }
  },
  data() {
    return {
      tableHeaderColor: {
        color: "#303133",
        "font-family": "Titillium_Web_SemiBold"
      },
      tableRowStyle: {
        color: "#606266",
        "font-family": "Titillium_Web_Regular"
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
