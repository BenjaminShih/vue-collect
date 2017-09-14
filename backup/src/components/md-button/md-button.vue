<template>
  <button @click="reppleClick"  class="__cov-button-ripple" :class="{active: repple_button.toggle}">
    <slot></slot>
    <span class="__cov-ripple" :class="{'animate': repple_button.animate}"></span>
  </button>
</template>

<script>
export default {
  data () {
    return {
      repple_button: {
        animate: false, // 初始动画为false
        toggle: false // 初始toggle为false
      }
    }
  },
  props: {
    handleFunc: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    reppleClick (e) {
      this.repple_button.animate = true // 点击启动class开始动画效果
      let button = e.target  // 事件点击对象赋值给button
      let ripple = button.querySelector('.__cov-ripple') // 获取效果span的dom
      if (ripple) { // 如果点击对象中span存在的话，则启动下列运算
        let d = Math.max(button.offsetHeight, button.offsetWidth) // 获取高宽其中的最大值，其中高宽包括边框的值
        let x = e.layerX - ripple.offsetWidth / 2 // x为鼠标相对外层元素位置（设置了相对定位）减去span宽度的一半
        let y = e.layerY - ripple.offsetHeight / 2 // y为鼠标相对外层元素位置（设置了相对定位）位置减去span高度的一半
        // 设置涟漪的高宽和位置
        ripple.setAttribute('style', 'height: ' + d + 'px; width: ' + d + 'px; top: ' + y + 'px; left: ' + x + 'px;')
      }
      this.$nextTick(() => {  // 在dom更新的时候执行回调函数
        setTimeout(() => {  // 延迟660毫秒，动画消失
          this.repple_button.animate = false
          this.handleFunc()
        }, 660)
      })
    }
  }
}
</script>

<style>
.__cov-button-ripple {
  background-color: hsla(0,0%,62%,.2);
  /* background: transparent;*/
  border: none;
  border-radius: 2px;
  color: #000;
  position: relative;
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  display: inline-block;
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 0;
  overflow: hidden;
  will-change: box-shadow,transform;
  -webkit-transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);
  transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);
  outline: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  line-height: 36px;
  vertical-align: middle;
  min-width: 96px;
}
/* .__cov-button-ripple:hover {
  background-color: hsla(0,0%,62%,.2);
}*/
.__cov-ripple {
  display: block;
  position: absolute;
  background: hsla(0, 0%, 65%, 0.66);
  border-radius: 100%;
  transform: scale(0);
}
.__cov-ripple.animate {
  animation: ripple 0.65s linear;
}

@keyframes ripple {
  100% {opacity: 0; transform: scale(2.5);}
}
</style>
