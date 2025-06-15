const express=require('express')
const app=express()
const path=require('path');
const bodyParser=require('body-parser')
const PORT=8000

app.set("views", path.join(__dirname))
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/index.html'))
})

app.post('/login',(req,res)=>{
    const user=req.body.username
    const pass=req.body.password
    if(user==="bhs" && pass==="116")
        res.render("views/success",{username:user})
    else
        res.render('views/unauthorized')
})


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})