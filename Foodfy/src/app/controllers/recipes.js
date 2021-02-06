const Recipe = require('../models/Recipe')
const { recipes } = require('./site')

module.exports = {
    index(req, res) {

        Recipe.all(function(recipes) {
            return res.render("admin/recipes/index", { recipes })

        })
    },
    
    show(req, res) {
        Recipe.find(req.params.id, function(recipe) {
            if (!recipe) return res.send("Recipe not found!")

            recipes.ingredients = recipes.ingredients.split(",")
            recipes.preparation = recipes.preparation.split(",")
  
            return res.render("recipes/show", {recipe})
  
        })
    },
    
    create(req, res) {
        return res.render("admin/recipes/create")
    },
    
    post(req, res) {
    
        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields!")
            }
        }

        Recipe.create(req.body, function(recipe) {
            
            return res.redirect(`/recipes/${recipe.id}`)

        })

        
    },
    
    edit(req, res) {
        return
    },
    
    put(req, res) {

        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields!")
            }
        }

        return
    },
    
    delete(req, res) {


        return    
    }
    
}

