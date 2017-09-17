<template>
  <div id="app" class="app">
    <progress-bar :is-ok="isOk" @callback="cb"></progress-bar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      isOk: false,
    }
  },
  mounted() {
    this.$loading()
    setTimeout(() => {
      this.$loading.end()
    }, 3000)

    setTimeout(() => {
      this.isOk = true
    }, 2000)
  },
  methods: {
    cb() {
      console.log('load success')
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body, #app {
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
