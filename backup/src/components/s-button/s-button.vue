<template lang="html">
  <button type="button" :class="classNames" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
import propFill from '../mixin/prop-fill'
import cx from 'classnames'
export default {
  mixins: [propFill],
  props: {
    type: {
      type: String,
      default: 'secondary' // primary success info secondary danger warning link
    },
    outline: {
      fill: true
    },
    size: {
      type: String,
      default: ''
    },
    block: {
      fill: true,
    },
    disabled: {
      fill: true,
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    dropDown: {
      fill: true
    },
    classes: [String, Array, Object]
  },
  data: function () {
    return {
    }
  },
  computed: {
    classNames() {
      let classes = {
        'btn': true,
        'btn-block': this.block,
        'dropDown-toggle': this.dropDown,
      }
      let type = 'btn-'
      if (this.type) {
        type += this.type
        if (this.outline) {
          type += '-outline'
        }
        classes[type] = true
      }
      if (this.size) {
        classes['btn-' + this.size] = true
      }
      return cx(classes, this.classes)
    },
  },
  methods: {
    handleClick(e) {
      this.onClick(e)
    },
  },
  components: {}
}
</script>

<style lang="css">
</style>
