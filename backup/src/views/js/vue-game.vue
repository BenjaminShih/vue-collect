<template lang="html">
  <div class="pane-wrapper">
    <ul>
      <li v-for="item in items"
      @click="exchange($index)"
      :class="{'pane': true, 'empty-pane': !item }">{{item}}</li>
    </ul>
    <s-button type="success" outline="true"
              size="md" block disabled="false"
              @on-click="" drop-down="">重置游戏</s-button>
  </div>
  <s-drop-down label="666">
    666
  </s-drop-down>
</template>

<script>
export default {
  data: function () {
    return {
      items: []
    }
  },
  computed: {},
  ready: function () {
    this.render()
  },
  attached: function () {},
  methods: {
    successOrNot() {
      if (this.items[15] === '0') {
        if (this.items.slice(0, 15).every((e, i) => { e === i + 1 })) {
          global.alert('恭喜你闯关成功')
        }
      }
    },
    exchange(index) {
      let num = this.items[index]
      let leftNum = this.items[index - 1]
      let rightNum = this.items[index + 1]
      let topNum = this.items[index - 4]
      let bottomNum = this.items[index + 4]
      if (leftNum === '' && index !== 4 && index !== 8 && index !== 12) {
        this.items.$set(index - 1, num)
        this.items.$set(index, '')
      } else if (rightNum === '' && index !== 3 && index !== 7 && index !== 11) {
        this.items.$set(index + 1, num)
        this.items.$set(index, '')
      } else if (topNum === '') {
        this.items.$set(index - 4, num)
        this.items.$set(index, '')
      } else if (bottomNum === '') {
        this.items.$set(index + 4, num)
        this.items.$set(index, '')
      }
      this.successOrNot()
    },
    render() {
      let itemsArr = []
      for (let i = 1; i < 16; i++) {
        itemsArr.push(i)
      }
      itemsArr.push('')
      itemsArr.sort(() => {
        return Math.random() - 0.5
      })
      this.items = itemsArr
    },
  },
  components: {}
}
</script>

<style lang="css" scoped>
  *{
    box-sizing: border-box;
    margin: 0;
  }
  .pane-wrapper {
    width: 400px;
    height: 438px;
    border: 1px solid #000;
    box-sizing: content-box;
  }
  .pane {
    width: 100px;
    height: 100px;
    background-color: #BBB;
    float: left;
    border: 1px solid #000;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .empty-pane {
    border: 1px solid #000;
    background-color: #FFF;
  }
</style>
