const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const conteudos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function(req, res) {
    const about = {
        name: "Rocketseat",
        avatar_url: "https://rocketseat.gallerycdn.vsassets.io/extensions/rocketseat/rocketseatreactnative/3.0.1/1588456740326/Microsoft.VisualStudio.Services.Icons.Default",
        role: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        description: "No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
        list: "Imagine você dominando as mesmas tecnologias adotadas pelos melhores times do mundo, construindo aplicações de alta performance e se destacando entre os maiores programadores: <li>Javascript</li><li>Javascript ES6+</li><li>NodeJS</li><li>ReactJS</li><li>React Native</li>",
        links: [
            {name: "GitHub", url: "https://github.com/rocketseat" },
            {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br" },
            {name: "Facebook", url: "https://www.facebook.com/rocketseat/" }


        ]
    }
    return res.render("desafio3-1_about", { about })
})

server.get("/courses", function(req, res) {
    return res.render("desafio3-1_courses", {items: conteudos})
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;

    const course = conteudos.find(function(course) {
        return course.id == id
    })

        if (!course) {
            return res.send("course not found")
        }
        return res.render("desafio3-3_course", { item: course })
        return res.send(`O id fornecido na rota é: ${id}`);
  });


server.use(function(req, res) {
    res.status(404).render("desafio3-1_not-found")
})

server.listen(1000, function() {
    console.log("server is running")
})