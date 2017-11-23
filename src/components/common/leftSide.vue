<template>
  <div id="leftSide">
    <div class="header">
      <img src="../../images/header.jpg" alt="">
    </div>
    <h4 class="info">
      <span>&&</span> -
      <span>**</span> -
      <span>^^</span>
    </h4>
    <div class="hot-tip clearfix">
      <span>前端</span> |
      <span>后台</span>
    </div>
    <div class="position">
      位置：中国：上海
    </div>
    <div class="contract">
      <span class="icon-home2"></span>
      <span class="icon-html-five2"></span>
      <span class="icon-linkedin"></span>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
export default{
    name:"leftSide"
}
</script>

<style rel="stylesheet/less" lang="less">
  @import "../../style/style.less";
#leftSide{
  width:25%;
  height:440px;
  background:#fff;
  box-shadow: 0 2px 5px #ddd;
  box-sizing: border-box;
  .header{
    width:100px;
    height:100px;
    border-radius: 50%;
    overflow: hidden;
    margin:50px auto;
    img{
      width:100%;
      height:100%;
    }
  }
  .info{
    text-align: center;
    color:#565a5f;
    font-size:30px;
    font-weight: bold;
  }
  .hot-tip{
    text-align: center;
    color:#565a5f;
    font-size:18px;
    line-height:40px;
    margin:20px 0;
  }
  .position{
    text-align: center;
    color:#9a9ea3;
    font-size:13px;
  }
  .contract{
    width:80%;
    border-top:1px solid #ddd;
    margin:30px auto 0;
    text-align: center;
    padding-top:20px;
    span{
      margin-right:15px;
      font-size:20px;
      transition:0.3s all ease;
    }
    span:hover{
      color:red;
    }
  }
}
</style>
