const express=require('express')
const {getProduct}=require('./controller')
const rateLimiter=require('./ratelimiter')

const route=express.Router()

route.get('/product',rateLimiter,getProduct)

module.exports=route;
