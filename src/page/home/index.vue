<template>
  <div id="wrapper">
    <div class="nav">
      <moduleNav></moduleNav>
    </div>
    <div class="middle clearfix">
      <leftSide class="fl leftSide"></leftSide>
      <div class="article-list fl">
        <moduleArticle
          v-for="(article,index) in articleList"
          v-bind:article="article"
          v-bind:key="article.id"
        ></moduleArticle>
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
  import moduleArticle from '../../components/common/article';
  import moduleNotice from '../../components/common/notice';
  import footerModule from '../../components/common/footer';
  import { mapState, mapActions } from 'vuex'
  export default{
    name:"homeIndex",
    components:{
      moduleNav,leftSide,moduleArticle,moduleNotice,footerModule
    },
    computed: mapState([
      'articleList'
    ]),
    data:function(){
        return {

        }
    },
    methods:{
      ...mapActions([
        'initializeData'
      ]),
    },
    created(){
      this.initializeData();
    }
  }
</script>

<style scoped lang="less">
@import "../../style/homeIndex.less";
</style>
