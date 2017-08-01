<template>
  <transition name="fade">
    <div class="progress-bar" v-if="isShow">
    </div>
  </transition>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        isShow: true, // 是否显示进度条
        val: 0, // 进度
      }
    },
    props: {
      /**
       * 每10毫秒自增幅度
       */
      step: {
        type: Number,
        default: 5,
      },
      /**
       * 初始值
       */
      initVal: {
        type: Number,
        default: 0,
      },
      /**
       * 到一定进度停止
       */
      stopVal: {
        type: Number,
        default: 80,
      },
      /**
       * 进度条继续到成功
       */
      isOk: {
        type: Boolean,
        default: false,
      },
    },
    mounted() {
      this.val = this.initVal
      let step =  this.step
      let loop = () => {
        this.val = this.val + step
        this.$el.style.width = this.val + '%'
        if (this.val >= this.stopVal) {
          cancelAnimationFrame(timer)
          return
        }
        requestAnimationFrame(loop)
      }
      let timer = requestAnimationFrame(loop)
    },
    watch: {
      isOk() {
        let val = this.val
        let step =  this.step
        let loop = () => {
          val = val + step
          this.$el.style.width = val + '%'
          if (val >= 100) {
            cancelAnimationFrame(timer)
            this.isShow = false
            this.$emit('callback', 'load success')
            return
          }
          requestAnimationFrame(loop)``
        }
        let timer = requestAnimationFrame(loop)
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .progress-bar {
    position fixed
    top 0
    height 6px
    width 0
    background-color #999
  }
  .fade {
    &-enter-active, &-leave-active {
      transition: all .3s
    }
    &-enter, &-leave-active {
      opacity: 0
    }
  }
</style>

