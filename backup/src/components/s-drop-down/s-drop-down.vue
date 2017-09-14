<template>
  <div class="dropdown">
    <s-button :type="btntype"
              v-if="label"
              :disabled="disabled"
              @click="toggleShow"
              drop-down>{{label}}</s-button>
    <span class="drop-down-btn" @click="toggleShow" v-if="!label">
      <slot name="btn"></slot>
    </span>
    <div :class="{'drop-down-content': true}"
         v-show="isShow"
         :style="styl"
         v-el:content
         :transiton="effect">
      <slot><slot>
    </div>
  </div>
</template>

<script>
import EventListener from 'utils/EventListener'
import Vue from 'vue'
export default {
  data: function () {
    return {
      show: false,
      width: 0,
      height: 0,
      effect: 'drop',
      styl: {},
    }
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否在失去焦点时候关闭
    closeOnLostFocus: {
      type: Boolean,
      default: true,
    },
    // 显示按钮形态
    btntype: {
      type: String,
      default: '',
    },
    // drop-down显示的位置
    // left or right
    position: {
      type: String,
      default: 'right',
    },
    // 点击按钮是否切换drop-down状态
    toggle: {
      type: Boolean,
      default: true,
    },
    // 监听show的变化，如果有变化表示外部强制drop－down是否显示
    showDropDown: {
      type: Boolean,
      default: false,
      twoWay: true,
    },
    // 失去焦点时需要解决的一些问题
    onLostFocus: {
      type: Function,
      default: () => {},
    },
  },
  watch: {
    isShow(value) {
      if (value) {
        let style = {}
        let rect = this.$el.getBoundingClientRect()
        let scrollTop = 0

        style.top = rect.bottom + 'px'
        if (this.positon === 'left') {
          style.right = document.body.clientWidth - rect.right + 'px'
        } else {
          style.left = rect.left + 'px'
        }
        this.$set('styl', style)
      }
    }
  },
  computed: {
    // 点击按钮是否切换dropdown状态
    isShow() {
      if (this.toggle) {
        return this.show
      } else {
        return this.showDropDown
      }
    },
  },
  ready: function () {
    let el = this.contentEl = this.$els.content
    let display = el.style.display
    if (this.closeOnLostFocus) {
      this._closeListener = EventListener.listen(window, 'click', (e) => {
        if ((this.$el && this.$el.contains(e.target)) || (this.contentEl && this.contentEl.contains(e.target))) {
          // do nothing
        } else {
          this.showDropDown = false
          this.show = false
          this.onLostFocus()
        }
      })
    }
    // el.style.visibility = 'hidden'
    // el.style.display = 'block'
    Vue.nextTick(() => {
      this.width = el.clientWidth
      this.height = el.clientHeight
      el.style.display = display
      if (el.parentNode) {
        el.parentNode.removeChild(el)
      }
      global.document.body.appendChild(el)
    })
  },
  beforeDestory() {
    if (this._closeListener) this._closeListener.remove()
    if (this.contentEl) this.contentEl.parentNode.removeChild(this.contentEl)
  },
  methods: {
    toggleShow(e) {
      e.preventDefault()
      if (!this.disabled) {
        if (!this.toggle) {
          this.show = true
        } else {
          this.show = !this.show
        }
        this.showDropDown = true
      }
    }
  },
}
</script>

<style lang="css" scoped>
.left{
    left: auto !important;
    right: 0;
  }
  .drop-down-btn{
    cursor: pointer;
  }
  .drop-down-content {
    border: 1px solid #000;
    position : absolute;
    top: 100%;
    margin-top: 5px;
    min-width: 160px;
    white-space: nowrap;
  }
</style>
