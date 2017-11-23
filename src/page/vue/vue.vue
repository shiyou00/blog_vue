<template>
  <div id="vue">
    <!--DOM绑定数据-->
    <div v-bind:title="msg">{{message}}</div>

    <!--条件判断-->
    <div v-if="seen">我是true所以可以看到</div>
    <div v-else>我是false</div>
    <!--模块条件渲染-->
    <template v-if="seen">
      <h1>该模块显示</h1>
    </template>
    <template v-else>
      <h1>该模块不显示</h1>
    </template>
    <!--v-show只是改变css的display属性-->
    <div v-show="seen">我是show所以可以看到</div>

    <!--循环-->
    <ul>
      <li v-for="(todo,index) in todos" v-bind:key="index" v-bind:title="todo.text">
        {{index}} - {{todo.text}}
      </li>
    </ul>
    <!--遍历json-->
    <div v-for="(value,key,index) in classObject">
      {{index}} - {{key}} -- {{value}}
    </div>
    <!--绑定事件-->
    <div v-on:click="reverseMessage">{{message}}</div>

    <!--v-model实现表单输入和应用状态之间的双向绑定-->
    <input type="text" v-model="message">
    <p>{{message}}</p>

    <!--v-once绑定的数据，不会变化，注意该几点上绑定上的所有属性都不会变化-->
    <p v-once>这个并不会变化{{message}}</p>

    <!--动态渲染HTML,会引起XSS攻击-->
    <div v-html="rawHtml"></div>

    <!--v-bind动态绑定属性值-->
    <p v-bind:id="vId">222</p>

    <!--支持所有js表达式-->
    <ul>
      <li>{{num+1}}</li>
      <li v-bind:id="'list-'+vId">{{bok?'为真显示':'为假显示'}}</li>
    </ul>

    <!--
      模板表达式被放在沙盒中，只能访问全局变量的白名单：Math和Date等，访问不了用户自定义的全局变量
    -->
    <div>时间戳：{{new Date().getTime()}}</div>

    <!--修饰符：特殊方式对待默写指令,这里的 .prevent 是指触发的事件调用event.preventDefault()-->
    <form action="" v-on:submit.prevent="onSubmit"></form>

    <!--vue为最常用的两个指令进行所写v-bind:缩写成:-->
    <a :href="href">链接</a>

    <!--v-on缩写成@-->
    <a href="javascript:;" @click="reverseMessage">{{message}}</a>

    <!--
    绑定class
    下面这个是基础的绑定，然后非常灵活的绑定方式，可以直接绑定一个对象在上面，和绑定计算属性
    通过动态改变class值，可以改变一些不能展示的内容，或者改变运动方式
    -->
    <div v-bind:class="{active:isActive}">是否绑定了class</div>
    <!--绑定一个对象-->
    <div v-bind:class="classObject">绑定class对象</div>
    <!--绑定返回对象的计算属性-->
    <div v-bind:class="classObj">绑定返回对象的计算属性</div>

    <!--绑定style,绑定形式同class相似都是非常灵活-->
    <div v-bind:style="{color:activeColor,fontSize:fontSize}">绑定样式</div>
  </div>
</template>

<script>
  /* eslint-disable */
export default{
  name:"vue",
  //data必须是一个函数，返回组件所需数据
  data(){
    return {
      message:'hello world',
      msg:"页面加载于："+new Date().toLocaleString(),
      seen:true,
      isActive:true,
      error:false,
      todos:[
        {text:'js',id:1},
        {text:'java',id:2},
        {text:'css',id:3}
      ],
      rawHtml:'<span style="color:red;">1122233344</span>',
      vId:"123",
      num:234,
      bok:false,
      href:"http://www.baidu.com",
      classObject:{
        active:true,
        'text-danger': false
      },
      activeColor:'red',
      fontSize:'30px'
    }
  },
  //方法区：定义一些组件所需方法
  methods:{
      reverseMessage:function(){
          this.message = this.message.split('').reverse().join('');
      }
  },
  //计算属性：对于一些数据进行逻辑运算，避免在模板中写的过于复杂
  computed:{
      classObj(){
        return {
          active: this.isActive && !this.error,
          'text-danger': !this.error
        }
      }
  },
  /**
   * 以下为生命周期，好比动物的一生，什么时期干什么事情
   *
   */
  beforeCreate: function () {
    console.group('beforeCreate 创建前状态===============》');
    console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
    console.log("%c%s", "color:red","data   : " + this.$data); //undefined
    console.log("%c%s", "color:red","message: " + this.message); //undefined
  },
  created: function () {
    console.group('created 创建完毕状态===============》');
    console.log("%c%s", "color:red","el     : " + this.$el); //undefined
    console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red","message: " + this.message); //已被初始化
  },
  beforeMount: function () {
    console.group('beforeMount 挂载前状态===============》');
    console.log("%c%s", "color:red","el     : " + (this.$el)); //undefined
    console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red","message: " + this.message); //已被初始化
  },
  mounted: function () {
    console.group('mounted 挂载结束状态===============》');
    console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
    console.log(this.$el);
    console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red","message: " + this.message); //已被初始化
  },
  beforeUpdate: function () {
    console.group('beforeUpdate 更新前状态===============》');
    console.log("%c%s", "color:red","el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red","data   : " + this.$data);
    console.log("%c%s", "color:red","message: " + this.message);
  },
  updated: function () {
    console.group('updated 更新完成状态===============》');
    console.log("%c%s", "color:red","el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red","data   : " + this.$data);
    console.log("%c%s", "color:red","message: " + this.message);
  },
  beforeDestroy: function () {
    console.group('beforeDestroy 销毁前状态===============》');
    console.log("%c%s", "color:red","el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red","data   : " + this.$data);
    console.log("%c%s", "color:red","message: " + this.message);
  },
  destroyed: function () {
    console.group('destroyed 销毁完成状态===============》');
    console.log("%c%s", "color:red","el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red","data   : " + this.$data);
    console.log("%c%s", "color:red","message: " + this.message)
  }
}
</script>

<style>

</style>
