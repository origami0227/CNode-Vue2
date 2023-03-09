<template>
  <div class="PostList">
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
      posts: [],//代表页面的列表数组
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
.PostList {
  background-color: #e1e1e1;
}

.posts {
  margin-top: 10px;
}

.PostList img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}

ul {
  list-style: none;
  width: 100%;
  max-width: 1344px;
  margin: 0 auto;
}
ul li:not(:first-child) {
  padding: 9px;
  font-size: 15px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
  font-weight: 400;
  background-color: white;
  color: #333;
  border-top: 1px solid #f0f0f0; /*列表样式*/
}
li:not(:first-child):hover {
  background: #f5f5f5; /*悬浮在非第一个li时变色*/
}
li:last-child:hover {
  background: white;
}
li span {
  line-height: 30px;
}
</style>
