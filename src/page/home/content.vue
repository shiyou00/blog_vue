<template>
  <div id="wrapper">
    <div class="nav">
      <moduleNav></moduleNav>
    </div>
    <div class="middle clearfix">
      <leftSide class="fl leftSide"></leftSide>
      <div class="article-content fl">
        <h2>{{content.title}}</h2>
        <div class="info">
          <span class="icon-grin"></span>
          <span>{{content.name}}</span>
          <span class="icon-linkedin"></span>
          <span>{{content.date}}</span>
        </div>
        <div class="content-in" v-html="content.content">
        </div>
      </div>
      <div class="rightSide fl">
        <moduleNotice></moduleNotice>
      </div>
    </div>
    <div class="footer">
      <footerModule></footerModule>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import moduleNav from '../../components/common/nav';
  import leftSide from '../../components/common/leftSide';
  import moduleNotice from '../../components/common/notice';
  import footerModule from '../../components/common/footer';
  export default{
    name:"contentView",
    data(){
        return {
            content:{}
        }
    },
    props:['id'],
    components:{
      moduleNav,leftSide,moduleNotice,footerModule
    },
    created(){
      this.fetchArticleContent();
    },
    methods: {
      //通过文章id去查询相应的文章信息
      fetchArticleContent () {
        var that = this;
        this.$ajax.get('/list.json')
          .then(function (response) {
            for(var i=0;i<response.data.length;i++){
                if(response.data[i].id == that.id){
                    that.content = response.data[i];
                }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "../../style/homeIndex.less";
  .article-content{
    width:40%;
    margin:25px;
    box-sizing: border-box;
    background:#fff;
    min-height:440px;
    padding-left:10px;
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
  }
</style>
