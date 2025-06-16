const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser')
const connectDB = require('./db')
const User = require('./UserModel');
const isAuthenticated=require('./middleware/Authenticate')

connectDB()


app.use(bodyParser.json())
app.use(cookieParser())

app.post('/register', async(req, res) => {
    const { email, password } = req.body;
    const isExist =await User.findOne({ email })
    if (isExist) {
        res.status(500).json({
            "success": false,
            "message": "Email already registered"
        })
        return
    }
    const user=await User.create({email,password})
    res.status(200).json({
        "success": true,
        "message": "User Registered"
    })
})

app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    const isExist=await User.findOne({email})
    if(!isExist){
        res.status(500).json({
            "success": false,
            "message": "No user found"
        })
        return
    }
    if(isExist?.password!=password){
        res.status(500).json({
            "success": false,
            "message": "Invalid email or password"
        })
        return
    }
    const options={
        expires:new Date(Date.now()+24*60*60*1000),
        httpOnly:true,
        sameSite:"none",
        secure:true
    }
    res.status(200).cookie("auth",true,{options}).json({
        "success": true,
        "message": "Logged In Successfully"
    })
})

app.get('/logout',(req,res)=>{
    res.status(200).clearCookie("auth",{
        httpOnly:true,
        sameSite:"none",
        secure:true
    }).json({
        "success": true,
        "message": "Logout Successfully"
    })
})

app.get("/users",isAuthenticated,async(req,res)=>{
    const users=await User.find()
    res.status(200).json({
        "success":true,
        users
    })
})

app.listen(8000, () => {
    console.log("Server listen on port 8000")
})