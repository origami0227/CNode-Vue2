<template>
  <div>
    <div class="loading">
      <!--      在数据未返回的时候，显示正在loading的gif-->
      <img src="../assets/loading.gif" v-if="isLoading">
    </div>
    <!--    主题帖子列表-->
    <div>
      <ul>
        <li v-for="post in posts">
          <img :src="post.author.avatar_url" alt="">
        </li>
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
      posts:[],//代表页面的列表数组
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
          this.isLoading = false // 加载成功后去除动画
          this.posts = res.data.data
        })
        .catch(err => {
          //处理返回失败后的问题
          console.log(err)
        })
    }
  },
  beforeMount() {
    //挂载前执行
    this.isLoading = true //加载成功之前显示loading
    this.getData() //页面加载之前获取数据
  }
}
</script>

<style scoped>

</style>
