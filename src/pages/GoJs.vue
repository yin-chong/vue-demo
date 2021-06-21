<template>
  <div>
    <div id="myDiagramDiv" v-loading="load"></div>
    <!-- <select id="myPaths" style="min-width: 100px" size="10"></select> -->
  </div>
</template>

<script>
import go from "gojs";
export default {
  name: "GoJs",
  data() {
    return {
      load: false,
      diagram: "",
    };
  },
  mounted() {
    let $ = go.GraphObject.make;

    let myDiagram = $(go.Diagram, "myDiagramDiv", {
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelNone, //鼠标滚轮事件禁止
      layout: $(go.LayeredDigraphLayout), // 分层有向布局
    });
    // myDiagram.grid.visible = true;
    myDiagram.linkTemplate = $(
      go.Link,
      {
        selectable: true, // 线条是否可点击
        curve: go.Link.Bezier, // 线条形状 曲线
        layerName: "Background", // 不要在任何节点前面交叉
      },
      $(go.Shape),
      $(go.Shape, { toArrow: "OpenTriangle", segmentIndex: -Infinity }) // 箭头在中间显示
    );
    /*  样式节点编辑
    Shape，显示带有颜色的预定义或自定义几何图形
    TextBlock，以各种字体显示（可能可编辑）文本, 要放在最后，否则无法渲染
    Picture, 显示图像，包括 SVG 文件
    Panel，用于容纳其他对象的集合的容器，这些对象可以根据 Panel 的类型（如桌子、垂直堆叠和拉伸容器）以不同方式定位和调整大小 */
    myDiagram.nodeTemplate = $(
      go.Node,
      "Auto",
      {
        locationSpot: go.Spot.Center, // Node.location is the center of the Shape
        selectionAdorned: false,
      },
      $(
        go.Shape,
        "Circle",
        {
          stroke: null,
          figure: "Circle",
        },
        new go.Binding("fill", "color")
      ),
      $(
        go.TextBlock,
        {
          //   font: "15px Helvetica, bold Arial, sans-serif", //字体
          editable: true,
          stroke: "#fff", //颜色
          margin: 5,
          //  text: "textAlign: 'center'",
        },
        new go.Binding("text", "text")
      )
    );
    myDiagram.model = new go.GraphLinksModel(
      [
        { text: "节点1", key: 1, color: "#0e6cff" },
        { text: "节点2", key: 2, color: "#ff8700" },
        { text: "节点3", key: 3, color: "#04c193" },
        { text: "节点4", key: 4, color: "#ED5565" },
        { text: "节点5", key: 5, color: "#EC87C0" },
        { text: "节点6", key: 6, color: "#F6BB42" },
        { text: "节点7", key: 7, color: "#AC92EC" },
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
    // this.chooseTwoNodes();
  },
  methods: {
    nodeSelectionChanged(node) {
      var diagram = node.diagram;
      if (diagram === null) return;
      diagram.clearHighlighteds();
      if (node.isSelected) {
        // when there is a selection made, always clear out the list of all paths
        var sel = document.getElementById("myPaths");
        sel.innerHTML = "";

        // show the distance for each node from the selected node
        var begin = diagram.selection.first();
        showDistances(begin);

        if (diagram.selection.count === 2) {
          var end = node; // just became selected

          // highlight the shortest path
          highlightShortestPath(begin, end);

          // list all paths
          listAllPaths(begin, end);
        }
      }
    },
    chooseTwoNodes() {
      myDiagram.clearSelection();
      var num = myDiagram.model.nodeDataArray.length;
      var node1 = null;
      var node2 = null;
      for (var i = Math.floor(Math.random() * num); i < num * 2; i++) {
        node1 = myDiagram.findNodeForKey(i % num);
        var distances = findDistances(node1);
        for (var j = Math.floor(Math.random() * num); j < num * 2; j++) {
          node2 = myDiagram.findNodeForKey(j % num);
          var dist = distances.get(node2);
          if (dist > 1 && dist < Infinity) {
            node1.isSelected = true;
            node2.isSelected = true;
            break;
          }
        }
        if (myDiagram.selection.count > 0) break;
      }
    },
  },
};
</script>

<style scoped>
#myDiagramDiv {
  position: relative;
  margin: 10px auto;
  width: 80%;
  height: 300px;
  border: 1px solid;
}
</style>