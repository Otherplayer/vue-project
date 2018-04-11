<template>
  <div class="login">
    <el-dialog title="登录" v-bind:visible.sync="dialogFormVisible" :center="true" width="350px">
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="form.username" placeholder="用户名" auto-complete="off" clearable>
            <i slot="prepend" class="fa fa-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="密码" auto-complete="off" type="password" clearable>
            <i slot="prepend" class="fas fa-key"></i>
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="medium" @click="dialogLogin">登 录</el-button>
        <!--<el-button type="primary" @click="visible = false"></el-button>-->
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'login',
    props: ['visible'],
    data () {
      return {
        form: {
          username: '',
          password: ''
        },
        formLabelWidth: '80px'
      }
    },
    methods : {
      dialogLogin:function () {
        this.$emit('dialogLogin', null);
      }
    },
    computed: {
      dialogFormVisible: {
        get: function () {
          return this.visible
        },
        set: function (newValue) {
          this.$emit('dialogLoginCancel', null);
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
