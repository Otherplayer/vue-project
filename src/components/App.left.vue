<template>
  <div id="app-left">
    <el-row class="tac">
      <el-col>

        <el-menu default-active="1-2" class="el-menu-vertical"
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#fff"
                 text-color="#666"
                 active-text-color="#333"
                 :collapse="isCollapse">

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="handleOpenItem('1-1')">选项1</el-menu-item>
              <el-menu-item index="1-2" @click="handleOpenItem('1-2')">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>

          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>

          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>


        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name:'left-nav',
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpenItem(item) {
        if (item === '1-1') {
          this.$router.push({ name: 'foo', params: { userId: 123 }});
        }else{
          this.$router.push({ name: 'ele', params: { id: 123 }});
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app-left {
    position: absolute;
    top: 64px;
    left: 0;
    height: calc(100% - 120px);
    width: 200px;
  }
  .el-menu-vertical {
    border: none;
    text-align: left;
  }
  .el-menu>.el-menu-item{
    border-bottom: 1px solid #f7f7f7;
  }
  .el-submenu {
    border-bottom: 1px solid #f7f7f7;
  }

</style>
