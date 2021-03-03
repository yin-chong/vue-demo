const path = require('path')

module.exports = {
  'resolve': {
    'alias': {
      '@': path.resolve(__dirname, 'src')
    }
  },
  'rule': [
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }
  ]
}
