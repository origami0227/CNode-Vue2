<template>
  <div>
    <div class="loading">
      <!--      在数据未返回的时候，显示正在loading的gif-->
      <img src="../assets/loading.gif" v-if="isLoading">
    </div>
    <!--    主题帖子列表-->
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  data() {
    return {
      isLoading: false, //初始默认false
    }
  }
}
</script>

<style scoped>

</style>
