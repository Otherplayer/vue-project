<template>
  <div id="app">
    <app-header />
    <app-left />
    <app-main />
  </div>
</template>

<script>

import AppHeader from "./components/App.header";
import AppLeft  from "./components/App.left";
import AppMain from "./components/App.main";

export default {
  components: {
    AppHeader,
    AppLeft,
    AppMain
  },
  name: 'App',
  data () {
    return {
      msg: 'Hello World'
    }
  },

  created: function () {
    // console.group('created 创建完毕状态===============》');
    // console.log("%c%s", "color:red","el     : " + this.$el); //undefined
    // console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
    // console.log("%c%s", "color:red","message: " + this.message); //已被初始化
  },

  mounted: function () {
    // console.group('mounted 挂载结束状态===============》');
    // console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
    // console.log(this.$el);
    // console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
    // console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    // let self = this;
    // this.$bus.on('show-login', function (id) {
    //   self.showRegister();
    // })
  },

  updated: function () {
    // console.group('updated 更新完成状态===============》');
    // console.log("%c%s", "color:red","el     : " + this.$el);
    // console.log(this.$el);
    // console.log("%c%s", "color:red","data   : " + this.$data);
    // console.log("%c%s", "color:red","message: " + this.message);
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

<style scoped lang="less">
  @import "./css/app";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: @color-text-dark;
    height: 100%;
  }
</style>
