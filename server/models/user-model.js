const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    password: {type: String, required: true}
})
module.exports = model('User', UserSchema)