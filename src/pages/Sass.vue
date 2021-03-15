<template>
  <div>
    <header class="showcase">
      <div class="container">
        <nav>
          <h1 class="logo">
            网站名称
          </h1>
          <ul>
            <li><a href="#">主页</a></li>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </nav>

        <div class="showcase-content">
          <div>
            <h1>欢迎来到XXX网站</h1>
            <p class="my-1">
              This, dont konw what mean English, But, just write writ. So nb of I. Very very good.All of you ,are sb.No one can look.
            </p>
            <a
              href="#"
              class="btn-primary"
            >登陆</a>
            <a
              href="#"
              class="btn-secondary"
            >注册</a>
          </div>

          <img
            :src="office"
            alt=""
          >
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import office from "@/assets/office.png";
export default {
  name: "Sass",
  data() {
    return {
      office,
    };
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.showcase {
  @include set-background($primary-color);
  height: 600px;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      list-style-type: none;
    }

    li {
      padding: 15px;
    }

    a {
      color: set-text-color($primary-color);
    }

    a:hover {
      color: $secondary-color;
    }
  }


  &-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    img {
      width: 50%;
    }

    h1 {
      font-size: 50px;
      line-height: 1.2;
    }
  }
}

.container {
  max-width: 1100px;
  padding: 0 30px;
  margin: 0 auto;
  overflow: auto;
}

.btn-primary {
  @extend %btn;
  // background-color: lighten($color: $primary-color, $amount: 10%);
  @include set-background(lighten($color: $primary-color, $amount: 10%));
}
.btn-secondary {
  @extend %btn;
  // background-color: $secondary-color;
  @include set-background($secondary-color);
}

@media(max-width: 700px) {
  .showcase {
    height: 400px;

    &-content {
      text-align: center;
    }
     img {
       display: none;
     }
  }
}
</style>

