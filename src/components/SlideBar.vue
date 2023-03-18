<template>
  <div class="autherinfo">
    <!--    分为三个栏目 -->
    <div class="authersummay">
      <div class="topbar">作者</div>
      <router-link :to="{
              name:'user_info',
              params:{
                name:userinfo.loginname
              }
            }">
        <img :src="userinfo.avatar_url">
      </router-link>
    </div>
    <div class="recent_topics">
      <div class="topbar">最近主题</div>
      <ul>
<!--        使用计算属性-->
        <li v-for="list in topiclimitby5">
          {{ list.title }}
        </li>
      </ul>
    </div>
    <div class="recent_replies">
      <div class="topbar">最近回复</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideBar",
  data() {
    return {
      userinfo: {} //侧边栏里面的所有数据
    }
  },
  methods: {
    getData() {
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          this.userinfo = res.data.data
        })
        .catch(err => {
          //遇到错误则返回错误信息
          console.log(err)
        })
    }
  },
  //使用计算属性让最近主题仅显示5个
  computed: {
    topiclimitby5() {
      if(this.userinfo.recent_topics){
        return this.userinfo.recent_topics.slice(0,5)
      }
    }
  },
  beforeMount() {
    //挂载前执行
    this.getData()
  },
}
</script>

<style scoped>
.authersummay, .recent_replies, .recent_topics {
  background-color: #fff;
}

.autherinfo {
  width: 328px;
  float: right;
  margin-top: 0;
}

li {
  padding: 3px 0;
}

.recent_replies ul, .recent_topics ul {
  margin-top: 0px;
  margin-bottom: 0px;
  list-style: none;
  padding-left: 14px;
}

ul a {
  font-size: 12px;
  text-decoration: none;
  color: #778087;
}

.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

img {
  height: 48px;
  width: 48px;
  border-radius: 3px;
  margin: 10px;
}

.loginname {
  width: 100px;
  float: right;
  margin-top: 22px;
  margin-right: 159px;
  font-size: 14px;
}

.loginname a {
  text-decoration: none;
  color: #778087;
}

.authersummay .topbar {
  margin-top: 0px;
}
</style>
