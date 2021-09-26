const Item = require("../models/item-model.js")

class ItemService {
    async createItem(item) {
        return await Item.create({...item})
    }

    async getOneItem(id) {
        if (!id) {
            throw new Error("Item id is required")
        }
        return Item.findById(id);
    }

    async getAllItems() {
        return Item.find()
    }

    async updateItem(item) {
        if (!item._id) {
            throw new Error("Item id is required")
        }
        return Item.findByIdAndUpdate(item._id, item, {new: true});
    }

    async deleteItem(id) {
        if (!id) {
            throw new Error("Item id is required")
        }

        return Item.findByIdAndDelete(id);
    }
}

module.exports = new ItemService()