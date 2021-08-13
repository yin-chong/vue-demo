<template>
  <div class="main">
    <el-button
      type="primary"
      size="small"
      @click="getSelectRows"
    >查看选中的行</el-button>

    <ag-grid-vue
      class="ag ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
      rowSelection="multiple"
      :localeText="localeText"
      :autoGroupColumnDef="autoGroupColumnDef"
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import { localeText } from "../config/ap-grid-chinese-config";
import "ag-grid-enterprise";
export default {
  name: "ag-grid",
  data() {
    return {
      localeText,
      columnDefs: null,
      rowData: null,
      gridApi: null,
      columnApi: null,
      autoGroupColumnDef: null, // 分组
    };
  },
  components: {
    AgGridVue,
  },
  beforeMount() {
    this.columnDefs = [
      { headerName: "多选", checkboxSelection: true },
      { field: "make", headerName: "姓名", sortable: true, filter: true },
      { field: "model", headerName: "商品", sortable: true, filter: true },
      { field: "price", headerName: "价格", sortable: true, filter: true },
    ];

    this.autoGroupColumnDef = {
      headerName: "Model",
      field: "model",
      cellRenderer: "agGroupCellRenderer",
      cellRendererParams: {
        checkbox: true,
      },
    };
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => (this.rowData = rowData));
  },
  methods: {
    // 表格 checkbox
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    },
    //   按钮 点击查看选中的行
    getSelectRows() {
      const selectedNodes = this.gridApi.getSelectedNodes();
      const selectedData = selectedNodes.map((node) => node.data);
      console.log(selectedNodes);
      console.log(selectedData);
    },
  },
};
</script>

<style scoped lang="less">
@import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
.main {
  width: 100%;
  min-height: 100vh;

  .ag {
    margin: 10px auto;
    width: 90%;
    height: 800px;
  }

  /deep/ .ag-watermark {
    display: none;
  }
}
</style>