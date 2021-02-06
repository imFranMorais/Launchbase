const db = require('../../config/db')

module.exports = {
    index(req, res) {

        db.query(`SELECT * FROM recipes`, function(err, results) {
            if(err) return res.send("Database Error!")

            return res.render("admin/recipes/index", {recipes: results.rows})

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

        const query = `
            INSERT INTO recipes (
                id,
                image,
                name,
                title
                ingredients,
                preparation,
                informationAdd
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `

        const values = [
            req.body.image,
            req.body.name,
            req.body.title,
            req.body.ingredients,
            req.body.preparation,
            req.body.informationAdd
        ]

        db.query(query, values, function(err, results) {
            if(err) return res.send("Database Error!")

            return res.redirect(`/recipes/${results.rows[0].id}`)

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

