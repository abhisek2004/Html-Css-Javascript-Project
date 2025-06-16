const express=require("express");
const bodyParser=require('body-parser')
const app=express()
const {readData,writeData} = require("./util/utils");
const cors=require('cors')

app.use(bodyParser.json())
app.use(cors({
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}))


//READ
//Fetch All Students
app.get('/api/',(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Students data fetched",
        data:readData()
    })
})

//READ
//Fetch Student
app.get('/api/:rollno',(req,res)=>{
    const rollno=req.params.rollno;
    var result=readData()
    if(!result[rollno]){
        res.status(500).json({
            success:false,
            message:"Student not exists",
        })
        return
    }
    res.status(200).json({
        success:true,
        message:"Student exits",
        data:result[rollno]
    })
})


//CREATE
//Add new student
app.post('/api/add',(req,res)=>{
    const {data}=req.body
    var result=readData()
    if(result[data.rollno]){
        res.status(500).json({
            success:false,
            message:"Student already exists"
        })
        return
    }
    result[data.rollno]=data;
    writeData(result)
    res.status(200).json({
        success:true,
        message:"Student Added"
    })
})

//UPDATE
//Edit Student
app.put('/api/edit',(req,res)=>{
    const {data}=req.body
    var result=readData()
    if(!result[data.rollno]){
        res.status(500).json({
            success:false,
            message:"Student not found"
        })
        return
    }
    result[data.rollno]=data;
    writeData(result)
    res.status(200).json({
        success:true,
        message:"Student Updated"
    })
})

//DELETE
//Delete Student
app.post('/api/delete',(req,res)=>{
    const {data}=req.body
    var result=readData()
    if(!result[data.rollno]){
        res.status(500).json({
            success:false,
            message:"Student not found"
        })
        return
    }
    delete result[data.rollno]
    writeData(result)
    res.status(200).json({
        success:true,
        message:"Student Deleted"
    })
})


app.listen(8000,()=>{
    console.log(`app listening on port ${8000}`)
})