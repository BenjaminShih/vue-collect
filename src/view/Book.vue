<template>
  <div class="book">
    清风不识字，何必乱翻书
    <ul>
      <li class="ani1"></li><!--
      --><li></li><!--
      --><li class="ani2"></li>
    </ul>
  </div>
</template>

<script type="text/babel">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .book {
    text-align center
    ul {
      position relative
      perspective 200
      &::after {
        content ''
        display inline-block
        width 1px
        height 60px
        background-color #999
        position absolute
        left 50%
        transform translateX(-50%)
        z-index 10
      }
      li {
        display inline-block
        width 160px
        height 60px
        background-color #eee
        border-radius 2px
      }
      .ani1 {
        animation rotate1 2s infinite
        margin-right -160px
      }
      .ani2 {
        animation rotate2 2s infinite
        margin-left -160px
      }
      @keyframes rotate1 {
        to {
          transform: rotateY(-360deg)
        }
      }
      @keyframes rotate2 {
        25% {
          transform: rotateY(0deg)
        }
        100% {
          transform: rotateY(-360deg)
        }
      }
    }
  }
</style>