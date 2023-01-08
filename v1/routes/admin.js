const router = require("express").Router()
const controller = require("../controller/")


router.get("/get-order", controller.admin.order)
router.get("/get-all-products", controller.admin.allProducts)



module.exports = router