<template>
  <router-link v-bind:to="{name:'contentView',params:{id:article.id}}">
    <div class="article" v-bind:data-id="article.id">
      <h2>{{article.title}}</h2>
      <div class="info">
        <span class="icon-grin"></span>
        <span>{{article.author}}</span>
        <span class="icon-linkedin"></span>
        <span>{{article.create_time}}</span>
      </div>
      <div class="article-content">{{delHtmlTag}}</div>
      <div class="key">
        <i class="icon-file-text2"></i>
        <span>{{article.keyWord}}</span>
      </div>
    </div>
  </router-link>

</template>

<script>
  /* eslint-disable */
  export default{
    name:'moduleArticle',
    props: ['article'],
    computed:{
      delHtmlTag(){
        return this.article.htmlValue.replace(/<[^>]+>/g,"");
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
.article{

  background:#fff;
  box-sizing: border-box;
  padding:20px;
  box-shadow: 0 2px 5px #ddd;
  margin-bottom:20px;
  h2{
    color:#009688;
    font-size:32px;
  }
  .info{
    margin-top:20px;

    span{
      margin-left:5px;
      color:#22557b;
      font-size:14px;
    }
  }
  .article-content{
    color:#565a5f;
    font-size:15px;
    padding-bottom:10px;
    line-height:32px;
    border-bottom:1px solid #ddd;
  }
  .key{
    color:#225555;
    padding-top:20px;
    i{
      margin-right:5px;
    }
    span{
      margin-right:5px;
    }

  }
}
</style>
