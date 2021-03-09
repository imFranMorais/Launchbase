const db = require('../../config/db')

module.exports = {
    allChefs(callback) {
        db.query(`
        SELECT *
        FROM chefs`, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows) 

        })  
    },

    findChef(chefs_id, callback) {
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

    allRecipes(callback) {
        db.query(`
        SELECT 
            r.id, r.chef_id, r.image, r.name AS name, r.information, r.ingredients, r.preparation,
            c.id AS id_chef, c.name AS chef, c.avatar_url 
        FROM recipes AS r INNER JOIN chefs AS c ON c.id = r.chef_id
        ORDER BY r.name ASC`, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows)

        })
    },

    findRecipe(id, callback) {
        db.query(` 
            SELECT * 
            FROM recipes 
            WHERE id = $1`, [id], function(err, results) {
                if(err) throw `Database Error! ${err}`
                callback(results.rows[0])

                
        })
    },

    chefsSelectOptions(chef_id, callback) {
        if (chef_id) {
            db.query(`SELECT name, id FROM chefs WHERE id = $1`, [chef_id], function(err, results) {
                if(err) throw `Database Error! ${err}`
    
                callback(results.rows[0])
            })
        } else {
            db.query(`SELECT name, id FROM chefs`, function(err, results) {
                if(err) throw `Database Error! ${err}`
    
                callback(results.rows)
            })
        }

    },

    findBy(filter, callback) {
        db.query(`
        SELECT 
            r.id, r.chef_id, r.image, r.name AS name, r.information, r.ingredients, r.preparation,
            c.id AS id_chef, c.name AS chef, c.avatar_url 
        FROM recipes AS r INNER JOIN chefs AS c ON c.id = r.chef_id
        WHERE r.name ILIKE '%${filter}%'
        ORDER BY r.name ASC`, function(err, results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows)

        })

    }

    

}