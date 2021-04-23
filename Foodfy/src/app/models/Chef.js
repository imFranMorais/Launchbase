const db = require('../../config/db')

module.exports = {
    all() {
        return db.query(`
            SELECT * FROM chefs
        `)
    },
    create(data, callback) {
        const query = `
            INSERT INTO chefs (
                name,
                avatar_url
            ) VALUES ($1, $2)
            RETURNING id
        `

        const values = [
            data.name,
            data.avatar_url
        ]

        db.query(query, values, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows[0])

        })
    
    },
    find(chefs_id, callback) {
        db.query(`
        SELECT chefs.* FROM chefs WHERE chefs.id = $1`, [chefs_id], function(err, results) {
            if(err) throw `Database Error! ${err}`
            const chef = results.rows[0]
            
            db.query(`
            SELECT recipes.* FROM recipes WHERE recipes.chef_id = $1
            `, [chefs_id], function(err, results) {
                if(err) throw `Database Error! ${err}`
                
                const recipes = results.rows

                chef.recipes = recipes

                callback(chef)
            })

        })
    },
    update(data, callback) {
        const query = `
            UPDATE chefs SET
                name=($1),
                avatar_url=($2)
            WHERE id = $3
        `

        const values = [
            data.name,
            data.avatar_url,
            data.id
        ]

        db.query(query, values, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback()
        })
    },
    delete(id, callback) {
        db.query('DELETE FROM chefs WHERE id = $1', [id], function(err, results) {
            if(err) throw `Database Error! ${err}`

            return callback()
        })

    }

}