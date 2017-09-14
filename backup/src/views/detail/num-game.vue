<template>
  <h1>pintu</h1>
  <md-button :handle-func="isLessThen(2016, 8, 13)">试验按钮</md-button>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    isLessThen(year, month, date) {
      let testFullDate
      let testFullSec
      testFullDate = new Date(year, month, date, 23, 59, 59)
      testFullSec = testFullDate.getTime()
      console.log(testFullDate)
    },
    test() {
    },
  },
  components: {}
}
</script>

<style lang="css">
</style>
