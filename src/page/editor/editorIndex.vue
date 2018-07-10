<template>
  <div id="editor">
    <div class="common-ipt">
      <label for="title">标题：</label>
      <input type="text" placeholder="文章标题" id="title" v-model="content.title" >
    </div>
    <div class="common-ipt">
      <label for="author">作者：</label>
      <input type="text" placeholder="作者名称" id="author" v-model="content.author">
    </div>
    <div class="common-ipt">
      <label for="keyWord">关键词：</label>
      <input type="text" placeholder="关键词,分割" id="keyWord" v-model="content.keyword">
    </div>
    <div class="indexContainer">
      <div class="maskContainer" v-if="dilogStatus">
        <div class="contentContainer">
          <div class="closeBtnContainer" @click="closeMaskFn"></div>
          <textarea class="showAreaContainer" v-model="msgShow" readonly></textarea>
        </div>
      </div>
      <div class="editorContainer">
        <markdown
          :mdValuesP="content.mdValue"
          :fullPageStatusP="false"
          :editStatusP="true"
          :previewStatusP="true"
          :navStatusP="true"
          :icoStatusP="true"
          @childevent="childEventHandler"
        ></markdown>
      </div>
    </div>
    <div class="btn">
      <button v-if="this.type" @click="submitDate">确认提交</button>
      <button v-else>我是false</button>
    </div>
  </div>

</template>
<script>
  /* eslint-disable */
  import markdown from '../../components/common/markdown'
  import { mapState, mapActions } from 'vuex';
  export default{
    name:'editorIndex',
    data() {
      return {
        msgShow:'弹窗展示的内容',
        dilogStatus:false,
        msg: {
          mdValue:''
        },
        title:'',
        author:'',
        keyWord:'',
        type:true
      }
    },
    props: ['id'],
    components: {
      markdown
    },
    computed:{
      ...mapState([
        'content'
      ])
    },
    created(){
      if(this.id>0){
          //编辑状态
        console.log("编辑状态");
        this.contentData(this.id);
      }else{
        console.log("新增");
      }
    },
    methods: {
      submitDate(){
        let that = this;
        that.$ajax({
          method: 'post',
          url: 'http://localhost:8082/article/add',
          data: {
            title: that.title,
            author: that.author,
            keyWord:that.keyWord,
            mdValue:that.msg.mdValue,
            htmlValue:that.msg.htmlValue
          }
        }).then(response=>{
          console.log(response);
          if(response.data.c=100){
            var id = response.data.insertId;
            that.title='';
            that.keyWord='';
            that.msg.mdValue='';
            //跳转界面到首页
            that.$router.push({ path: `/content/${id}` }); // -> /user/123
          }
        }).catch(err=>{
          console.log(err);
        });
      },
      childEventHandler:function(res){
        this.msg=res;
      },
      getMdValueFn:function(){
        this.msgShow=this.msg.mdValue;
        this.dilogStatus=true;
      },
      getHtmlValueFn:function(){
        this.msgShow=this.msg.htmlValue;
        this.dilogStatus=true;
      },
      closeMaskFn:function(){
        this.msgShow='';
        this.dilogStatus=false;
      },
      ...mapActions([
        'contentData'
      ])
    }
  }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
  #editor{
    width:100%;
    height:100%;
    .common-ipt{
      width:90%;
      margin:20px auto;
      input{
        width:90%;
        height:30px;
        outline: none;
        border:1px solid #ddd;
        text-indent: 2em;
      }
    }
    .btn{
      width:90%;
      margin:20px auto;
      button{
        width:30%;
        height:60px;
        border: none;
        background:#409EFF;
        color:#fff;
        font-size:18px;
        outline: none;
      }
    }
  }
  .show{
    position: absolute;
    left: 0;
    top: 0;
  }
  .indexContainer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .maskContainer{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.5);
  // z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  .contentContainer{
    width: 60%;
    height: 60%;
    background: #fefefe;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
  .showAreaContainer{
    height: 100%;
    width: 100%;
    outline: none;
    background: #eee;
    display: block;
    resize: none;
    padding: 10px;
    box-sizing: border-box;
  }
  .closeBtnContainer{
    position: absolute;
    height: 30px;
    width: 30px;
    right: -40px;
    top: -40px;
    border:1px solid #fff;
    border-radius: 50%;
  &::before{
     content: '';
     position: absolute;
     width: 70%;
     height: 2px;
     display: block;
     background: #fff;
     left: 15%;
     top: calc(50% - 1px);
     transform: rotate(45deg);
     -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
   }
  &::after{
     content: '';
     position: absolute;
     width: 70%;
     height: 2px;
     display: block;
     background: #fff;
     left: 15%;
     top: calc(50% - 1px);
     transform: rotate(-45deg);
     -webkit-transform: rotate(-45deg);
     -moz-transform: rotate(-45deg);
   }
  }

  }

  }

  .editorContainer {
    width: 90%;
    height: 90%;
    border: 1px solid #ddd;
  }
</style>
