const db = require('../../config/db')

module.exports = {
    index(req, res) {
        return res.render("admin/chefs/index")
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

        const query = `
            INSERT INTO chefs (
                name,
                avatar_url
            ) VALUES ($1, $2)
            RETURNING id
        `

        const values = [
            req.body.name,
            req.body.avatar_url
        ]

        db.query(query, values, function(err, results) {
            if(err) return res.send("Database Error!")

            return res.redirect(`/chefs/${results.rows[0].id}`)

        })
    },
    
    edit(req, res) {
    
        return    },
    
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

