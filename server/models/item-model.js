const {Schema, model} = require('mongoose');

const ItemSchema = new Schema({
    itemImage: {type: String, required: true},
    itemTitle: {type: String, required: true, unique: true},
    itemDescription: {type: String, required: true},
    itemPrice: {type: Number, required: true}
})
module.exports = model('Items', ItemSchema)