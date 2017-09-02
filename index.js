const path = require('path')
const loaderUtils = require('loader-utils')
const vuejsLoaderPath = path.resolve(__dirname, './vuejs-loader.js')
module.exports = function () {
  let request = loaderUtils.getRemainingRequest(this)
  let importString = loaderUtils.stringifyRequest(this, '!!vue-loader!' + vuejsLoaderPath + '!' + request)
  return `import vueComponent from ${importString};\n` +
    'export default vueComponent;'
}
