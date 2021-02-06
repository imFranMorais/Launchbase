const Chef = require('../models/Chef')

module.exports = {
    index(req, res) {

        Chef.all(function(chefs) {
            return res.render("admin/chefs/index", { chefs })

        })        
    },
    
    show(req, res) {
      Chef.find(req.params.id, function(chef) {
          if (!chef) return res.send("Chef not found!")

          return res.render("chefs/show", {chef})

      })
    },
    
    create(req, res) {
        return res.render("admin/chefs/create")
    },
    
    post(req, res) {
    
        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields!")
            } 
        }

        Chef.create(req.body, function(chef) {
            return res.redirect(`/chefs/${chef.id}`)
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

