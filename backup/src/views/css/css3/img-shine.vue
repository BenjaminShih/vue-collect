<template lang="html">
  <div class="shine">
    <div class="shine-img-wrapper">
      <img src="../../../assets/image/sanyecao.jpg" alt="三叶草" @mouseover="mouseover" @mouseout="mouseout" class="scale-img"/>
      <div class="shine-block" v-show="show">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: false
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    mouseover() {
      this.show = !this.show
    },
    mouseout() {
      this.show = !this.show
    }
  },
  components: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.scale-img{
  transform: scale(1.1);
  transition: transform 1s ease;
}
.scale-img:hover{
  transition: transform 1s ease;
  transform: scale(1);
}
.shine-img-wrapper{
  position: relative;
  width: 288px;
  height: 480px;
  overflow: hidden;
  background:rgba(47,47,64,0.3);
}
.shine-block{
  pointer-events: none;
  position: absolute;
  animation: move 1s ease;
  top: 0;
  left: 0;
  width: 160%;
  height: 100%;
  background: rgba(255,255,255,0.2);
  content: '';
  z-index: 2;
  transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, -120%, 0);
  will-change: transform
}
@keyframes move{
  from {transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, -120%, 0);}
  to {transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, 200%, 0);}
}
</style>
