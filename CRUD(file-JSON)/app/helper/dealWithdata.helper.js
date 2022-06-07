const fs = require("fs")

const writeFromJSON = (fileName , data) =>{

    try {
        fs.writeFileSync(fileName, JSON.stringify(data))
    } catch (e) {
        console.log(e.message);
    }
}

const readFromJSON = (fileName) => {
    let data = []
    try {
        
       data =  JSON.parse(fs.readFileSync(fileName))
        if(!Array.isArray(data)) throw new Error
        
    } catch (error) {
        data = []
    }

    return data;
}

module.exports = {
    writeFromJSON,
    readFromJSON
}