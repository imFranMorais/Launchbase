const fs = require('fs')
const data = require('./data.json')

//show
exports.show = function (req, res) {
    const { id } = req.params

    const foundChef = data.chefs.find(function(chef){
        return chef.id == id
    })

    if (!foundChef) return res.send("Chef not found!")

    const chef = {
        ...foundChef
    }

    return res.render("/admin/chefs/show", { chef })

}

exports.post = function (req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Please, fill all fields!")
        } 
    }

    let {name, avatar_url} = req.body
    
    const id = Number(data.chefs.length + 1)

    data.chefs.push({
        id,
        name,
        avatar_url,
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function() {
        if (err) return res.send("Write file error!")

        return res.redirect("/admin/chefs")

    })

}

