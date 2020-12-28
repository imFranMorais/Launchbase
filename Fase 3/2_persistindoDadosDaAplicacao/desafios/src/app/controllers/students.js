const student = require('../models/student')
const { date, schoolYear } = require('../../lib/utils')

module.exports = {
    index(req, res) {
        student.all(function(students){
            return res.render("students/index", {students})
        })
    },

    create(req, res) {
        return res.render('students/create')
    },

    post(req, res) {

        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Cadastre algo!")
            }
        }

        student.create(req.body, function(student) {
            return res.redirect(`/students/${student.id}`)
        })

    },

    show(req, res) {
        student.find(req.params.id, function(student) {
            if (!student) return res.send("Student not found!")
            
            student.birth = date(student.birth).birthDay

            return res.render("students/show", {student})
        })

    },

    edit(req, res) {
        student.find(req.params.id, function(student) {
            if (!student) return res.send("Student not found!")
            
            student.birth = date(student.birth).iso


            return res.render("students/edit", {student})


        })
    },

    put(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("cadastre algo")
            }
        }

        student.update(req.body, function() {
            return res.redirect(`/students/${req.body.id}`)
        })
    },

    delete(req, res) {
        student.delete(req.body.id, function() {
            return res.redirect(`/students`)
        })    }
}

