<template lang="html">
  <div class="modal-mask" v-show="showConfirm" :transition="transitionsModal">
    <div class="modal-confirm">
      <h4 class="comfirm-header">
        <i class=""></i>{{confirmTitle}}
      </h2>
      <div class="confirm-content">
        {{confirmContent}}
      </div>
      <div class="confirm-btns">
        <button type="button" name="button" class="btn" @click="doCancel">取消</button>
        <button type="button" name="button" class="btn" @click="doConfirm">确定</button>
      </div>
    </div>
  </div>
  <button type="button" name="button" @click="alertBox" :class="classes"><slot></slot></button>
</template>

<script>
export default {
  data: function () {
    return {
      transitionsModal: 'modal'
    }
  },
  props: {
    classes: {
      type: String,
      default: 'btn btn-default'
    },
    // 监听show的变化,如果有变化表示外部强制drop down是否显示
    showConfirm: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    // 提示标题
    confirmTitle: {
      type: String,
      default: '标题'
    },
    // 提示内容
    confirmContent: {
      type: String,
      default: '内容'
    },
    // 取消按钮的回调函数
    onConcel: {
      type: Function,
      default: () => {}
    },
    // 确定按钮的回调函数
    onConfirm: {
      type: Function,
      default: () => {}
    },
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    doCancel() {
      // if (this.onConcel) this.onCancel()
      this.showConfirm = false
    },
    doConfirm() {
      this.transitionsModal = 'transitionDone'
      this.showConfirm = false
    },
    alertBox() {
      this.showConfirm = true
    }
    // confirm(setting) {
    //   this
    // }
  },
  components: {},
  transitions: {
    'modal': {
      enter(el) { console.log('我进来了，旁边是所在的实例', el) },
      leave() { console.log('点击取消后我才会显示') }
    },
    'transitionDone': {
      leave() {
        console.log('点击确定后，我会被立即执行（leave钩子函数）')
      },
      afterLeave() {
        console.log('afterLeave后才能看到我，然后执行传递进来的回调函数')
        this.onConfirm()
      }
    }
  },
}
</script>

<style lang="css" scoped>
.modal-mask{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(55,55,55,.6);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-confirm{
  width: 400px;
  box-sizing: border-box;
  padding: 30px 40px;
  background-color: #fff;
  border-radius: 6px;
}
@media only screen and (max-width: 640px) {
 .modal-confirm{
    width: 100%;
    margin: 0 20px;
    padding: 10px 20px;
  }
}
.modal-enter, .modal-leave {
  opacity: 0;
  transform: scale(1.1);
}

/*.modal-enter .modal-confirm,
.modal-leave .modal-confirm {
  transform: scale(1.1);
}*/
.modal-transition{
  transition: all .5s ease;
}
.transitionDone-leave {
  opacity: 0;
  transform: scale(1.1);
}
.transitionDone-transition{
  transition: all 2s ease;
}
</style>
