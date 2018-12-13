var express=require('express')



var app=express()

var ejs=require('ejs')
app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.get('/',function(req,res)
{
    res.sendFile(__dirname+'/home.html')
  
})

app.get('/about',function(req,res)
{
    res.sendFile(__dirname+'/about.html')
})
app.get('/contact',function(req,res){

    res.sendFile(__dirname+'/contact.html')
})

app.get('/profile/:name',function(req,res)
{
    var personData={age:31 ,location:'blr',hobbies:['driving','reading']}
   // res.send("I am profile page "+req.params.id)
   res.render('profile',{personName:req.params.name,
data:personData})

})

app.listen(8888)