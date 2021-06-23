<template>
  <div>
    <div id="myDiagramDiv" v-loading="load"></div>
    <el-select v-model="path" placeholder="" class="mySelect" @change="getPath">
      <el-option
        v-for="(item, index) in pathList"
        :key="index"
        :label="item"
        :value="index"
      >
      </el-option>
    </el-select>
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
    };
  },
  mounted() {
    let $ = go.GraphObject.make;

    let myDiagram = $(go.Diagram, "myDiagramDiv", {
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelNone, //鼠标滚轮事件禁止
      layout: $(go.LayeredDigraphLayout, { layerSpacing: 120 }), // 分层有向布局 layerSpacing 层间距
      maxSelectionCount: 2,
    });
    myDiagram.linkTemplate = $(
      go.Link,
      {
        selectable: true, // 线条是否可点击
        curve: go.Link.Bezier, // 线条形状 曲线
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
        selectionAdorned: true,
        selectionChanged: this.nodeSelectionChanged,
      },
      // $(
      //   go.Shape,
      //   "Circle",
      //   {
      //     stroke: null,
      //     figure: "Circle",
      //     portId: '',
      //   },
      //   new go.Binding("fill", "color")
      // ),
      $(go.Picture, { width: 80, height: 60 }, new go.Binding("source")),
      $(
        go.TextBlock,
        {
          //   font: "15px Helvetica, bold Arial, sans-serif", //字体
          // stroke: "#fff", //颜色
          margin: new go.Margin(5, 0, 0, 0),
        },
        new go.Binding("text", "text")
      )
    );

    myDiagram.toolManager.clickSelectingTool.standardMouseSelect = function () {
      const diagram = this.diagram;
      if (!!!diagram || !diagram.allowSelect) return;
      const e = diagram.lastInput;
      const count = diagram.selection.count;
      const curobj = diagram.findPartAt(e.documentPoint, false);
      if (!!curobj) {
        if (count < 2) {
          if (!curobj.isSelected) {
            let part = curobj;
            if (!!part) part.isSelected = true;
          }
        } else {
          if (!curobj.isSelected) {
            const part = curobj;
            if (!!part) diagram.select(part);
          }
        }
      } else if (e.left && !(e.control || e.meta) && !e.shift) {
        diagram.clearSelection();
      }
    };

    myDiagram.model = new go.GraphLinksModel(
      [
        { text: "节点1", key: 1, color: "#0e6cff", source: vr6 },
        { text: "节点2", key: 2, color: "#ff8700", source: vr6 },
        { text: "节点3", key: 3, color: "#04c193", source: vr6 },
        { text: "节点4", key: 4, color: "#ED5565", source: vr6 },
        { text: "节点5", key: 5, color: "#EC87C0", source: vr6 },
        { text: "节点6", key: 6, color: "#F6BB42", source: vr6 },
        { text: "节点7", key: 7, color: "#AC92EC", source: vr6 },
      ],
      [
        { from: 1, to: 2 },
        { from: 3, to: 2 },
        { from: 1, to: 7 },
        { from: 6, to: 2 },
        { from: 2, to: 1 },
        { from: 4, to: 5 },
        { from: 4, to: 7 },
        { from: 7, to: 5 },
        { from: 5, to: 7 },
        { from: 3, to: 5 },
      ]
    );
    this.diagram = myDiagram;
  },
  methods: {
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
      console.log(this.pathList);
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
  },
};
</script>

<style scoped lang="less">
#myDiagramDiv {
  position: relative;
  margin: 10px auto 30px;
  width: 80%;
  height: 400px;
  border: 1px solid;
}
.mySelect {
  width: 300px;
  margin-left: 10%;
}
</style>