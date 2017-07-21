const esprima = require('esprima'), _ = require('lodash')
module.exports = function (source) {
  let module = esprima.parse(source, {sourceType: 'module'})
  let properties = _.chain(module.body).find({type: 'ExportDefaultDeclaration'}).get('declaration.properties')   //export default statement
  if (!properties.value()) properties = _.chain(module.body).find({
    type: 'ExpressionStatement',
    expression: {
      left: {
        object: {name: 'module'}, property: {name: 'exports'}	//module.exports statement
      }
    }
  }).get('expression.right.properties')
  let templateUrl = properties.find({key: {name: 'templateUrl'}}).get('value.value').value()
  let styleUrl = properties.find({key: {name: 'styleUrl'}}).get('value.value').value()
  let ret = `<script>\n${source}\n</script>`
  if (templateUrl) ret += `\n<template src="${templateUrl}"></template>`
  if (styleUrl) ret += `\n<style scoped src="${styleUrl}"></style>`
  return ret
}
