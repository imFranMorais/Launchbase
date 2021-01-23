const { DH_CHECK_P_NOT_SAFE_PRIME } = require('constants')
const fs = require('fs')
const data = require('../data.json')

exports.index = function (req, res) {
    return res.render("site/index", { recipes: data.recipes })
}

exports.about = function (req, res) {
    return res.render("site/about")
}

exports.recipes = function (req, res) {
    return res.render("site/recipes")
}

exports.recipe = function (req, res) {
    return res.render("site/recipe")
}

exports.chefs = function (req, res) {
    return res.render("site/chefs")
}

exports.chef = function (req, res) {
    return res.render("site/chef")
}

exports.login = function (req, res) {
    return res.render("site/login")
}

exports.notFound = function (req, res) {
    return res.render("site/not-found")
}