const Chef = require('../models/Chef')

module.exports = {
    index(req, res) {

        Chef.all(function(chefs) {
            return res.render("admin/chefs/index", { chefs })

        })        
    },
    
    show(req, res) {
      return
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

