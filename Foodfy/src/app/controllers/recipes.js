module.exports = {
    index(req, res) {
        return res.render("admin/recipes/index")
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
    

        return
        
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

