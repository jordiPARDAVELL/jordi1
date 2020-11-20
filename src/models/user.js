const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    nombre: String,
    comentario: String,
    email: String
}, {
    timestamps: true
});

module.exports = model('User', userSchema);