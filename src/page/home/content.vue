<template>
  <div id="wrapper">
    <div class="nav">
      <moduleNav></moduleNav>
    </div>
    <div class="middle clearfix">
      <div class="article-content">
        <div class="tool">
          <router-link v-bind:to="{name:'editorIndex',params:{id:id}}">编辑</router-link>
        </div>
        <h2>{{content.title}}</h2>
        <div class="info">
          <span>作者：</span>
          <span>{{content.author}}</span>
          <span>{{content.create_time}}</span>
        </div>
        <div class="content-in markdown-body" v-html="content.htmlValue"></div>
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

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../style/homeIndex.less";
  @import "../../../static/css/reset.scss";
  @import "../../../static/css/github-markdown.css";
  @import "../../../static/css/atom-one-dark.min.css";
  .article-content{
    width:90%;
    display: block;
    box-sizing: border-box;
    background:#fff;
    min-height:440px;
    padding:10px;
    margin:20px auto;
    .tool{
      text-align: right;
      font-size:16px;
      a{
        color:#333;
      }
    }
    h2{
      color:#009688;
      font-size:32px;
    }
    .info{
      margin-top:20px;
      margin-bottom:20px;
      span{
        margin-left:5px;
        color:#22557b;
        font-size:14px;
      }
    }
  }

</style>
