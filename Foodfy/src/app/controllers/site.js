const Site = require('../models/Site')

module.exports = {
    about(req, res) {
        return res.render("site/about")
    },
    
    chef(req, res) {
      
        Site.findChef(req.params.id, function(chef) {
          if (!chef) return res.send("Chef not found!")
              
          return res.render("site/chef", {chef})
        }) 
    },

    chefs(req, res) {

        Site.allChefs(function(chefs) {
            return res.render("site/chefs", { chefs })
        })        
    }, 

    index(req, res) {

        Site.allRecipes(function(recipes) {
            return res.render("site/index", { recipes })
        })
    },
    
    recipe(req, res) {
        Site.findRecipe(req.params.id, function(recipe) {
            if (!recipe) return res.send("Recipe not found!")
            
            Recipe.chefsSelectOptions(recipe.chef_id, function(chef) {
                recipe.chef = chef.name 
                
                return res.render("site/recipe", {recipe})
            })
            
        })
    },
    
    recipes(req, res) {
        const { filter } = req.query
        if ( filter ) {
            Site.findBy(filter, function(recipes) {
                return res.render("site/recipes", { recipes })
            })

        } else {
            Site.allRecipes(function(recipes) {
                return res.render("site/recipes", { recipes })
            })
        }
        
        
    },
    
    login(req, res) {
        return res.render("site/login")
    },
    
    notFound(req, res) {
        return res.render("site/not-found")
    }
}

