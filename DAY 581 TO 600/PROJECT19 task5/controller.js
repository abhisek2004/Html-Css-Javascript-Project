const axios = require('axios')

exports.getProduct = async (req, res) => {
    try {
        const re = await axios.get(`https://fakestoreapi.com/products/${Math.floor(Math.random()*21)}`)
        res.status(200).json({
            success: true,
            details: re.data
        })
    }catch(err){
        res.status(400).json({
            success:false,
            err
        })
    }
}