const rateLimiter=require('express-rate-limit')

const limiter=rateLimiter({
    windowMs:30*1000,
    max:2,
    message:{
        success:false,
        message:"Please try later...You reaches the limit"
    }
})

module.exports=limiter;