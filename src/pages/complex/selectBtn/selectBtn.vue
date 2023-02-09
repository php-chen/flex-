<template>
  <div class="btn-box">
    <div v-for="item in list" :key="item.name" class="btn">
      <el-button type="success" @click="onBtn(item.type)" :disabled="item.status">{{ item.name }}</el-button>
    </div>
  </div>
</template>
<script>
/**
 * @description 按钮组
 * @param {Array} list 按钮组
 * @function onBtn 点击按钮
 */
export default {
  name: "selectBtn",
  props: {
    list: {
      type: Array,
      default: null,
    },
  },
  methods: {
    onBtn(type) {
      this.$emit("onBtn", type);
    },
  },
};
</script>
<style scoped lang="scss">
.btn-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
 
}

.btn {
  padding: 4px 3px;
}
</style>