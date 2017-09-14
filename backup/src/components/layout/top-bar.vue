<template>
  <div class="top-bar">
    <div class="top-bar-main">
        <div class="top-bar-left">
          <div class="logo">
            <img src="../../assets/BlackCat.jpeg" alt="this-is-logo" />
          </div>
          <div class="logo-describe">
            BlackCat
          </div>
        </div>
        <div class="top-bar-right-box">
          <div class="username">
            username
          </div>
          <div class="log-out">
            退出
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
 /**/
.top-bar {
  height: 36px;
  width: 100%;
  border-bottom: 1px solid #d4d4d4;
  margin-bottom:20px;
  .top-bar-main {
    display: inline-block;
    padding: 0 200px;
    width: 100%;
    .top-bar-left {
      display: inline-block;
      vertical-align: bottom;
      .logo {
        margin: 2px 0 2px 0;
        display: inline-block;
      }
      .logo-describe {
        margin-left: 30px;
        display: inline-block;
        text-align: center;
      }
    }
    .top-bar-right-box {
      height: 26px;
      line-height: 26px;
      /*margin: 2px 10px 2px 0;*/
      width: 180px;
      vertical-align: top;
      border: 1px solid #d4d4d4;
      border-radius: 3px;
      display: inline-block;
      float: right;
      margin-top: 5px;
      .username {
        height: 26px;
        line-height: 26px;
        display: inline-block;
        margin-left: 10px;
      }
      .log-out {
        /*float: right;*/
        height: 26px;
        line-height: 26px;
        margin-right: 10px;
        display: inline-block;
        margin-left:50px;
      }
    }
  }
}
.logo img {
  width: 32px;
  height: 32px;
  display: inline-block;
}
</style>
