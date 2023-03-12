import Vue from 'vue'
import Router from 'vue-router'
import Article from "../components/Article";
import PostList from "../components/PostList";

Vue.use(Router)

export default new Router({
  routes: [
    { //根路径
      name: 'root',
      path: '/',
      components: {
        main: PostList
      }
    },
    {
      name: 'post_content',
      path: '/topic/:id&author=:name',
      components: {
        main: Article
      }
    },
  ]
})
