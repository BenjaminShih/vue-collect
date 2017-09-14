<template>
  <div>
    <top-bar></top-bar>
    <div class="main-wrapper">
      <menu></menu>
      <!-- <h1><a @click='goToDetail()'>{{ msg }}</a></h1>
      <md-button :handle-func="goToPlay">数字拼图</md-button>
      <md-button :handle-func="goToPlay1">inline－block的BUG</md-button> -->
      <div class="main-content">
        <router-view><router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from './top-bar.vue'
import menu from './menu.vue'
export default {
  components: {
    TopBar,
    menu,
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Vue!'
    }
  },
  methods: {
    // goToDetail () {
    //   this.$router.go('/detail/detailOne')
    // },
    // goToPlay() {
    //   this.$router.go('/detail/numGame')
    // },
    // goToPlay1() {
    //   this.$router.go('/detail/inlineBlock')
    // },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
h1 {
  color: #42b983;
}
.main-wrapper {
  width: 100%;
  padding:0 40px;
}
.main-content {
  width: 100%
  padding-left: 320px
  padding-bottom: 20px
  min-height: 400px
}
</style>
