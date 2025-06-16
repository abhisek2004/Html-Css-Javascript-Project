const mongo = require('mongoose')
var url = "YOUR DATABASE URI";

const connectDB = () => {
    mongo.set("strictQuery", false)
    mongo.connect(url).then((con) => {
        console.log(`Database run on ${con.connection.host}`)
    })
}

module.exports=connectDB;