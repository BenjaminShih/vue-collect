<template>
  <div>
    <div class="menu-wrapper">
      <ul class="menu-container">
        <li class="menu-level-one" v-for="m in menu">
          <a href="#" v-link="m.route">
            <span>{{m.name}}</span>
          </a>
          <div class="menu-level-two-container" :style="{width: 150 * m.children.length + 'px'}">
            <div class="menu-level-two-inner">
              <div class="menu-level-two">
                <ul>
                  <li class="menu-level-two-column"  v-for="c in m.children">
                    <span class="column-title">{{c.name}}</span>
                    <ul>
                      <li class="column-content" v-for="cc in c.children">
                        <a href="#" v-link="cc.route">{{cc.name}}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .menu-wrapper {
    position: relative;
    float: left;
    width: 300px;
    border : 1px solid #e5e8e6;
  }
  .menu-level-one {
    position: relative
    height: 50px;
    /*cursor: pointer;*/
    background: #fbfbfb;
    border-top: 1px solid #e5e8e6;
    line-height: 50px;
    &>a{
      span{
        /* display: inline-block*/
      }
      height: 100%
      text-align: center
      display: block
    }
    &:hover {
      background-color : #3d88ba
      .menu-level-two-container{
        display: block
      }
      &>a{
        color: #ffffff
        text-decoration: none
      }
    }
  }
  .menu-level-two{
    ul{
      float: left
      width: 100%
    }
    &:after {
      content: '.'
      height: 0
      clear: both
      overflow: hidden
      display: block
    }
  }
  .menu-level-two-container {
    display: none
    position: absolute
    left: 100%
    top: -1px
    border: 1px solid #e5e8e6
    box-sizing: content-box
    background-color: #ffffff
    z-index: 999
    .menu-level-two-column {
      width: 150px
      border-right: 1px dashed #e5e8e6
      float: left
      text-align: center
      box-sizing: border-box
      &:last-child {
        border-right-width: 0px
      }
      span {
        display: block
      }
    }
  }
  .menu-level-two-inner {
    margin: 10px 0
  }
</style>


<script>
import menu from '../../menu.js'
export default {
  data: function () {
    return {
      menu: [],
    }
  },
  created() {
    this.menu = menu.menu
  },
  computed: {},
  ready: function () {
  },
  attached: function () {},
  methods: {
    // makeMenu(menu) {
    //   let arr = []
    //   menu.map()
    // },
  },
  components: {}
}
</script>
