<template>
  <!--  Vue2中 template中有且仅有一个根组件-->
  <div class="header">
    <img src="../assets/cnodejs_light.svg" alt="">
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">新手入门</a></li>
      <li><a href="#">API</a></li>
      <li><a href="#">关于</a></li>
      <li><a href="#">注册</a></li>
      <li><a href="#">登陆</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "Header",
}
</script>

<style scoped>
.header {
  background-color: #5a5555;
  height: 50px;
}

img {
  max-width: 120px;
  margin-left: 50px;
  margin-top: 10px;
}
ul {
  list-style: none;
  /*做一个浮动布局让其浮header的上方*/
  float: right;
  margin: 10px 5px;
}
li {
  /*转化为行内块元素实现横向排列*/
  display: inline-block;
  padding:10px 15px
}
a {
  text-decoration: none;
  color: #ccc;
  font-size: 14px;
}
</style>
