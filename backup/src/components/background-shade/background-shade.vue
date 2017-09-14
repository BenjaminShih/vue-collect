<template>
  <div class="background-shade" transition="fade" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleClick(e) {
      if (this.$el === e.target) {
        this.onClick()
      }
    }
  },
}
</script>

<style lang="css" scoped>
  .background-shade {
    overflow: auto;
    position: fixed;
    z-index: 1001;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(55,55,55,.6);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fade-transition{
    transition: all .8s ease;
  }
  .fade-enter{
    opacity: 0;
    transform: scale(1.1);
  }
  .fade-leave{
    opacity: 0;
    transform: scale(1.1);
  }
  /*.fade-enter, .fade-leave {
    opacity: 0;
    transform: scale(1.1);
  }

  /*.modal-enter .modal-confirm,
  .modal-leave .modal-confirm {
    transform: scale(1.1);
  }*/
  /*.fade-transition{
    transition: all .5s ease;
  }*/
</style>
