const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
    
})

server.get("/", function (req, res) {
    const about = {
        avatar_url: "https://instagram.fplu9-1.fna.fbcdn.net/v/t51.2885-19/s150x150/80461162_455946308417592_6691935874713649152_n.jpg?_nc_ht=instagram.fplu9-1.fna.fbcdn.net&_nc_ohc=naUYnSgUQgsAX9jtzr0&oh=d72e24cea1337d5f9a3b010c0fe4995c&oe=5F595DBF",
        name: "Fran Morais",
        role: "Aluna - Rocketseat",
        description: 'Administradora do <a href="https://www.doarei.com.br" target="_blank">Site Doarei</a>. Analista Administrativo no <a href="https://www.mg.senac.br" target="_blank">Senac Minas</a>. Aprendendo programação com a <a href="https://www.rocketseat.com.br" target="_blank">Rocketseat</a>.',
        links: [
            { name: "GitHub", url: "https://github.com/imFranMorais" },
            { name: "Instagram", url: "https://www.instagram.com/imfranmorais/?hl=pt-br" },
            { name: "LinkedIn", url: "\\https://www.linkedin.com/in/franciellemorais/" },
        ]
    }
    return res.render("about", { about })
})

server.get("/portfolio", function (req, res) {
    return res.render("portfolio", {items: videos})
})

server.listen(5000, function () {
    console.log("server is running")
})