var express = require("express")
var router = express.Router()
var fs = require("fs")

module.exports = router


router.get('/', function(req, res) {
  res.render('index')
})

router.get('/who', function(req, res) {
  res.render('whoPage')
})

router.post('/compliment', function(req, res) {
var name = req.body
res.render('complimentPage',name)
})



// MOJE STARRE ROUTY : -)

//
// router.get("/", (req, res) => {
//   res.render("index")
// })
//
// router.get("/who", (req, res) => {
//   res.render("whoPage")
// })
//
// router.post("/compliment", function(req, res) {
//
//   var name = req.body
//   fs.readFile("./data/nameData.json", function(err, data) {
//     if (err) throw err
//     var dataObject = JSON.parse(data)
//
//     dataObject.push(name)
//
//     var dataStrig = JSON.stringify(dataObject)
//
//     fs.writeFile("./data/nameData.json", dataStrig, function(err) {
//       if (err) throw err
//       res.render("complimentPage", name)
//     })
//
//   })
  // data.dupa = "dupadupa"

// })
