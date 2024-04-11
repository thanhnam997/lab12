const express =require('express')
const router=express.Router()

router.get('/',function(req, res) {
     res.render('index.hns')
})


router.get('/tiger', function(req, res) {
      res.send('grrrr!')
})

router.get('/cat', function(req, res) {
    res.send('miaow')
})

module.exports=router