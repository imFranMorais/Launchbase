module.exports = {
    index(req, res) {
        return res.render("site/index")
    },
    
    about(req, res) {
        return res.render("site/about")
    },
    
    recipes(req, res) {
        return res.render("site/recipes")
    },
    
    recipe(req, res) {
        return res.render("site/recipe")
    },
    
    chefs(req, res) {
        return res.render("site/chefs")
    },
    
    chef(req, res) {
        return res.render("site/chef")
    },
    
    login(req, res) {
        return res.render("site/login")
    },
    
    notFound(req, res) {
        return res.render("site/not-found")
    }
}

