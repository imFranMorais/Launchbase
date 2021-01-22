const express = require('express')
const routes = express.Router()
const chefs = require('./chefs')
const recipes = require('./recipes')


routes.get('/', function(req, res){
    return res.redirect("/site/index")
})

routes.get('/admin/chefs', function(req, res){
    return res.render("admin/chefs/index")
})

routes.get('/admin/chefs/create', function(req, res){
    return res.render("admin/chefs/create")
})

routes.get('/admin/chefs/:id', chefs.show)

routes.get('/admin/chefs/:id/edit', chefs.edit)

routes.post('/admin/chefs', chefs.post)

routes.put('/admin/chefs', chefs.put)

routes.get('/admin/recipes', function(req, res){
    return res.render("admin/recipes/index")
})

routes.get('/admin/recipes/create', function(req, res){
    return res.render("admin/recipes/create")
})

routes.get('/admin/recipes/:id', recipes.show)

routes.get('/admin/recipes/:id/edit', recipes.edit)

routes.post('/admin/recipes', recipes.post)

routes.put('/admin/recipes', recipes.put)

routes.get('/site/about', function(req, res){
    return res.render("site/about")
})

routes.get('/site/chef', function(req, res){
    return res.render("site/chef")
})

routes.get('/site/chefs', function(req, res){
    return res.render("site/chefs")
})

routes.get('/site/index', function(req, res){
    return res.render("site/index")
})

routes.get('/site/login', function(req, res){
    return res.render("site/login")
})

routes.get('/site/not-found', function(req, res){
    return res.render("site/not-found")
})

routes.get('/site/recipe', function(req, res){
    return res.render("site/recipe")
})

routes.get('/site/recipes', function(req, res){
    return res.render("site/recipes")
})




// C:\Users\franc\Documents\Launchbase\Foodfy\src\app\views\site\index.njk

// routes.get("/about", recipes.about) // Mostra a página sobre
// routes.get("/recipes", recipes.recipes) // Mostra a lista de receitas
// routes.get("/recipe/:index", recipes.recipe) //Mostra os detalhes de uma receita

// routes.get("/recipes", recipes.indexAdmin); // Mostrar a lista de receitas no Admin
// routes.get("/recipes/create", recipes.create); // Mostrar formulário de nova receita
// routes.get("/recipes/:id", recipes.show); // Exibir detalhes de uma receita no Admin
// routes.get("/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

// routes.post("/recipes", recipes.post); // Cadastrar nova receita
// routes.put("/recipes", recipes.put); // Editar uma receita
// routes.delete("/recipes", recipes.delete); // Deletar uma receita

 
module.exports = routes 