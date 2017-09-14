<template lang="html">
  <div class="wrapper">
    <div class="container">
      <div class="top surface"></div>
      <div class="bottom surface"></div>
      <div class="left surface"></div>
      <div class="right surface"></div>
      <div class="front surface"></div>
      <div class="back surface"></div>
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

<style lang="css" scoped>
.wrapper{
  position: relative;
  perspective: 1600px;
}
.container {
  width: 800px;
  height: 800px;
  transform-style: preserve-3d;
  transform-origin: 50% 50% 200px;
}
.surface {
  position: absolute;
  width: 400px;
  height: 400px;
  background-color: #AAA
}
.top {
  left: 200px;
  top: -200px;
  transform: rotateX(-90deg);
  transform-origin: bottom;
}
.bottom {
  left: 200px;
  bottom: -200px;
  transform: rotateX(90deg);
  transform-origin: top;
}
.left {
  left: -200px;
  top: 200px;
  transform: rotateY(90deg);
  transform-origin: right;
}
.right {
  left: 600px;
  top: 200px;
  transform: rotateY(-90deg);
  transform-origin: left;
}
.front {
  left: 200px;
  top: 200px;
  transform: translateZ(400px);
}
.back {
  left: 200px;
  top: 200px;
  transform: translateZ(0);
}
.container{
  animation: rotate-frame 30s linear infinite;
}
@keyframes rotate-frame {
  0% {
      transform: rotateX(0deg) rotateY(0deg);
  }
  10% {
      transform: rotateX(0deg) rotateY(180deg);
  }
  20% {
      transform: rotateX(-180deg) rotateY(180deg);
  }
  30% {
      transform: rotateX(-360deg) rotateY(180deg);
  }
  40% {
      transform: rotateX(-360deg) rotateY(360deg);
  }
  50% {
      transform: rotateX(-180deg) rotateY(360deg);
  }
  60% {
      transform: rotateX(90deg) rotateY(180deg);
  }
  70% {
      transform: rotateX(0) rotateY(180deg);
  }
  80% {
      transform: rotateX(90deg) rotateY(90deg);
  }
  90% {
      transform: rotateX(90deg) rotateY(0);
  }
  100% {
      transform: rotateX(0) rotateY(0);
  }
}
</style>
