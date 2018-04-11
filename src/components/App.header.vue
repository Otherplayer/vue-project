<template>
  <div id="app-header">
    <!--logo-->
    <div class="header-logo">
        Fresh Box
    </div>
    <!--setting-->
    <div class="header-setting">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px;cursor: pointer">&nbsp;&nbsp;小虎</i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name:'app-header'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app-header {
    position: fixed;
    top:0;
    height: 63px;
    width: 100%;
    text-align: left;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
  }
  .header-logo {
    display: inline-block;
    width: 200px;
    height: 63px;
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    line-height: 63px;
    color: #666666;
  }
  .header-setting {
    height: 63px;
    line-height: 63px;
    text-align: center;
    width: 100px;
    float: right;
  }
</style>
