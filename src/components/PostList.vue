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
  },
  methods: {
    getData() {
      //参数是page和limit
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        page: 1,
        limit: 20,
      })
        .then(res => {
          debugger
        })
        .catch(err => {
          //处理返回失败后的问题
          console.log(err)
        })
    }
  },
  beforeMount() {
    //挂载前执行
    this.getData()
  }
}
</script>

<style scoped>

</style>
