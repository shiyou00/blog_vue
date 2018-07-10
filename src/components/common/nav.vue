<template>
  <div id="nav" class="clearfix">
    <h1 class="fl">
      <router-link to="/">
        <img src="../../images/header.jpg" alt="">
      </router-link>

    </h1>
    <div class="icon-box fr">
      <span class="icon-home2"></span>
    </div>
    <ul class="nav-ul fr clearfix">
      <li>首页</li>
      <li>前端</li>
      <li>后台</li>
    </ul>
    <div class="add fr"><router-link to="/editor/0">新增文章</router-link></div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default{
    name:"moduleNav"
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "../../style/style.less";
  #nav{
    width:100%;
    height:50px;
    background:#fff;
    box-shadow: 0 2px 5px #ddd;
    line-height:50px;
    .nav-ul{
      li{
        float:left;
        margin-right:20px;
      }
    }
    h1{
      width:43px;
      height:43px;
      border-radius: 50%;
      overflow: hidden;
      margin-left:30px;
      img{
        width:100%;
        height:100%;
      }
    }
    .add{
      margin-right:25px;
      a{
        color:red;
      }
    }
  }
  .icon-box{
    margin-right:30px;
    height:50px;
    line-height:50px;
  }
</style>
