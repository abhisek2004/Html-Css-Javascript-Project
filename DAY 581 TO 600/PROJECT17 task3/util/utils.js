const fs=require("fs");
const path=require("path");
function readData(){
    return JSON.parse(fs.readFileSync(path.join(__dirname,'../data.json'), 'utf8'));
}

function writeData(data){
    fs.writeFileSync(path.join(__dirname,'../data.json'),JSON.stringify(data))
}

module.exports={readData,writeData};
