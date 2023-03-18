<template>
  <div id="app">
    <Header/>
    <div class="main">
      <RouterView name="main"/>
      <RouterView name="slidebar"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import PostList from "./components/PostList";
import SlideBar from "./components/SlideBar";

export default {
  name: 'App',
  components: {
    Header,
    PostList,
    SlideBar
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #e1e1e1;
}

.main {
  width: 80%;
  margin: 0 auto;
}
</style>
