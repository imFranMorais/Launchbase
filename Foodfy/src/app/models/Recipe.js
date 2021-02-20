const db = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(`
        SELECT * 
        FROM recipes
        ORDER BY name ASC`, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows)

        })
    },
    create(data, callback) {
        const query = `
            INSERT INTO recipes (
                image,
                name,
                ingredients,
                preparation,
                information
                chef_id,
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `

        const values = [
            data.image,
            data.name,
            data.ingredients,
            data.preparation,
            data.information,
            data.chef
        ]

        db.query(query, values, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows[0])


        })
    
    },
    find(id, callback) {
        db.query(` 
            SELECT * 
            FROM recipes 
            WHERE id = $1`, [id], function(err, results) {
                if(err) throw `Database Error! ${err}`
                callback(results.rows[0])
        })
    },
    update(data, callback) {
        const query = `
            UPDATE chefs SET
                image=($1),
                name=($2),
                ingredients=($3),
                preparation=($4),
                information=($5),
                chef_id=($6)
            WHERE id = $7
        `

        const values = [
            data.image,
            data.name,
            data.ingredients,
            data.preparation,
            data.information,
            data.chef,
            data.id
        ]

        db.query(query, values, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback()
        })
    },
    delete(id, callback) {
        db.query('DELETE FROM recipes WHERE id = $1', [id], function(err, results) {
            if(err) throw `Database Error! ${err}`

            return callback()
        })

    },
    chefsSelectOptions(callback) {
        db.query(`SELECT name, id FROM chefs`, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows)
        })

    }

}