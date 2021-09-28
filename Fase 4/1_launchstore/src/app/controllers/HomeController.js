const { formatPrice } = require('../../lib/utils')

const Product = require('../models/Product')
const File = require('../models/File')

module.exports = {
    async index(req, res) {
        let result = await Product.all()
        const products = result.rows

        if (!products) return res.send("Products not found!")

        async function getImage(productId) {
            let results = await Product.files(product.id)
            let files = results.rows
            files = files.map(file => `${req.protocol}://${req.headers.host}${file.path.replace("public", "")}`)

            return files[0]
        }

        const productsPromise = products.map(product => {
            product.img = await getImage(product)
            product.oldPrice = formatPrice(product.oldPrice)
            product.price = formatPrice(product.price)
            return product
        }).filter((product, index) => index > 2 ? false : true)

        const lastAdded = await Promise.all(productsPromise)

        return res.render("home/index", { products: lastAdded })
    }
}