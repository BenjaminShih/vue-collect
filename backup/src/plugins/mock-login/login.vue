<template lang="html">
  <div class="mock-login" :class="{'show': isShow}">
    <span v-if="!isShow" class="trigger icon icon-edm" @click="toggle" transiton="fade"></span>
    <span v-if="isShow" class="close" @click="toggle">&times;</span>
    <div class="wrapprt" v-el:wrapper>
      <h4 class="text-sm-center">切换账号</h4>
          <button v-for="account in accounts"
                  @click="select(account)" type="button" name="button"
                  class="btn btn-secondary btn-block btn-sm">{{account.username}}/{{account.password}}</button>
          <small class="text-muted">
            选择一个账号，一键切换 or 登陆 =。=
          </small>
    </div>
  </div>
</template>

<script>
import { post } from '../../utils/api'
export default {
  data () {
    return {
      isShow: false,
      selectedIndex: 0,
      accounts: [
        {
          username: 'sjn',
          password: '123456a'
        },
        {
          username: 'admin',
          password: '123456a'
        }
      ]
    }
  },
  computed: {},
  attached: function () {},
  methods: {
    select (account) {
      post('/mock/login', account)
        .then(() => {
          // 跳转至拦截登录前记录的返回地址，并删除
          this.$notify({
            text: '登录成功！'
          })
              .then(() => {
                global.location.reload()
              })
        })
    },
    toggle () {  // 右下角标识切换函数
      this.isShow = !this.isShow
      if (this.isShow) {
        this.$els.wrapper.querySelectorAll('button')[0].focus()
      }
    }
  },
  ready () {
    global.onkeyup = (e) => {
      let keyCode = e.keyCode || e.which
      if (keyCode === 120) {
        this.toggle()
      }
    }
  },
  components: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.icon-edm:before { content: "\e609"; }
.mock-login
  position: fixed
  right: 0
  bottom: 0
  background-color: #f5f5f5
  transition: .4s
  transform: translate(100%, 100%)
  &.show
    transform: translate(0, 0)

.trigger
  position: absolute
  top: -25px
  left: -15px
  cursor: pointer
.close
  position: absolute
  top: 5px
  left: 10px
h4
  margin-bottom: 20px
.wrapper
  width: 300px
  padding: 20px
  //transform-origin: 100% 100%
  transition: .4s
.btn-sm
  width: 100%

small
  padding-top: 20px

.fade
  &-enter, &-leave
    opacity: 0
</style>
