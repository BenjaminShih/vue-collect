export default {
  'menu': [
    {
      'name': 'HTML',
      'route': '/detail/detailOne',
      'children': [
        {
          'name': 'HTML4',
          'children': [
            {
              'name': 'HTML4分类1',
              'route': '/detail/detailOne',
            },
            {
              'name': 'HTML4分类2',
              'route': '/detail/detailOne',
            },
          ],
        },
        {
          'name': 'HTML5',
          'children': [
            {
              'name': 'HTML5分类1',
              'route': '/detail/detailOne',
            },
            {
              'name': 'HTML5分类2',
              'route': '/detail/detailOne',
            },
          ],
        },
      ]
    },
    {
      'name': 'CSS',
      'route': '/detail/inlineBlock',
      'children': [
        {
          'name': 'CSS2',
          'children': [
            {
              'name': 'align',
              'route': '/css/css2/align',
            },
            {
              'name': 'CSS2分类2',
              'route': '/detail/detailOne',
            },
          ],
        },
        {
          'name': 'CSS3',
          'children': [
            {
              'name': 'materialdesign',
              'route': '/css/css3/materialDesignByself/show',
            },
            {
              'name': 'button',
              'route': '/css/css3/button',
            },
            {
              'name': 'shapes',
              'route': '/css/css3/shapes',
            },
            {
              'name': '3dBox',
              'route': '/css/css3/3dBox',
            },
            {
              'name': 'imgShine',
              'route': '/css/css3/imgShine',
            },
          ],
        },
      ]
    },
    {
      'name': 'JS',
      'route': '/detail/numGame',
      'children': [
        {
          'name': 'ES5',
          'children': [
            {
              'name': 'ES5分类1',
              'route': '/detail/detailOne',
            },
            {
              'name': 'ES5分类2',
              'route': '/detail/detailOne',
            },
          ],
        },
        {
          'name': 'ES6',
          'children': [
            {
              'name': 'Vue',
              'route': '/js/vueGame',
            },
            {
              'name': 'ES6分类2',
              'route': '/detail/detailOne',
            },
          ],
        },
      ]
    }
  ]
}
