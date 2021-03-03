export default {
  baseUrl: {
    dev: 'https://easy-mock.com/mock/5d47dd762b3693531efebace/wxserver',
    test: 'https://easy-mock.com/mock/5d47dd762b3693531efebace/wxserver',
    production: 'https://wanht.top/wxserver'
  },
  apiList: [
    {
      name: 'items',
      url: '/getItems.do',
      method: ['get']
    }
  ]
}
