<template>
  <div>
    <div
      id="myDiagramDiv"
      v-loading="load"
    ></div>
    <div
      role="tooltip"
      v-show="showTool"
      class="tooltip"
      :style="{ left: `${pt.x + 70}px`, top: `${pt.y + 10}px` }"
    >  
      <div style="width: 100%; text-align: center">{{ obj.text }}</div>
      <div class="tooltip-info">资产探索</div>
      <div class="tooltip-info">资产详情</div>
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</template>

<script>
import go from "gojs";
import vr6 from "@/assets/vr6.jpg";
export default {
  name: "GoJs",
  data() {
    return {
      vr6,
      load: false,
      pathList: [], // 下拉框路线列表
      path: "", // 下拉框选中的路线
      diagram: {},
      paths: {}, //原始 图表路径
      showTool: false, // 悬浮框 显示隐藏
      pt: {
        x: 0,
        y: 0,
      }, // 悬浮框位置
      obj: {}, //悬浮选中的节点
    };
  },
  mounted() {
    let $ = go.GraphObject.make;

    let myDiagram = $(go.Diagram, "myDiagramDiv", {
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelNone, //鼠标滚轮事件禁止
      "toolManager.hoverDelay": 800, 
      // layout: $(go.LayeredDigraphLayout), // 分层有向布局 layerSpacing 层间距 nodeSpacing  节点间距
      // layout: $(go.TreeLayout, { nodeSpacing: 20 }),
      layout: $(
        go.TreeLayout,
        {
          angle: 90,
          layerSpacing: 30,
          sorting: go.TreeLayout.SortingAscending,
        },
        { nodeSpacing: 100 }
      ),
      // maxSelectionCount: 2,
    });
    let myToolTip = $(go.HTMLInfo, {
      show: this.showToolTip,
      hide: this.hideToolTip,
    });
    myDiagram.linkTemplate = $(
      go.Link,
      {
        selectable: true, // 线条是否可点击
        // curve: go.Link.Bezier, // 线条形状 曲线
        // layerName: "Background", // 不要在任何节点前面交叉
      },
      $(
        go.Shape, // this shape only shows when it isHighlighted
        { isPanelMain: true, stroke: null, strokeWidth: 2 },
        new go.Binding("stroke", "isHighlighted", function (h) {
          return h ? "red" : "#000";
        }).ofObject()
      ),
      $(go.Shape, { toArrow: "Standard", segmentIndex: -Infinity })
    );
    /*  样式节点编辑
    Shape，显示带有颜色的预定义或自定义几何图形
    TextBlock，以各种字体显示（可能可编辑）文本, 要放在最后，否则无法渲染
    Picture, 显示图像，包括 SVG 文件
    Panel，用于容纳其他对象的集合的容器，这些对象可以根据 Panel 的类型（如桌子、垂直堆叠和拉伸容器）以不同方式定位和调整大小 */
    myDiagram.nodeTemplate = $(
      go.Node,
      "Vertical",
      {
        toolTip: myToolTip,
      },
      $(go.Picture, { width: 80, height: 60 }, vr6),
      $(
        go.TextBlock,
        {
          margin: new go.Margin(5, 0, 0, 0),
        },
        new go.Binding("text", "text")
      )
    );

    myDiagram.groupTemplate = $(
      go.Group,
      "Auto",
      // declare the Group.layout:
      {
        layout: $(go.LayeredDigraphLayout, { direction: 0, columnSpacing: 10 }),
        // isSubGraphExpanded: true,
      },
      // {
      //   toolTip: myToolTip,
      // },
         // 外层形状
      $(go.Shape, "RoundedRectangle", {
        fill: "rgba(44,130,255,0.15)",
        stroke: "#1F5CBF",
        strokeDashArray: [3, 3]
      }),
      // $(go.Picture, { width: 80, height: 60 }, new go.Binding("source")),
      // 标题 分组名称
      $(
        go.Panel,
        "Table", // position header above the subgraph
        // $("SubGraphExpanderButton"),
        $(go.Placeholder, { row: 1, padding: 6 }),
        {
            cursor: "pointer",
            click: this.clickDepartOne,
            defaultAlignment: go.Spot.Left,
        },
        $(
            go.Panel,
            "Auto",
            $(go.Shape, "RoundedRectangle", {
              fill: $(go.Brush, "Linear", {
                0.0: "rgba(59,72,179,1)",
                1.0: "rgba(59,72,179,0.5)",
                start: go.Spot.Left,
                end: go.Spot.Right
              }),
              stroke: null,
              margin: 5,
              height: 30
            }),
            $(
              go.Panel,
              "Horizontal",
              { margin: new go.Margin(0, 15) },
              $(
                go.TextBlock,
                {
                  font: "bold 16px Sans-Serif",
                  stroke: "white"
                },
                new go.Binding(
                  "text",
                  "text",
                  // (model) => model[model.category].name
                )
              ),
              $(
                go.TextBlock,
                {
                  font: "bold 16px Sans-Serif",
                  stroke: "white",
                  margin: new go.Margin(0, 15),
                },
                new go.Binding('text', '', model => {
                    model.isExpand === undefined && (model.isExpand = true); // 初始值设置为展开
                    return model.isExpand ? '-' : '+';
                  }),
                ),
              )
        )
      )
    );

    myDiagram.model = new go.GraphLinksModel(
      [
        { text: "节点1", key: 1, color: "#0e6cff", source: vr6, isGroup: true },
        {
          text: "节点2",
          key: 2,
          color: "#ff8700",
          source: vr6,
          isGroup: true,
          group: 1,
        },
        {
          text: "节点3",
          key: 3,
          color: "#04c193",
          source: vr6,
          isGroup: true,
          group: 1,
        },
        {
          text: "节点4",
          key: 4,
          color: "#ED5565",
          source: vr6,
          isGroup: true,
          group: 1,
        },
        { text: "节点5", key: 5, color: "#EC87C0", source: vr6, group: 2 },
        { text: "节点6", key: 6, color: "#F6BB42", source: vr6, group: 2 },
        { text: "节点7", key: 7, color: "#AC92EC", source: vr6, group: 3 },
        { text: "节点8", key: 8, color: "#AC92EC", source: vr6, group: 3 },
        { text: "节点9", key: 9, color: "#AC92EC", source: vr6, group: 3 },
        { text: "节点10", key: 10, color: "#AC92EC", source: vr6, group: 4 },
        { text: "节点11", key: 11, color: "#AC92EC", source: vr6, group: 4 },
        { text: "节点12", key: 12, color: "#AC92EC", source: vr6, group: 4 },
        { text: "节点13", key: 13, color: "#AC92EC", source: vr6, group: 4 },
        { text: "节点14", key: 14, color: "#AC92EC", source: vr6, group: 4 },
        {
          text: "节点15",
          key: 15,
          color: "#AC92EC",
          source: vr6,
          group: 4,
          isGroup: true,
        },
        { text: "节点16", key: 16, color: "#AC92EC", source: vr6, group: 15 },
        { text: "节点17", key: 17, color: "#AC92EC", source: vr6, group: 15 },
        { text: "节点18", key: 18, color: "#AC92EC", source: vr6, group: 15 },
        { text: "节点19", key: 19, color: "#AC92EC", source: vr6, group: 15 },
      ],
      [
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 5, to: 6 },
        { from: 7, to: 8 },
        { from: 8, to: 9 },
        { from: 10, to: 11 },
        { from: 10, to: 12 },
        { from: 11, to: 12 },
        { from: 12, to: 13 },
        { from: 14, to: 15 },
        { from: 13, to: 15 },
        { from: 16, to: 17 },
        { from: 17, to: 18 },
        { from: 17, to: 19 },
        { from: 18, to: 19 },
      ]
    );
    this.diagram = myDiagram;
  },
  methods: {
        /**
     * 点击一级部门节点，展开/收起所有二级部门节点，e: 输入事件，鼠标或键盘触发, obj: 当前点击的节点对象
     * @param e
     * @param obj
     */
    clickDepartOne(e, obj) {
      // 改变收起/展开图标，使用 set 方法确保更改属性值后视图更新
      this.diagram.model.commit(function (m) {
        m.set(obj.part.data, "isExpand", !obj.part.data.isExpand);
      });

      let type = obj.part.data.isExpand ? "expand" : "collapse";
      this.diagram.nodes.each((node) => {
        // 循环所有节点
        if (node === obj.part || node.containingGroup === obj.part) {
          // 如果节点的父容器是点击的一级部门
          this.clickDepartTwo(null, node, type);
        }
      });
    },
    clickDepartTwo(e, obj, type) {
      let group = obj.part;
      // console.log(group instanceof go.Adornment);
      // 判断节点是否是 Group 节点
      if (group instanceof go.Adornment) group = group.adornedPart;
      if (!(group instanceof go.Group)) return;
      // 判断有没有图层
      let diagram = group.diagram;
      if (!diagram) return;
      // 判断节点能否收起/展开
      let cmd = diagram.commandHandler; // 获取图层指令
      if (group.isSubGraphExpanded) {
        if (!cmd.canCollapseSubGraph(group)) return; // 如果 group 不能收起，return
      } else {
        if (!cmd.canExpandSubGraph(group)) return; // 如果 group 不能展开，return
      }

      // 如果指定了 type，则按 type 与 节点当前展开状态 来决定展开/收起
      if (type) {
        if (type === "collapse" && group.isSubGraphExpanded) {
          cmd.collapseSubGraph(group); // 收起
        } else if (type === "expand" && !group.isSubGraphExpanded) {
          cmd.expandSubGraph(group); // 展开
        }
      } else {
        // 如果未指定 type，则按 节点当前展开状态 来决定展开/收起
        if (group.isExpand) {
          cmd.collapseSubGraph(group); // 收起
        } else {
          cmd.expandSubGraph(group); // 展开
        }
      }
    },
    showToolTip(obj) {
      if (!!this.pt.x && !!this.pt.y) return;
      [this.pt.x, this.pt.y] = [
        this.diagram.lastInput.viewPoint.x,
        this.diagram.lastInput.viewPoint.y,
      ];
      this.obj = obj.data;
      this.showTool = true;
      // document.getElementById("toolTipParagraph").textContent =
      //   "Tooltip for: " + obj.data.key;
      // toolTipDIV.style.display = "block";
    },
    clickBtn() {
      window.alert(this.obj.text);
    },
    hideToolTip() {
      this.showTool = false;
      this.pt = {
        x: 0,
        y: 0,
      };
    },
  },
};
</script>

<style scoped lang="less">
#myDiagramDiv {
  // position: absolute;
  margin: 10px auto 30px;
  width: 100%;
  height: 100vh;
  // border: 1px solid;
  z-index: 90;
}
.mySelect {
  position: relative;
  width: 300px;
  margin-left: 10%;
}
.tooltip {
  position: absolute;
  padding: 10px 0;
  z-index: 1000;
  width: 100px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 2px 2px 3px #aaa;
  background: #fff;
  font-size: 15px;
  line-height: 25px;
  color: #303133;
  transition: 0.3s;
}
.tooltip-info {
  padding-left: 10px;
  width: 100%;
  height: 25px;
  cursor: pointer;
}
.tooltip-info:hover {
  background: #f0f0f0;
}
</style>