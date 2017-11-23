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
          <span>{{content.author}}</span>
          <span class="icon-linkedin"></span>
          <span>{{content.create_time}}</span>
        </div>
        <div class="content-in" v-html="content.content"></div>
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
  import { mapState, mapActions } from 'vuex';
  export default{
    name:"contentView",
    data(){
        return {
        }
    },
    props:['id'],
    computed: mapState([
      'content'
    ]),
    components:{
      moduleNav,leftSide,moduleNotice,footerModule
    },
    created(){
      this.contentData(this.id);
    },
    methods: {
      ...mapActions([
        'contentData'
      ])
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
