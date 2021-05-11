const Recipe = require('../models/Recipe')
const Chef = require('../models/Chef')
const File = require('../models/File')

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
    
    async post(req, res) {
        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields!")
            }
        }

        if (req.files.length == 0)
            return res.send('Please, send at least one image')


        let results = await Recipe.create(req.body)
        const recipeId = results.rows[0].id

        req.files.forEach(file => {
            await File.create({ 
                ...file,
                product_id: product_id })
        })

        return res.redirect(`/admin/recipes/${recipeId}/edit`)

    },
    
    async edit(req, res) {
        let results = await Recipe.find(req.params.id)
        const recipe = results.rows[0]

        if (!recipe) return res.send("Recipe not found!")

        results = await Chef.all()
        const chefOptions = results.rows

        return res.render("admin/recipes/edit.njk", {recipe, chefOptions})
  
    },
    
    async put(req, res) {
        const keys = Object.keys(req.body)
        
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields!")
            }
        } 
        
        await Recipe.update(req.body)
        
        return res.redirect(`/admin/recipes/${req.body.id}/edit`)
    },
    
    async delete(req, res) {
        await Recipe.delete(req.body.id)
            return res.redirect(`/admin/recipes/create`)
    }
}

