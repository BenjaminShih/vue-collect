<template lang="html">
  <h1>CSS3按钮</h1>
    <div class="pin-star">
      <input type="checkbox" class="pin-leaf-checkbox">
      <div class="pin-star-leaf">
      </div>
      <div class="pin-star-leaf">
      </div>
      <div class="pin-star-leaf">
      </div>
      <div class="pin-star-leaf">
      </div>
      <div class="pin-star-leaf">
      </div>
      <div class="pin-star-center">
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
  .pin-star{
    position: relative
    width: 300px
    height: 300px
  }
  .pin-leaf-checkbox, .pin-star-center {
    width: 45px;
    height: 50px;
    position: absolute;
    left: 0;
    right: 0;
    top: -60px;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
    z-index: 999
  }
  .pin-star-center, .pin-star-leaf{
    pointer-events: none;
  }

  .pin-star-center > input[type="checkbox"]{
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .pin-star-leaf {
    width: 60px
    height: 120px
    background-color: #b8f0f5
    border-radius: 50%/30% 30% 70% 70%
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    margin: auto
    opacity: 0.5
    transition: transform 1s cubic-bezier(.8,-.5,.2,1.4);
    transform-origin: 30px 30px
    &:nth-of-type(1) {
      background-color: #B8F0F5
    }
    &:nth-of-type(2) {
      background-color: #9CF3DC
    }
    &:nth-of-type(3) {
      background-color: #94F3B0
    }
    &:nth-of-type(4) {
      background-color: #C2F8A1
    }
    &:nth-of-type(5) {
      background-color: #FFEFAF
    }
  }
    .pin-leaf-checkbox:checked ~ .pin-star-leaf{
      transition: transform 1s cubic-bezier(.8,-.5,.2,1.4);
    }
    .pin-leaf-checkbox:checked ~ .pin-star-leaf:nth-of-type(5){
      transform: rotatez(35deg);
    }
    .pin-leaf-checkbox:checked ~ .pin-star-leaf:nth-of-type(4){
      transform: rotatez(105deg);
    }
    .pin-leaf-checkbox:checked ~ .pin-star-leaf:nth-of-type(3){
      transform: rotatez(180deg);
    }
    .pin-leaf-checkbox:checked ~ .pin-star-leaf:nth-of-type(2){
      transform: rotatez(255deg);
    }
    .pin-leaf-checkbox:checked ~ .pin-star-leaf:nth-of-type(1){
      transform: rotatez(325deg);
    }
</style>
