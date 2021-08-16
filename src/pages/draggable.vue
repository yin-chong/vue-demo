<template>
  <div>
    <!--使用draggable组件-->
    <div class="itxst">
      <div style="padding-left:6px">clone例子,左边往右边拖动试试看</div>
      <div class="col">
        <draggable
          v-model="arr1"
          @end="end1"
          :options="{group:{name: 'itxst',pull:'clone'},sort: true}"
          animation="300"
          :move="onMove"
        >
          <transition-group>
            <div
              :class="item.id==1?'item forbid':'item'"
              v-for="item in arr1"
              :key="item.id"
            >{{item.name}}</div>
          </transition-group>
        </draggable>
      </div>
      <div class="col">
        <draggable
          v-model="arr2"
          @end="end2"
          group="itxst"
          animation="300"
          :move="onMove2"
        >
          <transition-group>
            <div
              :class="item.id==12?'item2 forbid':'item2'"
              v-for="(item, index) in arr2"
              :key="item.id"
            >{{item.name}} <i
                class="el-icon-circle-close cursor"
                @click="delItem(index)"
              ></i></div>
            <div
              class="item2 empty"
              :key="-1"
            >
              从左侧拖入
            </div>
          </transition-group>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
//导入draggable组件
import draggable from "vuedraggable";
export default {
  //注册draggable组件
  components: {
    draggable,
  },
  data() {
    return {
      //定义要被拖拽对象的数组
      arr1: [
        { id: 1, name: "www.itxst.com" },
        { id: 2, name: "www.jd.com" },
        { id: 3, name: "www.baidu.com" },
        { id: 4, name: "www.taobao.com" },
        { id: 5, name: "www.google.com" },
      ],
      arr2: [
        // { id: 11, name: '常用菜单' },
      ],
      moveId: -1,
    };
  },
  methods: {
    //左边往右边拖动时的事件
    end1(e) {
      //  console.log(e)
      console.log(this.arr2);
      if (this.arr2.length === 0) return true;
      let that = this;

      let items = this.arr2.filter(function (m) {
        return m.id == that.moveId;
      });
      //如果左边
      if (items.length < 2) return;
      this.arr2.splice(e.newDraggableIndex, 1);
    },
    //右边往左边拖动时的事件
    end2(e) {
      console.log(e);
      let that = this;
      let items = this.arr1.filter(function (m) {
        return m.id == that.moveId;
      });
      //如果左边
      if (items.length < 2) return;
      this.arr1.splice(e.newDraggableIndex, 1);
    },
    //move回调方法
    onMove(e, originalEvent) {
      if (this.arr2.length === 2) return false;
      return true;
    },
    onMove2() {
      return false;
    },
    delItem(i) {
      this.arr2.splice(i, 1);
    },
  },
};
Array.prototype.filter =
  Array.prototype.filter ||
  function (func) {
    let arr = this;
    let r = [];
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i], i, arr)) {
        r.push(arr[i]);
      }
    }
    return r;
  };
</script>
<style scoped>
.itxst {
  margin: 10px;
  text-align: left;
}
.col {
  width: 40%;
  flex: 1;
  padding: 10px;
  border: solid 1px #eee;
  border-radius: 5px;
  float: left;
}
.col + .col {
  margin-left: 10px;
}
.item {
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border: solid 1px #eee;
  background-color: #f1f1f1;
  /* text-align: left; */
}
.item + .item {
  border-top: none;
  margin-top: 6px;
}

.item:hover {
  background-color: #fdfdfd;
  cursor: move;
}
.item2 {
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border: solid 1px #eee;
  background-color: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.empty {
  border: dashed;
}
.item2 + .item2 {
  border-top: none;
  margin-top: 6px;
}

.item2:hover {
  outline: solid 1px #ddd;
  cursor: move;
}
.cursor {
  cursor: pointer;
}
</style>