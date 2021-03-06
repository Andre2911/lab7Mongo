const roles = require('./role')
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        emun: [roles]
    },
    estado: {
        type: Boolean,
        default: false
    },
    google: {
        type: Boolean,
        default: false
    },
});



UsuarioSchema.methods.toJSON = function() {
    const { __v, password, ...usuario  } = this.toObject();
    return usuario;
}

//exporta el modelo y crea la coleccion dentro de nuestra bd
module.exports = model( 'Usuario', UsuarioSchema );
