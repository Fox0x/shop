const Router = require('express').Router
const itemsController = require('../controllers/item-controller.js')

const router = new Router()

router.post("/items", itemsController.createItem)
router.get("/items/:id", itemsController.getOneItem)
router.get("/items", itemsController.getAllItems)
router.put("/items", itemsController.updateItem)
router.delete("/items/:id", itemsController.deleteItem)

module.exports = router
