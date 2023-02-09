<template>
  <div class="main">
    <div class="flex-box" :style="{
        flexDirection: direction,
        flexWrap: wrap,
        alignContent: alignContent,
        justifyContent: justifyContent,
        alignItems: alignItems,
      }">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
      <div class="box">6</div>
      <div class="box">7</div>
    </div>
    <div class="btn-box">
      <div class="btn-main">
        <span>flex布局方向：</span>
        <button @click="onDirection('row')">横排排序</button>
        <button @click="onDirection('column')">纵向排序</button>
      </div>
      <div class="btn-main">
        <span>是否换行</span>
        <button @click="onWrap('wrap')">换行</button>
        <button @click="onWrap('nowrap')">不换行</button>
      </div>

      <div class="btn-main">
        <span>轴线水平对齐方式</span>
        <button @click="onAlignContent('center')">居中</button>
        <button @click="onAlignContent('flex-start')">上对齐</button>
        <button @click="onAlignContent('flex-end')">下对齐</button>
        <button @click="onAlignContent('space-around')">居中</button>
        <button @click="onAlignContent('space-betweent')">两端对齐</button>
        <button @click="onAlignContent('stretch')">上下对齐</button>
      </div>
      <div class="btn-main">
        <span>轴线垂直对齐方式</span>
        <button @click="onJustifyContent('center')">居中</button>
        <button @click="onJustifyContent('flex-start')">靠头部</button>
        <button @click="onJustifyContent('flex-end')">靠尾部</button>
        <button @click="onJustifyContent('space-between')">两边对齐</button>
        <button @click="onJustifyContent('space-around')">平分每行空隙</button>
        <button @click="onJustifyContent('space-evenly')">
          统一所有行的空隙
        </button>
      </div>
      <div class="btn-main">
        <span>子元素对齐方式</span>
        <button @click="onAlignItems('center')">居中</button>
        <button @click="onAlignItems('flex-start')">靠头部</button>
        <button @click="onAlignItems('flex-end')">靠尾部</button>
        <button @click="onAlignItems('stretch')">两边对齐</button>
        <button @click="onAlignItems('baseline')">看效果</button>
      </div>
    </div>
    <div style="margin-left: 40px">
      <h1>flex-direction: {{ direction }};</h1>
      <h1>flex-wrap: {{ wrap }};</h1>
      <h1>align-content: {{ alignContent }} ;</h1>
      <h1>justify-content: {{ justifyContent }} ;</h1>
      <h1>align-items: {{ alignItems }} ;</h1>
      <el-button type="success" v-clipboard:copy="copyData" v-clipboard:success="onCopy" v-clipboard:error="onError">复制
      </el-button>
    </div>
  </div>
</template>
<script>
  // 简单页面
  export default {
    name: "simple",
    data() {
      return {
        name: "flex",
        direction: "row", // 排序方向
        wrap: "nowrap", //是否换行
        alignContent: "normal", // 轴线水平对齐方式
        justifyContent: "normal", // 轴线垂直对齐方式
        alignItems: "normal", // 子元素对齐方式
      };
    },
    methods: {
      // 排序方式
      onDirection(data) {
        this.direction = data;
      },
      // 是否换行
      onWrap(data) {
        this.wrap = data;
      },
      //轴线水平对齐方式
      onAlignContent(data) {
        this.alignContent = data;
      },
      //轴线垂直对齐方式
      onJustifyContent(data) {
        this.justifyContent = data;
      },
      //子元素对齐方式
      onAlignItems(data) {
        this.alignItems = data;
      },
      // 复制成功时的回调函数
      onCopy(e) {
        this.$message.success("内容已复制到剪切板！")
      },
      // 复制失败时的回调函数
      onError(e) {
        this.$message.error("抱歉，复制失败！")
      }
    },
    components: {},
    computed: {
      copyData() {
        const data = `
        flex-direction: ${this.direction};
        flex-wrap: ${this.wrap};
        align-content: ${this.alignContent} ;
        justify-content: ${this.justifyContent} ;
        align-items: ${this.alignItems} ;`
        return data
      }

    }
  };
</script>
<style scoped lang="scss">
  .flex-box {
    width: 600px;
    height: 600px;
    background-color: aquamarine;
    display: flex;
  }

  .box {
    width: 100px;
    height: 100px;
    border: 1px solid red;
    text-align: center;
    font-size: 20px;
    line-height: 100px;
    background-color: blanchedalmond;
  }

  .main {
    display: flex;
    flex-direction: row;
  }

  .btn-box {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
  }

  span {
    padding: 0px 12px;
  }

  .btn-main {
    margin-bottom: 20px;
  }
</style>