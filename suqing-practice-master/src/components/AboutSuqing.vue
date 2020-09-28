<template>
  <div class="about">
    <div class="about-content">
      <div class="about-left">
        <img :src="imgUrl" alt />
      </div>
      <div class="about-right">
        <h2>{{name}}</h2>
        <h2>{{text}}</h2>
        <a :href="vueUrl">点击进入学习VUE</a>
      </div>
    </div>
    <div>
        <h3>其他链接</h3>
      <ul>
        <li>
          <a :href="uniUrl" target="_blank">
            <img :src="uniappUrl" alt />
          </a>
        </li>
        <li>
          <a href>
            <img :src="imoocUrl" alt />
          </a>
        </li>
      </ul>
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
      vueUrl: "https://cn.vuejs.org/v2/guide/",
      uniappUrl: "img/icons/dcloud.gif",
      imoocUrl:'img/icons/imooc-sponsor.png',
      uniUrl:'https://www.dcloud.io/?hmsr=vuejsorg&hmpl=&hmcu=&hmkw=&hmci='
    };
  }
};
</script>

<style lang="less" scoped>
.about {
      width: 1200px;
    margin: 0 auto;
  .about-content {
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
  ul{
      li{
          list-style: none;
          width: 200px;
          display: inline-block;
          padding-right: 30px;
          a{
              img{
                  max-width: 100%;
              }
          }
      }
  }
}
</style>













