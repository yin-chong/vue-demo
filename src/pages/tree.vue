<template>
  <div>
    <div id="myDiagramDiv" v-loading="load"></div>
  </div>
</template>

<script>
import go from "gojs";
import vr6 from "@/assets/vr6.jpg";
export default {
  name: "tree",
  data() {
    return {
      vr6,
      load: false,
      diagram: {},
    };
  },
  mounted() {
    let $ = go.GraphObject.make;
    let myDiagram = $(go.Diagram, "myDiagramDiv", {
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelNone, //鼠标滚轮事件禁止
      layout: $(go.TreeLayout, { angle: 90, layerSpacing: 120 }), // 分层有向布局 layerSpacing 层间距
    });
    myDiagram.nodeTemplate = $(
      go.Node,
      "Horizontal",
      //   {
      //     toolTip: myToolTip,
      //   },
      //   {
      //     selectionAdorned: true,
      //     selectionChanged: this.nodeSelectionChanged,
      //   },
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
    myDiagram.linkTemplate = $(
      go.Link,
      { routing: go.Link.Orthogonal, corner: 5 },
      $(
        go.Shape, // the link's path shape
        { strokeWidth: 3, stroke: "#555" }
      )
    );
    myDiagram.model = new go.GraphLinksModel([
      { text: "节点1", key: 1, color: "#0e6cff", source: vr6 },
      { text: "节点2", key: 2, color: "#ff8700", source: vr6, parent: 1 },
      { text: "节点3", key: 3, color: "#04c193", source: vr6, parent: 1 },
      { text: "节点4", key: 4, color: "#ED5565", source: vr6, parent: 2 },
      { text: "节点5", key: 5, color: "#EC87C0", source: vr6, parent: 3 },
      { text: "节点6", key: 6, color: "#F6BB42", source: vr6, parent: 2 },
      { text: "节点7", key: 7, color: "#AC92EC", source: vr6, parent: 3 },
      { text: "节点8", key: 8, color: "#AC92EC", source: vr6, parent: 2 },
      { text: "节点9", key: 9, color: "#AC92EC", source: vr6, parent: 3 },
      { text: "节点10", key: 10, color: "#AC92EC", source: vr6, parent: 2 },
      { text: "节点11", key: 11, color: "#AC92EC", source: vr6, parent: 3 },
    ]);
  },
};
</script>

<style scoped>
#myDiagramDiv {
  margin: 10px auto 30px;
  width: 80%;
  height: 400px;
  border: 1px solid;
  z-index: 90;
}
</style>