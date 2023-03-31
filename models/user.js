const {Schema,model} = require('mongoose');


const usuarioSchema= Schema({
nombre:{
    type: String,
    required: [true,'El nombre es requerido.']
},
correo:{
    type: String,
    required: [true,'El correo es requerido.'],
    unique: true
},
password:{
    type: String,
    required: [true,'La contraseña es requerida.']
},
img:{
    type: String,
},
rol:{
    type: String,
    required: true,
    emun: ['ADMIN_ROLE','USER_ROLE']
},
estado:{
    type: Boolean,
},
google:{
    type: Boolean,
    default: false
}
})

usuarioSchema.methods.toJSON = function(){
const { __v, password, ...usuario} = this.toObject();
return usuario;
}

module.exports = model('Usuario',usuarioSchema );
