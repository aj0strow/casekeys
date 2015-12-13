var camelCase = require("lodash.camelcase")
var snakeCase = require("lodash.snakecase")
var isPlainObject = require("lodash.isPlainObject")

exports.camelCase = function (object) {
  return mapKeysDeep(object, camelCase, 0)
}

exports.snakeCase = function (object) {
  return mapKeysDeep(object, snakeCase, 0)
}

function mapKeysDeep (object, func, depth) {
  if (depth > 100) {
    throw new Error("Circular references wont work (max depth = 100)")
  }
  
  if (Array.isArray(object)) {
    return object.map(function (v) {
      return mapKeysDeep(v, func, depth + 1)
    })
  }
  
  if (isPlainObject(object)) {
    var mapped = {}
    Object.keys(object).forEach(function (key) {
      mapped[ func(key) ] = mapKeysDeep(object[key], func, depth + 1)
    })
    return mapped
  }
  
  if (depth == 0) {
    throw new Error("Please use plain objects and arrays")
  }
  
  return object
}
