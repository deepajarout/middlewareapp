var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
 
  res.render('index',{
      title:"myapp",
      greeting :"Welcome here"
  })
});

router.get('/getdata/:id',function(req,res){
    var user ={
        "username" :req.query['name'],
        "age":req.query['age']
    }
    res.render('index',{
        title:"myapp",
        "user": user
    })


});

router.get('/postdata',function(req,res){
   
    res.send("Welcome in post data page");
    res.render('index',{
        title:"myapp",
        "user": user
    })
});

router.post('/postdata',function(req,res){
    var user ={
        "username" :req.body.name,
        "age":req.body.age

    }
   
    res.render('index',{
        title:"myapp",
        "user": user
    })
});


router.put('/postdata',function(req,res){
    var user ={
        "username" :req.body.name,
        "age":req.body.age

    }
   
    res.render('index',{
        title:"myapp",
        "user": user
    })
});


module.exports = router;