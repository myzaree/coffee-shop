const path = require('path');
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      paths: ['./src/styles', './node_modules'],
      javascriptEnabled: true
    }
  }),
  addWebpackAlias({
    ['@assets']: path.resolve(__dirname, './src/assets'),
    ['@components']: path.resolve(__dirname, './src/components'),
    ['@layout']: path.resolve(__dirname, './src/layout'),
    ['@utils']: path.resolve(__dirname, './src/utils')
  })
);