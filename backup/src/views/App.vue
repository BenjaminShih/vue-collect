<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
html {
  /*height: 100%;*/
}

body {
  /*display: flex;*/
  /*justify-content: center;*/
  /*height: 100%;*/
}
body:before {
  content: "";
  position: fixed;
  top: -10px;
  left: 0;
  width: 100%;
  height: 10px;

  -webkit-box-shadow: 0px 0px 10px rgba(0,0,0,.4);
  -moz-box-shadow: 0px 0px 10px rgba(0,0,0,.4);
  box-shadow: 0px 0px 10px rgba(0,0,0,.4);

  z-index: 100;
}
li {
  list-style: none;
}
#app {
  width: 100%;
  font-family: Source Sans Pro, Helvetica, sans-serif;
}
</style>
