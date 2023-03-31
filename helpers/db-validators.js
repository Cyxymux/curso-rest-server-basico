const Role = require('../models/rol');
const Usuario = require('../models/user');
const bcryptjs = require('bcryptjs');

const rolValido = async (rol = '')=>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error('El rol es invalido');
    }
}

const emailValido = async (correo = '')=>{
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
      throw new Error('El correo ya se encuentra registrado');
    }
}

const usuarioValido = async (_id)=>{
    const existeUsuario = await Usuario.findById(_id);
    if(!existeUsuario){
      throw new Error('El usuario no se encuentra registrado');
    }
}

const encriptarPassword = (password) =>{

    const salt = bcryptjs.genSaltSync();
    const encript = bcryptjs.hashSync(password, salt); 
    return encript;
}

module.exports = {
    rolValido,
    emailValido,
    usuarioValido,
    encriptarPassword
}