const Recipe = require('../models/Recipe')
const Chef = require('../models/Chef')

module.exports = {
    index(req, res) {

        Recipe.all(function(recipes) {
            return res.render("admin/recipes/index", { recipes })
        })
    },
    
    show(req, res) {
        Recipe.find(req.params.id, function(recipe) {
            if (!recipe) return res.send("Recipe not found!")

            Recipe.chefsSelectOptions(recipe.chef_id, function(chef) {
                recipe.chef = chef.name

                return res.render("admin/recipes/show", {recipe})
            })
  
        })
    },
    
    create(req, res) {

        Chef.all()
        .then(function(results) {

            const chefOptions = results.rows
            return res.render("admin/recipes/create.njk", { chefOptions })

        }).catch(function(err) {
            throw new Error(err)
        })
    },
    
    post(req, res) {
    
        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields!")
            }
        }

        Recipe.create(req.body, function(recipe) {
            
            return res.redirect(`/admin/recipes/${recipe.id}`)

        })

        
    },
    
    edit(req, res) {
        
        Recipe.find(req.params.id, function(recipe) {
            if (!recipe) return res.send("Recipe not found!")

            Recipe.chefsSelectOptions(null, function(chefs) {

                return res.render("admin/recipes/edit", {recipe, chefOptions: chefs})
            })
  
        })
    },
    
    put(req, res) {

        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields!")
            }
        } 

        Recipe.update(req.body, function() {
            return res.redirect(`/admin/recipes/${req.body.id}`)

        })
    },
    
    delete(req, res) {
        Recipe.delete(req.body.id, function() {
            return res.redirect(`/admin/recipes`)
        })  
    }
    
}

