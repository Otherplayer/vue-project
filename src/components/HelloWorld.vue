<template>
  <div class="hello">

    <div>{{msg}}</div>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped lang="less">
  @import "./../css/app";

  .hello {
    color: @color-blue;
  }

</style>
