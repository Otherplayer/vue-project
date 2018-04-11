<template>
  <div class="ele">


    <div>
      <el-alert
        title="成功提示的文案"
        type="success">
      </el-alert>
      <el-alert
        title="消息提示的文案"
        type="info">
      </el-alert>
      <el-alert
        title="警告提示的文案"
        type="warning">
      </el-alert>
      <el-alert
        title="错误提示的文案"
        type="error">
      </el-alert>
      <el-button :plain="true" @click="open">通知打开登录</el-button>
      <el-button :plain="true" @click="openVn">VNode</el-button>
    </div>

    <div>
      <!-- Form -->
      <el-button type="text" @click="dialogFormRVisible = true">注册</el-button>
      <el-button type="text" @click="dialogFormLVisible = true">登录</el-button>

      <register :visible="dialogFormRVisible" @dialogRegister="dialogRegister" @dialogRegisterCancel="dialogRegisterCancel"></register>
      <login :visible="dialogFormLVisible" @dialogLogin="dialogLogin" @dialogLoginCancel="dialogLoginCancel"></login>
    </div>



    <div>
      <el-button
        type="primary"
        @click="openFullScreen"
        v-loading.fullscreen.lock="fullscreenLoading">
        Loading - 指令方式
      </el-button>
      <el-button
        type="primary"
        @click="openFullScreen2">
        Loading - 服务方式
      </el-button>
    </div>


    <div>
      <el-button
        plain
        @click="openNotification">
        可自动关闭
      </el-button>
      <el-button
        plain
        @click="openNotification2">
        不会自动关闭
      </el-button>
    </div>



    {{ $route.params.id }}
  </div>
</template>

<script>

  import Register from "./../components/Register";
  import Login from "./../components/Login";

  export default {
    name: 'ele',
    components: {Register,Login},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        fullscreenLoading: false,
        dialogFormRVisible: false,
        dialogFormLVisible: false,
        form: {
          username: '',
          password: '',
          confirmPassword: ''
        },
        formLabelWidth: '80px'
      }
    },
    mounted () {
      console.log(this.$route.params);
    },
    computed: {

    },
    methods: {
      open() {
        // this.$message('这是一条消息提示');
        // 触发组件 A 中的事件
        this.$bus.emit('show-login', 1);
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      },
      dialogRegister () {
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
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      },
      openNotification() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      },

      openNotification2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      }
      // ,
      // goBack () {
      //   window.history.length > 1
      //     ? this.$router.go(-1)
      //     : this.$router.push('/')
      // }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
