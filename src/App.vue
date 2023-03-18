<template>
  <div id="app">
    <Header/>
    <div class="main">
      <RouterView name="slidebar"/>
      <RouterView name="main"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import PostList from "./components/PostList";

export default {
  name: 'App',
  components: {
    Header,
    PostList,
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
