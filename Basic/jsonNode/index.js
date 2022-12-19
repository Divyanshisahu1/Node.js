const { Console } = require("console")

const bigData = {
    name:"ashi",
    age:26,
    favouriteFood:"momos"
}

const JsonObject = JSON.stringify(bigData)
console.log(JsonObject)
console.log(JsonObject.favouriteFood)

const ObjData = JSON.parse(JsonObject)
console.log(ObjData)
console.log(ObjData.favouriteFood)

