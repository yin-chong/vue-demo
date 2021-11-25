<template>
  <div>
    <div
      id="myDiagramDiv"
      v-loading="load"
    ></div>
    <!-- <div
      class="tooltip"
      v-show="showTool"
      :style="{ left: `${pt.x + 70}px`, top: `${pt.y + 10}px` }"
    >
      {{ obj.text }}
      <el-button type="primary" @click="clickBtn">点击</el-button>
    </div> -->
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
    <!-- <el-select v-model="path" placeholder="" class="mySelect" @change="getPath">
      <el-option
        v-for="(item, index) in pathList"
        :key="index"
        :label="item"
        :value="index"
      >
      </el-option>
    </el-select> -->
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

    // myDiagram.toolManager.clickSelectingTool.standardMouseSelect = function () {
    //   const diagram = this.diagram;
    //   if (!!!diagram || !diagram.allowSelect) return;
    //   const e = diagram.lastInput;
    //   const count = diagram.selection.count;
    //   const curobj = diagram.findPartAt(e.documentPoint, false);
    //   if (!!curobj) {
    //     if (count < 2) {
    //       if (!curobj.isSelected) {
    //         let part = curobj;
    //         if (!!part) part.isSelected = true;
    //       }
    //     } else {
    //       if (!curobj.isSelected) {
    //         const part = curobj;
    //         if (!!part) diagram.select(part);
    //       }
    //     }
    //   } else if (e.left && !(e.control || e.meta) && !e.shift) {
    //     diagram.clearSelection();
    //   }
    // };

    myDiagram.groupTemplate = $(
      go.Group,
      "Auto",
      // declare the Group.layout:
      {
        layout: $(go.LayeredDigraphLayout, { direction: 0, columnSpacing: 10 }),
        // isSubGraphExpanded: true,
      },
      {
        toolTip: myToolTip,
      },
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
      // [
      //   { from: 1, to: 2},
      //   { from: 1, to: 3},
      //   { from: 2, to: 4},
      //   { from: 2, to: 5},
      //   { from: 3, to: 6},
      //   { from: 3, to: 7}
      // ]
      [
        // { from: 1, to: 2 },
        // { from: 1, to: 3 },
        // { from: 1, to: 4 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 5, to: 6 },
        { from: 7, to: 8 },
        { from: 8, to: 9 },
        // { from: 4, to: 8 },
        // { from: 4, to: 7 },
        // { from: 3, to: 9 },
        // { from: 3, to: 10 },
        // { from: 3, to: 11 },
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
        // { from: 9, to: 11 },
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
    nodeSelectionChanged(node) {
      const diagram = node.diagram;
      if (!!!diagram) return;
      diagram.clearHighlighteds();
      if (node.isSelected) {
        const begin = diagram.selection.first();
        this.showDistances(begin);
        if (diagram.selection.count === 2) {
          const end = node;
          this.highlightShortestPath(begin, end);
          this.listAllPaths(begin, end);
        }
      }
    },
    showDistances(begin) {
      const distances = this.findDistances(begin);
      const it = distances.iterator;
      while (it.next()) {
        const n = it.key;
        const dist = it.value;
        this.diagram.model.setDataProperty(n.data, "distance", dist);
      }
    },
    findDistances(source) {
      const diagram = source.diagram;
      const distances = new go.Map(/*go.Node, "number"*/);
      const nit = diagram.nodes;
      while (nit.next()) {
        const n = nit.value;
        distances.set(n, Infinity);
      }
      distances.set(source, 0);
      const seen = new go.Set(/*go.Node*/);
      seen.add(source);
      const finished = new go.Set(/*go.Node*/);
      while (seen.count > 0) {
        const least = this.leastNode(seen, distances);
        const leastdist = distances.get(least);
        seen.delete(least);
        finished.add(least);
        const it = least.findLinksOutOf();
        while (it.next()) {
          const link = it.value;
          const neighbor = link.getOtherNode(least);
          if (finished.has(neighbor)) continue;
          const neighbordist = distances.get(neighbor);
          const dist = leastdist + 1;
          if (dist < neighbordist) {
            if (neighbordist === Infinity) {
              seen.add(neighbor);
            }
            distances.set(neighbor, dist);
          }
        }
      }

      return distances;
    },
    highlightShortestPath(begin, end) {
      this.highlightPath(this.findShortestPath(begin, end));
    },
    listAllPaths(begin, end) {
      this.paths = this.collectAllPaths(begin, end);
      this.pathList = [];
      this.paths.each((el) => this.pathList.push(this.pathToString(el)));
      this.path = this.pathList[0] || "";
    },
    leastNode(coll, distances) {
      let bestdist = Infinity;
      let bestnode = null;
      const it = coll.iterator;
      while (it.next()) {
        const n = it.value;
        const dist = distances.get(n);
        if (dist < bestdist) {
          bestdist = dist;
          bestnode = n;
        }
      }
      return bestnode;
    },
    findShortestPath(begin, end) {
      // compute and remember the distance of each node from the BEGIN node
      let distances = this.findDistances(begin);

      // now find a path from END to BEGIN, always choosing the adjacent Node with the lowest distance
      let path = new go.List();
      path.add(end);
      while (!!end) {
        let next = this.leastNode(end.findNodesInto(), distances);
        if (!!next) {
          if (distances.get(next) < distances.get(end)) {
            path.add(next); // making progress towards the beginning
          } else {
            next = null; // nothing better found -- stop looking
          }
        }
        end = next;
      }
      // reverse the list to start at the node closest to BEGIN that is on the path to END
      // NOTE: if there's no path from BEGIN to END, the first node won't be BEGIN!
      path.reverse();
      return path;
    },
    highlightPath(path) {
      this.diagram.clearHighlighteds();
      for (let i = 0; i < path.count - 1; i++) {
        let f = path.get(i);
        let t = path.get(i + 1);
        f.findLinksTo(t).each(function (l) {
          l.isHighlighted = true;
        });
      }
    },
    collectAllPaths(begin, end) {
      const stack = new go.List(/*go.Node*/);
      const coll = new go.List(/*go.List*/);

      function find(source, end) {
        source.findNodesOutOf().each(function (n) {
          if (n === source) return;
          if (n === end) {
            let path = stack.copy();
            path.add(end);
            coll.add(path);
          } else if (!stack.has(n)) {
            stack.add(n);
            find(n, end);
            stack.removeAt(stack.count - 1);
          }
        });
      }

      stack.add(begin);
      find(begin, end);
      return coll;
    },
    pathToString(path) {
      let s = `${path.length}:`;
      for (let i = 0; i < path.length; i++) {
        if (i > 0) s += " -- ";
        s += path.get(i).data.text;
      }
      return s;
    },
    getPath(i) {
      this.highlightPath(this.paths.get(i));
    },
    showToolTip(obj) {
      // if(this.showTool) return;
      // let toolTipDIV = document.getElementById("showTooltip");
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