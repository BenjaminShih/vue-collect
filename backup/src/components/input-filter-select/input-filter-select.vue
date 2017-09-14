<template lang="html">
  <solt></slot>
  <input v-model="query">
    <ul>
        <li v-for="item in list | filterBy query"
            transition="staggered"
            stagger="100">
          {{item.msg}}
         </li>
    </ul>
</template>

<script>
export default {
  data: function () {
    return {
      query: '',
      list: [
          { msg: 'Bruce Lee' },
          { msg: 'Jackie Chan' },
          { msg: 'Chuck Norris' },
          { msg: 'Jet Li' },
          { msg: 'Kung Fury' }
      ]
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
ul {
    padding-left: 0;
    font-family: Helvetica, Arial, sans-serif;
}
.staggered-transition {
    transition: all .5s ease;
    overflow: hidden;
    margin: 0;
    height: 40px;
}
.staggered-enter, .staggered-leave {
    opacity: 0;
    height: 0;
}
</style>
