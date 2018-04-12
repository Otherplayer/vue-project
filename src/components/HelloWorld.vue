<template>
  <div class="hello">

    <div>{{msg}}</div>

    <el-row>
      <el-button type="primary" plain @click="socketConnect">连接</el-button>
      <el-button type="success" plain @click="socketSend">发送hello world!</el-button>
      <el-button type="info" plain @click="socketClose">断开</el-button>
    </el-row>


  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ws: null,
      readyState:0
    }
  },
  created: function () {
    let self = this;
    self.isSupportSocket();
    // self.ws = new WebSocket("ws://121.40.165.18:8088");
    self.ws = new WebSocket("ws://localhost:8088");
    this.ws.onopen = function() {
      self.readyState = self.ws.readyState;
      if (self.readyState === 1) {
        self.showNotify('连接成功',self.readyState);
      }else{
        self.showNotify('连接失败',self.readyState);
      }
    };
    this.ws.onmessage = function (evt) {
      console.log(evt.data);
      self.showNotify('收到数据',evt.data);
    };
    this.ws.onError = function (err) {
      self.showNotify('出错了',err);
    }
    this.ws.onclose = function() {
      self.showNotify('连接已关闭','---');
    };
  },
  mounted: function () {

  },
  methods: {
    isSupportSocket () {
      if ("WebSocket" in window) {
        return true;
      }
      // 浏览器不支持 WebSocket
      alert("您的浏览器不支持 WebSocket!");
      return false;
    },
    socketConnect () {
      this.ws = new WebSocket("ws://121.40.165.18:8088");
    },
    socketSend () {
      let self = this;
      if (self.readyState === 1) {
        self.ws.send("hello world!");
        self.showNotify('发送数据','hello world!');
      }else{
        self.showNotify('Error','请先连接');
      }
    },
    socketClose () {
      let self = this;
      self.ws.close();
    },
    showNotify (title, message) {

      // const h = this.$createElement;
      // this.$notify({
      //   title: title,
      //   message: h('i', { style: 'color: teal'}, message)
      // });

      this.$notify({
        title: title,
        message: message,
        duration: 0
      });

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped lang="less">
  @import "./../css/app";

  .hello {
    color: @color-blue;
    height: 2000px;
  }

</style>
