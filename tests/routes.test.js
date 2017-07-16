var test = require('tape')
var request = require('supertest')
var cheerio = require('cheerio')
var server = require('../server')
var form = require('form-urlencoded')

var fs = require("fs")


test ("check if tests installed properly", function(t) {
  t.pass()
  t.end()
})


test("if first site is rendered correctly", function(t) {
  request(server)
  .get("/")
  .end(function(err, res) {
    if (err) throw err
var $ = cheerio.load(res.text)
var expected = "Nice Page"
var actual = $(".h1text").text()
   t.equal(actual, expected )
t.end()
  })
})


test("checking if complimentPage renders nickname", function(t) {
  var data = {userName: "Bob", nickname: "Olo"}
  var data_encoded = form(data)

  request(server)
  .post("/compliment")
  .send(data_encoded)

  .end(function(err, res) {
    if (err) throw err

    var $ = cheerio.load(res.text)

    var actual = $("h2").text()
    var expected = " " + data.nickname + " is not pretty!"
    console.log(actual, expected,data_encoded)

  t.equal(actual, expected)
  t.end()
  })

})



test("posted parameters appears on page", function(t) {
  //arrange
  var data = {userName: "Ela", nickname: "Ania"}
  var formData = form(data)
  request(server)
  .post("/compliment") //request do servera
  .send(formData)      //request do servera
  //act
  .end(function(err, res) {   //uruchomie requesta i wyslanie response
  //assert (sprawdzanie wynikow)
    if (err) throw err
    var $ = cheerio.load(res.text)
    var expected = " " + data.userName + " is pretty!"
    var actual = $('h1').text()
    t.equal(actual, expected) //uruchamia test
    t.end()
  })
})





//
// test ("testing home page sends hello world", function (t) {
//   request(server)
//   .get("/")
//   .end(function(err, res) {
//     if (err) throw err
//
//     var $ = cheerio.load(res.text)
//     var expected = "Text 1 index page"
//     var actual = $(".h1text").text()
//     console.log(actual);
//
//     t.equal(actual, expected )
//     t.end()
//   })
// })
