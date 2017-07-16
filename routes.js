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
var name = {
  userName: req.body.userName
}

res.render('complimentPage',name)
})
