<template>
  <div>
    <!-- <van-popup
      v-model="show"
      closeable
      round
      position="bottom"
    > -->
    <div class="closeable-title">{{title}}</div>
    <div class="ym">
      <van-icon
        name="play"
        class="rotate"
        v-show="new Date(`${year}-${month}-1`).getTime() > new Date().getTime()"
        @click="lastMonth"
      />
      &nbsp;{{year}}年{{month}}月&nbsp;
      <van-icon
        name="play"
        @click="nextMonth"
      />
    </div>

    <!-- 日历主体 -->
    <!-- 周 -->
    <div class="week calendar-row">
      <div
        class="dis week-item"
        v-for="item in weekList"
        :key='item'
      >{{item}}</div>
    </div>
    <!-- 日期 -->
    <div class="calendar-row">
      <div
        v-for="(item, index) in calendatArr"
        class="calendar-row_item"
        :key="index"
        @click="selDate(item.day, item.dis, item.isFull)"
        :class="{'dis': item.dis || item.isFull, 'sel': !!!item.dis && !!selectDay && year == selectDay.substr(0, 4) && month == selectDay.substr(5, 2) && item.day == selectDay.substr(8, 2) }"
      >{{item.day}}
        <div
          class="isFull"
          v-if="item.isFull"
        >满</div>
      </div>
    </div>

    <!-- 底部按钮 -->
    <div class="calendar-bottom">
      <div
        class="calendar-bottom_btn"
        @click="confirmDate"
      >
        确定
      </div>
    </div>
    <!-- </van-popup> -->
  </div>
</template>

<script>
export default {
  name: "calendar",
  data() {
    return {
      // show: true,
      year: null,
      month: null,
      day: null,
      today: null,
      weekList: ["日", "一", "二", "三", "四", "五", "六"],
      calendatArr: [], // 日期列表
      daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      selectDay: null, // 选中的日期
    };
  },
  // model: {
  //   props: "show",
  //   event: "confirm",
  // },
  props: {
    // show: {
    //   default: true,
    //   type: Boolean,
    // },
    // 日历标题
    title: {
      default: "选择日期",
      type: String,
    },
    // 预约已满的日期
    specialDates: {
      default: () => [],
      type: Array,
    },
  },
  computed: {
    // 获得指定年月的1号是星期几
    beginDay() {
      return new Date(this.year, this.month - 1, 1).getDay();
    },
    // 日期为0 getDate() 获取当月总天数
    curDays() {
      return new Date(this.year, this.month, 0).getDate();
    },
  },
  created() {
    this.getInitTime();
    this.getCalendatArr();
  },
  methods: {
    // 获取当日日期
    getInitTime() {
      const date = new Date();
      this.year = date.getFullYear();
      this.month = date.getMonth() + 1;
      this.day = date.getDate();
      this.today = `${this.year}-${this.month}-${this.day}`;
    },
    // 获取年月下的所有日期
    getCalendatArr() {
      let calendatArr = [];
      const [lastDaysInMonth, daysInMonth] = [
        this.daysInMonth[this.month - 2] || 31,
        this.daysInMonth[this.month - 1],
      ];
      for (let i = 1; i < 43; i++) {
        const date = i - this.beginDay;
        let day;
        let isFull = false;
        if (date > daysInMonth) {
          day = date - daysInMonth;
        } else if (date <= 0) {
          day = date + lastDaysInMonth;
        } else {
          day = date;
          const myDate = `${this.year}-${String(this.month).padStart(
            2,
            "0"
          )}-${String(day).padStart(2, "0")}`;
          if (this.specialDates.includes(myDate)) isFull = true;
        }
        const obj = {
          day: day,
          isFull: isFull,
          dis:
            date > 0 &&
            date <= daysInMonth &&
            new Date(`${this.year}-${this.month}-${day}`).getTime() >
              new Date().getTime()
              ? false
              : true,
        };
        calendatArr.push(obj);
      }
      //   console.log(calendatArr);
      this.calendatArr = [...calendatArr];
    },
    // 上个月
    lastMonth() {
      this.year = this.month == 1 ? this.year - 1 : this.year;
      this.month = this.month == 1 ? 12 : this.month - 1;
      this.getCalendatArr();
    },
    // 下个月
    nextMonth() {
      this.year = this.month == 12 ? this.year + 1 : this.year;
      this.month = this.month == 12 ? 1 : this.month + 1;
      this.getCalendatArr();
    },
    // 日期点击
    selDate(day, dis, isFull) {
      if (dis || isFull) return;
      const [m, d] = [
        String(this.month).padStart(2, "0"),
        String(day).padStart(2, "0"),
      ];
      this.selectDay = `${this.year}-${m}-${d}`;
    },
    // 确认按钮
    confirmDate() {
      if (!!!this.selectDay) return;
      this.$emit("confirm", this.selectDay);
      this.show = false;
    },
  },
  watch: {
    // 判断选中年份2月多少天
    year: function (newVal) {
      const y = Number(newVal);
      if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
        this.daysInMonth[1] = 29;
      }
      return;
    },
  },
};
</script>

<style scoped>
.closeable-title {
  padding-top: 4px;
  text-align: center;
  font-size: 18px;
  line-height: 51px;
  color: #151414;
}
.ym {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #151414;
  /* padding-bottom: 23px;  */
}
.rotate {
  transform: rotateY(180deg);
}
.week {
  margin-top: 11px;
  box-shadow: 0px 3px 15px 0px rgba(224, 224, 224, 0.2);
}
.calendar-row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.week-item,
.calendar-row_item {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.week-item {
  height: 38px;
}
.calendar-row_item {
  min-width: 14.285%;
  width: 14.285%;
  height: 50px;
  color: #202020;
}
/* 不可选 */
.dis {
  color: #909090;
}
/* 点中的日期 */
.sel {
  /* width: 26px;
  height: 26px; */
  background-color: #04c193;
  /* border-radius: 50%; */
  color: #fff;
}

.calendar-btn {
  width: 100%;
  height: 52px;
  background-color: #ffffff;
  box-shadow: 0px -2px 3px 0.1px rgba(224, 224, 224, 0.2);
  position: fixed;
  z-index: 999;
  left: 0;
  bottom: 0;
}
.calendar-bottom_btn {
  width: 92.8%;
  margin: 6px auto;
  background-image: linear-gradient(90deg, #04df8e 0%, #14caa9 100%),
    linear-gradient(0deg, rgba(233, 199, 154, 1) 0%, #e7bd88 100%);
  background-blend-mode: normal, normal;
  border-radius: 20px;
  text-align: center;
  font-size: 16px;
  line-height: 39px;
  color: #fff;
}

/* 是否已满 */
.isFull {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 11px;
  color: #999;
}
</style>