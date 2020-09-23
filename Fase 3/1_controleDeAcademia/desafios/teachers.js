const fs = require('fs')
const data = require("./data.json")

// create
exports.post = function(req, res){

    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == ""){
            return res.send("cadastre algo")
        }
    }

    let  { avatarUrl, name, birth, educationalLevel, typeOfClass, occupationArea } = req.body
    
    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    
    data.teachers.push({
        avatarUrl, 
        name, 
        birth, 
        educationalLevel, 
        typeOfClass, 
        occupationArea,
        created_at,
        id
    })


    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error")

        return res.redirect("/teachers")
    })

}