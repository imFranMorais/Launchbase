const db = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(`
        SELECT 
            r.id, r.chef_id, r.name AS name, r.information, r.ingredients, r.preparation,
            c.id AS id_chef, c.name AS chef
        FROM recipes AS r INNER JOIN chefs AS c ON c.id = r.chef_id
        ORDER BY r.name ASC`, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows)

        })
    },
    create(data) { 
        const query = `
            INSERT INTO recipes (
                chef_id,
                name,
                information,
                ingredients,
                preparation
            ) VALUES ($1, $2, $3, $4, $5)
            RETURNING id
        `

        const values = [
            data.chef,
            data.name,
            data.information,
            data.ingredients,
            data.preparation,
        ]

        return db.query(query, values)
    
    },
    find(id) {
        return db.query(` 
            SELECT * 
            FROM recipes 
            WHERE id = $1`, [id])
    },
    update(data) {
        const query = `
            UPDATE recipes SET
                chef_id=($1),
                name=($2),
                information=($3),
                ingredients=($4),
                preparation=($5)
            WHERE id = $6
        `
 
        const values = [
            data.chef_id,
            data.name,
            data.information,
            data.ingredients,
            data.preparation,
            data.id
        ]

        return db.query(query, values)
    },
    delete(id) {
        return db.query('DELETE FROM recipes WHERE id = $1', [id])

    }
}