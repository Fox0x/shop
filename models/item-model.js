const {Schema, model} = require('mongoose');

const ItemSchema = new Schema({
    image: {type: String, required: true},
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
})
module.exports = model('Items', ItemSchema)