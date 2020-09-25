<template>
  <div class="about">
    <div class="about-left">
      <img :src="imgUrl" alt />
    </div>
    <div class="about-right">
      <h2>{{name}}</h2>
      <h2>{{text}}</h2>
      <a :href="vueUrl">点击进入学习VUE</a>
    </div>
  </div>
</template>





<script>
export default {
  data() {
    return {
      showLogin: true,
      homeContent: false,
      imgUrl: "/img/logo.82b9c7a5.png",
      name: "渐进式",
      text: "JavaScript 框架",
      vueUrl: "https://cn.vuejs.org/v2/guide/"
    };
  }
};
</script>

<style lang="less" scoped>
.about {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .about-left {
    text-align: right;
    width: 45%;
  }
  .about-right {
    text-align: left;
    width: 48%;
    a {
      display: inline-block;
      margin-top: 30px;
      text-decoration: none;
      color: #41b883;
      border: 1px solid #41b883;
      padding: 10px 20px;
      border-radius: 21px;
      transition: all 0.4s ease-in-out;
      &:hover {
        background-color: #41b883;
        color: #ffffff;
      }
    }
  }
}
</style>













