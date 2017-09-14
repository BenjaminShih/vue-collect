<template>
  <h1>我是详情页<h1>
  <h2><button type="button" name="button" @click="doIt" class="btn btn-default">我是弹出按钮</button></h2>
  <h2><s-confirm confirm-title="哈哈哈" :show-confirm.sync="showConfirm" :on-confirm="goToIndex" classes="btn btn-primary">增强后的弹出框</s-confirm></h2>
  <h2>
    <background-shade v-show="show" :on-click="bgsClose">
      <img src='../../assets/image/sanyecao.jpg' v-show="show" class="viewer" transition="scale">
    </background-shade>
    <button @click="imgClick">点我展开图片</button>
  </h2>
  <h2><a href="#"><md-button>涟漪按钮</md-button></a></h2>
  <h2><input-filter-select></input-filter-select></h2>
</template>

<script>
export default {
  data: function () {
    return {
      showConfirm: false,
      show: false
    }
  },
  computed: {},
  ready: function () {
  },
  methods: {
    bgsClose(e) {
      this.show = false
    },
    imgClick() {
      this.show = true
    },
    doIt() {
      document.querySelectorAll('button')[0].innerText = '我被改变了'
    },
    goToIndex() {
      new Promise((resolve, reject) => {
        this.showConfirm = false
        resolve()
      }).then(this.$router.go('/'))
    }
  },
  components: {}
}
</script>

<style lang="css">
.scale-transition{
  transition: all .6s
}
.scale-enter{
  transform : scale(.1)
}
.scale-leave{
  transform : scale(.1)
}
.viewer {
    /*position: absolute;
    left: 50%;
    top: 50%;*/
    padding: 40px 0;
    overflow: visible;
  }
</style>
