<template>
  <div>
    <!--<div class="ellipsis" :style="{'width': finalWidth + 'px'}">-->
      <!--<div class="ellipsis-container">-->
        <!--<div class="ellipsis-content">-->
          <!--<slot></slot>-->
        <!--</div>-->
        <!--<div class="ellipsis-ghost">-->
          <!--<div class="ellipsis-placeholder">-->
            <!--<div class="dragger" ref="dragger"></div>-->
          <!--</div>-->
          <!--<div class="ellipsis-more">...更多</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="ellipsis" :style="{'width': finalWidth + 'px'}">
      <div class="ellipsis-container">
        <div class="ellipsis-content">
          <slot></slot>
        </div>
        <div class="ellipsis-ghost">
          <div class="ellipsis-placeholder">
          </div>
          <div class="ellipsis-more">...更多</div>
        </div>
        <div class="dragger" ref="dragger"></div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        pageY: 0, // 拖拽Y轴方向移动的距离
        isDragging: false, // 是否正在拖拽
        finalWidth: 100,
      }
    },
    props: {
      width: {
        type: Number,
        default: 100,
      }
    },
    watch: {
      width() {
        this.finalWidth = this.width
      }
    },
    mounted() {
      const point = this.$refs.dragger

      this.onPointerDown = this.pointerDown.bind(this)
      this.onPointerUp = this.pointerUp.bind(this)
      this.onPointerMove = this.pointerMove.bind(this)

      if (window.pointerEvent) {
        point.addEventListener('pointerdown', this.onPointerDown, false)
        global.addEventListener('pointerup', this.onPointerUp, false)
        global.addEventListener('pointermove', this.onPointerMove, false)
        global.addEventListener('pointercancel', this.onPointerUp, false)
      } else {
        point.addEventListener('touchstart', this.onPointerDown, false)
        global.addEventListener('touchend', this.onPointerUp, false)
        global.addEventListener('touchcancel', this.onPointerUp, false)
        global.addEventListener('touchmove', this.onPointerMove, false)
        point.addEventListener('mousedown', this.onPointerDown, false)
        global.addEventListener('mouseup', this.onPointerUp, false)
        global.addEventListener('mousemove', this.onPointerMove, false)
      }
    },
    methods: {
      pointerDown(e) {
        e.preventDefault()
        e.stopPropagation()

        this.isDragging = true
        this.pageX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX
      },
      pointerMove(e) {
        e.preventDefault()
        e.stopPropagation()

        if (!this.isDragging) return

        const pageX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX


        this.finalWidth = pageX

      },
      pointerUp(e) {
        e.preventDefault()
        e.stopPropagation()

        this.isDragging = false
      },
    },
  }
</script>
<style rel="stylesheet/stylus" lang="stylus" scoped>
  /*
 * 行高 h
 * 最大行数 n
 * ...更多容器的宽 w
 * 字号 f
 */

  /*@-webkit-keyframes width-change {0%,100%{width: 320px} 50%{width:260px}}*/
  .ellipsis {
    position: relative;
    background: rgb(230, 230, 230);
    /*width: 260px;*/
    max-height: 108px; /* h*n */
    line-height: 18px; /* h */
    overflow: hidden;
    /*-webkit-animation: width-change 8s ease infinite;*/
  }
  .ellipsis-container {
    position: relative;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6; /* n */
    font-size: 50px; /* w */
    color: transparent;
    .dragger {
      position absolute
      width 10px
      height 10px
      background-color #555
      top 0
      right 0
      cursor pointer
      z-index 6
    }
  }
  .ellipsis-content {
    color: #000;
    display: inline;
    vertical-align: top;
    font-size: 12px; /* f */
  }
  .ellipsis-ghost {
    position:absolute;
    z-index: 1;
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    color: #000;
  }
  .ellipsis-ghost:before {
    content: "";
    display: block;
    float: right;
    width: 50%;
    height: 100%;
  }
  .ellipsis-placeholder {
    content: "";
    display: block;
    float: right;
    width: 50%;
    height: 108px; /* h*n */
  }
  .ellipsis-more {
    position: relative;
    float: right;
    font-size: 12px; /* f */
    width: 50px; /* w */
    height: 18px; /* h */
    margin-top: -18px; /* -h */
  }
</style>