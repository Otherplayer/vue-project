<template>
  <div class="ele">
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

    <!-- Form -->
    <el-button type="text" @click="dialogFormRVisible = true">注册</el-button>
    <el-button type="text" @click="dialogFormLVisible = true">登录</el-button>
    <register :visible="dialogFormRVisible" @dialogRegister="dialogRegister" @dialogRegisterCancel="dialogRegisterCancel"></register>
    <login :visible="dialogFormLVisible" @dialogLogin="dialogLogin" @dialogLoginCancel="dialogLoginCancel"></login>

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
      open2() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
      goBack () {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
