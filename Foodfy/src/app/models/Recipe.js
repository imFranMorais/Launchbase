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

}