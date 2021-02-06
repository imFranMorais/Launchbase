const Recipe = require('../models/Recipe')

module.exports = {
    index(req, res) {

        Recipe.all(function(recipes) {
            return res.render("admin/recipes/index", { recipes })

        })
    },
    
    show(req, res) {
        return
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

