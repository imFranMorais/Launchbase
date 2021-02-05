// parei na aula membros, criando botão adicionar instrutores 

const express = require('express')
const routes = express.Router()
const chefs = require('./app/controllers/chefs')
const recipes = require('./app/controllers/recipes')
const site = require('./app/controllers/site')


routes.get('/', function(req, res){
    return res.redirect("/site/index")
})
 
routes.get('/admin/chefs', chefs.index)
routes.get('/admin/chefs/create', chefs.create)
routes.get('/admin/chefs/:id', chefs.show)
routes.get('/admin/chefs/:id/edit', chefs.edit)
routes.post('/admin/chefs', chefs.post)
routes.put('/admin/chefs', chefs.put)
routes.delete('/admin/chefs', chefs.delete)

routes.get('/admin/recipes', recipes.index)
routes.get('/admin/recipes/create', recipes.create)
routes.get('/admin/recipes/:id', recipes.show)
routes.get('/admin/recipes/:id/edit', recipes.edit)
routes.post('/admin/recipes', recipes.post)
routes.put('/admin/recipes', recipes.put)
routes.delete('/admin/recipes', recipes.delete)

routes.get('/site/index', site.index)
routes.get('/site/about', site.about)
routes.get('/site/recipes', site.recipes)
routes.get('/site/recipe/:index', site.recipe)
routes.get('/site/chefs', site.chefs)
routes.get('/site/chef', site.chef)
routes.get('/site/login', site.login)
routes.get('/site/not-found', site.notFound)

module.exports = routes 