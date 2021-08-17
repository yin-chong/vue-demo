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
// 汉化
import { localeText } from "@/config/ap-grid-chinese-config";
import "ag-grid-community";
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
    // this.columnDefs = [
    //   { headerName: "多选", checkboxSelection: true },
    //   { field: "make", headerName: "姓名", sortable: true, filter: true },
    //   { field: "model", headerName: "商品", sortable: true, filter: true },
    //   { field: "price", headerName: "价格", sortable: true, filter: true },
    // ];
    /**
     * @description 多表头
     * @param resizable 调整列的大小
     * @param checkboxSelection 选择框  rowSelection="multiple"  多选
     * @param sortable 分组
     * @param filter 筛选 agNumberColumnFilter 数字类型过滤器 agTextColumnFilter 字符串类型 agDateColumnFilter 时间类型
     * @param floatingFilter 是否直接显示过滤器
     * @param cellEditor 表格编辑
     */
    this.columnDefs = [
      {
        headerName: "分组A",
        children: [
          { headerName: "多选", checkboxSelection: true },
          { field: "make", headerName: "姓名", sortable: true, filter: true, resizable:true, cellEditor: 'agLargeTextCellEditor', },
          { field: "model", headerName: "商品", sortable: true, filter: true },
        ],
      },
      {
        headerName: "分组B",
        children: [
          { field: "price", headerName: "价格", sortable: true, filter: 'agNumberColumnFilter',  floatingFilter: true },
          { headerName: "籍贯", field: "jg" },
          { headerName: "省份", field: "sf" },
          { headerName: "地址", field: "dz" },
        ],
      },
    ];

    // this.autoGroupColumnDef = {
    //   headerName: "Model",
    //   field: "model",
    //   cellRenderer: "agGroupCellRenderer",
    //   cellRendererParams: {
    //     checkbox: true,
    //   },
    // };
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => (this.rowData = rowData));
  },
  methods: {
    // ag-grid创建完成后执行的事件
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      // 自适应大小
      this.gridApi.sizeColumnsToFit();
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