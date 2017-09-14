import detailOne from './detail-one.vue'
import numGame from './num-game.vue'
import inlineBlock from './inline-block.vue'
export default {
  component: require('./detail.vue'),
  subRoutes: {
    '/detailOne': {
      component: detailOne,
      title: '详情页1'
    },
    '/numGame': {
      component: numGame,
      title: '拼图游戏',
    },
    '/inlineBlock': {
      component: inlineBlock,
      title: 'inline-block的BUG',
    },
  }
}
