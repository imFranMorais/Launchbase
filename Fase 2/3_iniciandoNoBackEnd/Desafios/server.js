const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.render("desafio3-1_courses")
})

server.get("/courses", function(req, res) {
    return res.render("desafio3-1_courses")
})

server.get("/about", function(req, res) {
    return res.render("desafio3-1_about")
})

server.use(function(req, res) {
    res.status(404).render("desafio3-1_not-found")
})

server.listen(1000, function() {
    console.log("server is running on http://localhost:1000")
})