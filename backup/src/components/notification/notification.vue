<template>
  <div class="back-drop" transition="x-notify">
    <div class="notification">
      <span :class="iconClasses">{{icon}}</span>
      <p class="notification-text">{{text}}</p>
      <a href="#" v-el:close class="notification-btn" @click.prevent="handleClose" @keyup.enter="handleClose">知道了</a>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .notification{
    padding : 20px
    padding-top : 30px
    position : absolute
    width : 250px
    min-height : 170px
    background-color : #ffffff
    left : 50%
    margin-left : -125px
    top : 50%
    margin-top : -135px
    border-radius : 2px;
    z-index: 99999;
  }
  .notification-icon{
    display : block
    width : 20px
    height : 20px
    margin : 0 auto
    margin-bottom : 10px
    border-radius : 10px
    text-align : center
    line-height : 20px
    color: #ffffff
    &.notification-icon-info{
      background-color : #009ce5
    }
    &.notification-icon-error{
      background-color : #ff5454
    }
    &.notification-icon-success{
      background-color : #009ce5
    }
  }
  .notification-text{
    margin : 0
    font-size : 14px
    color: #333333
    text-align center
    padding-bottom : 40px
  }
  .notification-btn{
    position : absolute
    display : block
    width : 80px
    height : 30px
    bottom : 20px
    left : 50%
    margin-left : -40px
    border-radius : 2px
    border: 1px solid #999999
    background-color : #ffffff
    font-family : '宋体'
    font-size : 12px
    color: #999999
    text-align center
    line-height 30px
    &:focus {
      background-color: #f8f8f8
    }
  }
  .back-drop{
    position : fixed
    left : 0
    top : 0
    right : 0
    bottom : 0
    background-color : rgba(0,0,0,.3)
  }
  .x-notify-transition{
    z-index : 1001
    transition : all .25s
    .notification{
      transition : all .25s
    }
  }
  .x-notify-enter, .x-notify-leave{
    opacity : 0
    .notification{
      transform : translateY(-20%)
      opacity : 0
    }
  }
</style>

<script type="text/babel">
  const icons = {
    success: '✓',
    error: '!',
    info: '···'
  }
  export default {
    props: {
      close: {
        type: Function,
        default: function defaultClose () {}
      },
      type: {
        type: String,
        default: 'info'
      },
      text: {
        type: String,
        default: ''
      }
    },
    ready () {
      this.$nextTick(() => {
        // 聚焦按钮,方便键盘操作
        this.$els.close.focus()
      })
    },
    computed: {
      icon: function icon () {
        return icons[this.type]
      },
      iconClasses: function iconClasses () {
        let classes = {
          'notification-icon': true
        }

        classes['notification-icon-' + this.type] = true
        return classes
      }
    },
    methods: {
      handleClose(e) {
        if (e) e.preventDefault()
        this.close()
      }
    }
  }
</script>
