<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/simple">
        <el-button type="primary"> 简单 </el-button>
      </router-link> -->
      <!-- <router-link to="/complex">
        <el-button type="danger"> 复杂 </el-button>
      </router-link> -->
    </div>
    <router-view />
  </div>
</template>
<script>
  import http from '@/c/http.js'

  export default {
    name: "App",
    async created() {
      const requsetObj = {
        url: 'addClickNumber',
        params: {
          time: new Date().getTime(),
          type: 'flex',
          number: '1',
        }
      }
      const res = await http.requestPost(requsetObj)
    },
  }
</script>

<style lang="scss" scoped>

</style>