const esprima = require('esprima')
const _ = require('lodash')
module.exports = function (source) {
  let module = esprima.parse(source, {sourceType: 'module'})
  let properties = _.chain(module.body).find({type: 'ExportDefaultDeclaration'}).get('declaration.properties')   // export default statement
  if (!properties.value()) {
    properties = _.chain(module.body).find({
      type: 'ExpressionStatement',
      expression: {
        left: {
          object: {name: 'module'}, property: {name: 'exports'}  // module.exports statement
        }
      }
    }).get('expression.right.properties')
  }
  let templateSrc = properties.find({key: {name: 'templateSrc'}}).get('value.value').value()
  let styleSrc = properties.find({key: {name: 'styleSrc'}}).get('value.value').value()
  let ret = `<script>\n${source}\n</script>`
  if (templateSrc) ret += `\n<template src="${templateSrc}"></template>`
  if (styleSrc) ret += `\n<style scoped src="${styleSrc}"></style>`
  return ret
}
