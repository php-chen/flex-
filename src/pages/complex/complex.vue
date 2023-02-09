<template>
  <div>
    <div class="init-element">
      <!-- 元素定义 -->
      <div>
        <span>子元素数量</span>
        <el-input-number v-model="childrenNum" @change="handleChange" :min="0" :max="100" label="描述文字">
        </el-input-number>
      </div>
      <!-- 子元素大小 -->
      <div>
        <!-- 子元素配置弹出框 -->
        <el-popover placement="right" width="400" trigger="click">
          <!-- 表单 -->
          <el-table :data="childrenList" :stripe="true">
            <!-- 元素宽度 -->
            <el-table-column width="100" property="width" label="宽">
              <template slot-scope="scope">
                <el-input v-model="scope.row.width" placeholder="请输入宽度"></el-input>
              </template>
            </el-table-column>
            <!-- 元素高度 -->
            <el-table-column width="100" property="height" label="高">
              <template slot-scope="scope">
                <el-input v-model="scope.row.height" placeholder="请输入高度"></el-input>
              </template>
            </el-table-column>
            <!-- 元素背景颜色 -->
            <el-table-column width="150" property="backgrounColor" label="背景">
              <template slot-scope="scope">
                <el-input v-model="scope.row.backgrounColor" placeholder="请输入背景颜色"></el-input>
              </template>
            </el-table-column>
          </el-table>
          <el-button slot="reference" type="primary">子元素单项配置</el-button>

          <el-button type="primary" @click="open">子元素统一配置</el-button>
        </el-popover>
      </div>
    </div>
    <!-- 渲染与调试容器 -->
    <div class="main">
      <!-- 渲染容器 -->
      <div class="main-box" :style="{
          flexDirection: direction,
          flexWrap: wrap,
          alignContent: alignContent,
          justifyContent: justifyContent,
          alignItems: alignItems,
        }">
        <!-- 循环生成子元素 -->
        <div v-for="(item, index) in childrenList" :key="index" :style="{
            height: item.height + 'px',
            width: item.width + 'px',
            backgroundColor: '#' + item.backgrounColor,
          }"></div>
      </div>
      <!-- flex调试容器 -->
      <div class="flex-main">
        <!-- flex轴向 -->
        <div class="flex-row">
          <h3>主轴方向</h3>
          <selectBtn :list="directionArr" @onBtn="onDirection"></selectBtn>
        </div>
        <!-- flex是否换行 -->
        <div class="flex-row">
          <h3>子元素在主轴上是否换行</h3>
          <selectBtn :list="wrapArr" @onBtn="onWrap"></selectBtn>
        </div>
        <!-- 主轴上的排序方式 -->
        <div class="flex-row">
          <h3>主轴排序</h3>
          <selectBtn :list="aliginContentArr" @onBtn="onAlignContent"></selectBtn>
        </div>
        <!-- 副轴上的排序方式 -->
        <div class="flex-row">
          <h3>副轴排序</h3>
          <selectBtn :list="justifyContentArr" @onBtn="onJustifyContent"></selectBtn>
        </div>
        <!-- 副轴上的排序方式 -->
        <div class="flex-row">
          <h3>副轴子元素排序</h3>
          <selectBtn :list="alignItemsArr" @onBtn="onAlignItems"></selectBtn>
        </div>
        <div style="margin-left: 40px">
          <h1>flex-direction: {{ direction }};</h1>
          <h1>flex-wrap: {{ wrap }};</h1>
          <h1>align-content: {{ alignContent }} ;</h1>
          <h1>justify-content: {{ justifyContent }} ;</h1>
          <h1>align-items: {{ alignItems }} ;</h1>
          <el-button type="success" v-clipboard:copy="copyData" v-clipboard:success="onCopy"
            v-clipboard:error="onError">复制
          </el-button>
        </div>
      </div>
    </div>
    <el-dialog title="子元素统一配置" :visible.sync="dialogVisible" width="30%">
      <div>
        <span>高度:</span>
        <el-input v-model="elementHeight" placeholder="请输入高度" width="29"></el-input>
      </div>
      <div>
        <span>宽度:</span>
        <el-input v-model="elementWidth" placeholder="请输入宽度"></el-input>
      </div>
      <div>
        <span>背景颜色:</span>
        <el-input v-model="elementBgColor" placeholder="请输入背景颜色(aabbcc)"></el-input>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onUnifiedConfiguration">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
  // 复杂
  import complexTs from "./complex.ts";
  import selectBtn from "./selectBtn/selectBtn.vue";
  export default {
    name: "complex",
    components: {
      selectBtn,
    },
    data() {
      return {
        childrenNum: 17, // 子元素数量
        childrenList: [], // 子元素列表

        direction: "row", // 主轴方向
        wrap: "wrap", //是否换行
        alignContent: "normal", // 轴线水平对齐方式
        justifyContent: "normal", // 轴线垂直对齐方式
        alignItems: "normal", // 子元素对齐方式

        // josn
        directionArr: [], // 轴向参数
        wrapArr: [], // 换行参数
        aliginContentArr: [], // 主轴对齐方式参数
        justifyContentArr: [], // 副轴对齐方式
        alignItemsArr: [], // 副轴上的排序方式参数

        dialogVisible: false,
        elementHeight: "",
        elementWidth: "",
        elementBgColor: "",
      };
    },
    created() {
      this.init();
    },
    methods: {
      // 进步器发生改变
      handleChange(data) {
        const res = complexTs.getChildrenList(data);
        this.childrenList = res;
      },
      init() {
        //初始化
        // 子元素数量
        const res = complexTs.getChildrenList(this.childrenNum);
        this.childrenList = res;

        this.directionArr = complexTs.getDirection();
        this.wrapArr = complexTs.getWrap();
        this.aliginContentArr = complexTs.getAlignContent();
        this.justifyContentArr = complexTs.getJustifyContent();
        this.alignItemsArr = complexTs.getAlignItems();
      },
      // 主轴方向
      onDirection(data) {
        this.direction = data;
        this.disabledBtn(this.directionArr, data);
      },
      // 是否换行
      onWrap(data) {
        this.wrap = data;
        this.disabledBtn(this.wrapArr, data);
      },
      //轴线水平对齐方式
      onAlignContent(data) {
        this.alignContent = data;
        this.disabledBtn(this.aliginContentArr, data);
      },
      //轴线垂直对齐方式
      onJustifyContent(data) {
        this.justifyContent = data;
        this.disabledBtn(this.justifyContentArr, data);
      },
      //子元素对齐方式
      onAlignItems(data) {
        this.alignItems = data;
        this.disabledBtn(this.alignItemsArr, data);
      },
      // 禁用元素按钮
      disabledBtn(list, data) {
        list.forEach((item) => {
          if (item.type == data) {
            item.status = true;
          } else {
            item.status = false;
          }
        });
      },
      // 统一配置
      open() {
        this.dialogVisible = true;
      },
      // 统一配置
      onUnifiedConfiguration() {
        if (this.childrenList) {
          this.childrenList.forEach((item) => {
            item.backgrounColor = this.elementBgColor;
            item.height = this.elementHeight;
            item.width = this.elementWidth;
          });
        }
        this.dialogVisible = false;
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
  .main {
    display: flex;
  }

  .main-box {
    width: 50vw;
    height: 80vh;
    // background-color: #ccc;
    border: 1px solid #ccc;
    display: flex;
    overflow: hidden;
  }

  .init-element {
    display: flex;
  }

  .flex-main {
    width: 50vw;
    height: 40vh;
    margin-left: 10px;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;

    h3 {
      padding-right: 12px;
      color: #000;
    }
  }

  .test{

    display: flex;
    align-content: center;
  }
</style>