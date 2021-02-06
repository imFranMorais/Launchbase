const db = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(`SELECT * FROM recipes`, function(err, results) {
            if(err) return res.send("Database Error!")

            callback(results.rows)

        })
    },
    create(data, callback) {
        const query = `
            INSERT INTO recipes (
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
            data.image,
            data.name,
            data.title,
            data.ingredients,
            data.preparation,
            data.informationAdd
        ]

        db.query(query, values, function(err, results) {
            if(err) return res.send("Database Error!")

            callback(results.rows[0])


        })
    
    },
    find(id, callback) {
        db.query(`
            SELECT * 
            FROM recipes 
            WHERE id = $1`, [id], function(err, results) {
                if(err) return res.send("Database Error!")
                callback(results.rows[0])
        })
    },
    update(data, callback) {
        const query = `
            UPDATE chefs SET
                image=($1),
                name=($2),
                title=($3),
                ingredients=($4),
                preparation=($5),
                informationAdd=($6)
            WHERE id = $7
        `

        const values = [
            data.image,
            data.name,
            data.title,
            data.ingredients,
            data.preparation,
            data.informationAdd,
            data.id
        ]

        db.query(query, values, function(err, results) {
            if(err) return res.send("Database Error!")

            callback()
        })
    }

}