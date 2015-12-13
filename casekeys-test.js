var casekeys = require("./casekeys")
var assert = require("assert")

describe("casekeys", function () {
  describe("camel case keys", function () {
    it("should convert deep keys", function () {
      var object = {
        how_about_this: { or_this: true }
      }
      var camelObject = casekeys.camelCase(object)
      assert(camelObject.howAboutThis.orThis)
    })
    
    it("should convert arrays", function () {
      var array = [
        { snake_item: true }
      ]
      var camelArray = casekeys.camelCase(array)
      assert(camelArray[0].snakeItem)
    })
    
    it("should skip regexp objects", function () {
      var re = /test/
      var object = { validate: re }
      var camelObject = casekeys.camelCase(object)
      assert(object.validate, re)
    })
    
    it("should throw for recursive objects", function () {
      var recursiveObject = {}
      recursiveObject["break"] = recursiveObject
      assert.throws(function () {
        casekeys.camelCase(resursiveObject)
      })
    })
  })
  
  describe("snake case keys", function () {
    it ("should convert deep keys", function () {
      var object = { howAboutThis: { orThis: true } }
      var snakeObject = casekeys.snakeCase(object)
      assert(snakeObject.how_about_this.or_this)
    })
    
    it("should skip date objects", function () {
      var now = new Date()
      var object = { created: now }
      var snakeObject = casekeys.snakeCase(object)
      assert.equal(snakeObject.created, now)
    })
    
    it("should throw error for custom objects", function () {
      assert.throws(function () {
        casekeys.snakeCase(new Error())
      })      
    })
  })
})
