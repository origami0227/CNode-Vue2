<template>
  <div class="PostList">
    <div class="loading" v-if="isLoading">
      <!--   在数据未返回的时候，显示正在loading的gif-->
      <img src="../assets/loading.gif">
    </div>
    <!--    主题帖子列表-->
    <div class="posts" v-else>
      <ul>
        <li>
          <div class="toobar">
            <span>全部</span>
            <span>精华</span>
            <span>分享</span>
            <span>问答</span>
            <span>招聘</span>
          </div>
        </li>
        <li v-for="post in posts">
          <!--  头像-->
          <img :src="post.author.avatar_url" alt="">
          <span class="allcount">
         <!--  回复/浏览-->
            <span class="reply_count">{{ post.reply_count }}</span>
            /{{ post.visit_count }}
          </span>
          <!--帖子分类  动态绑定class  -->
          <span
            :class="[{put_good:(post_good == ture),put_top:(post_top == ture),'topiclist-tab':(post.good  != true && post.top  != true)}]">
            <span>
              {{ post | tabFormatter }}
            </span>
          </span>
          <!--  标题-->
          <!--RouterLink的名称和查询参数-->
          <RouterLink :to="{
            name:'post_content',
            params:{
             id:post.id,
             name:post.author.loginname,
            }}">
             <span>
            {{ post.title }}
          </span>
          </RouterLink>
          <!--  最终回复时间 -->
          <span class="last_reply">
            {{ post.last_reply_at | formatDate }}
          </span>
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

.allcount {
  width: 70px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
}

.reply_count {
  color: #9e78c0;
  font-size: 13px;
}

.put_good, .put_top {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin-right: 10px;
}

.topiclist-tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
}

.last_reply {
  text-align: right;
  min-width: 50px;
  display: inline-block;
  white-space: nowrap;
  float: right;
  color: #778087;
  font-size: 12px;
}

.toobar {
  height: 40px;
  background-color: #f5f5f5;
}

.toobar span {
  font-size: 14px;
  color: #80bd01;
  line-height: 40px;
  margin: 0 10px;
  cursor: pointer;
}

.toobar span:hover {
  color: #9e78c0;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

.loading {
  text-align: center;
  padding-top: 300px;
}
</style>
