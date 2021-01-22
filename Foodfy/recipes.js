const fs = require('fs')
const data = require('./data.json')

//show
exports.show = function (req, res) {
    const { id } = req.params

    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })

    if (!foundRecipe) return res.send("Recipe not found!")

    const recipe = {
        ...foundRecipe,
        ingredients: foundRecipe.ingredients.split(","),
        preparation: foundRecipe.preparation.split(","),

    }

    return res.render("/admin/recipes/show", { recipe })
}

// create
exports.post = function (req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Please, fill all fields!")
        }
    }

    let {image, name, title, ingredients, preparation, informationAdd} = req.body
    
    const id = Number(data.recipes.length + 1)

    data.recipes.push({
        id,
        image, 
        name, 
        title, 
        ingredients, 
        preparation, 
        informationAdd
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function() {
        if (err) return res.send("Write file error!")

        return res.redirect("/admin/recipes")

    })

    // return res.send(req.body)
}

exports.edit = function(req, res){

    const { id } = req.params

    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })

    if (!foundRecipe) return res.send("Recipe not found!")


    return res.render("admin/recipes/edit", { recipe: foundRecipe })
}
// update
// delete