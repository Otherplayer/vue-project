<template>
  <div id="app-main">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view />

    <register :visible="dialogFormRVisible" @dialogRegister="dialogRegister" @dialogRegisterCancel="dialogRegisterCancel"></register>
    <login :visible="dialogFormLVisible" @dialogLogin="dialogLogin" @dialogLoginCancel="dialogLoginCancel"></login>

  </div>
</template>

<script>

  import Register from "./../components/Register";
  import Login from "./../components/Login";


  export default {
    name:'app-main',
    components: {
      Register,
      Login
    },
    data () {
      return {
        dialogFormRVisible: false,
        dialogFormLVisible: false
      }
    },
    methods: {
      showRegister () {
        this.dialogFormRVisible = true;
      },
      showLogin () {
        this.dialogFormLVisible = true;
      },
      dialogRegister (data) {
        console.log(data);
        this.dialogFormRVisible = false;
      },
      dialogLogin () {
        this.dialogFormLVisible = false;
      },
      dialogRegisterCancel () {
        this.dialogFormRVisible = false;
      },
      dialogLoginCancel () {
        this.dialogFormLVisible = false;
      },
    },

    mounted: function () {

      let self = this;
      this.$bus.on('show-login', function (id) {
        self.showRegister();
      })

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app-main {
    position: absolute;
    right: 0;
    top: 64px;
    width: calc(100% - 201px);/**201是左侧导航的宽度*/
    height: calc(100% - 65px);/**65是顶部导航的宽度*/
    background-color: #f7f7f7;
    overflow-y: scroll;
  }
</style>
