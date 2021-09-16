const ItemService = require('../services/item-service.js')

class ItemController {
    async createItem(req, res) {
        try {
            const post = await ItemService.createItem(req.body)
            return res.json(post)
        } catch (e) {
            res.status(400).json(e.message)
        }
    }

    async getOneItem(req, res) {
        try {
            const post = await ItemService.getOneItem(req.params._id)
            return res.json(post)
        } catch (e) {
            res.status(400).json(e.message)
        }
    }

    async getAllItems(req, res) {
        try {
            const post = await ItemService.getAllItems()
            return res.json(post)
        } catch (e) {
            res.status(400).json(e.message)
        }
    }

    async updateItem(req, res) {
        try {
            const post = await ItemService.updateItem(req.body)
            return res.json(post)
        } catch (e) {
            res.status(400).json(e.message)
        }
    }

    async deleteItem(req, res) {
        try {
            const post = await ItemService.deleteItem(res.params._id)
            return res.json(post)
        } catch (e) {
            res.status(400).json(e.message)
        }
    }
}

module.exports = new ItemController();

