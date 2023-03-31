const {response} = require('express');
const Usuario = require('../models/user');
const {encriptarPassword} = require('../helpers/db-validators');



const usuariosGet = async (req, res) =>{
  const {limite = 5} = req.body;
  /*const usuarios = await Usuario.find()
  .limit(limite);

  const total = await Usuario.countDocuments();
    res.json({usuarios, total});
  */

  const [usuarios, total] = await Promise.all([
    Usuario.find()
  .limit(limite),
  Usuario.countDocuments()
  ]);
  res.json({total, usuarios});
}
const usuariosPut = async (req, res = response) =>{
    const{password, correo, google,... resto} = req.body;
    /*if(password){
        password = encriptarPassword(password);
    }*/

    const usuario = await Usuario.findByIdAndUpdate(resto._id, resto);

    res.json({msg:'Put Hello World', usuario});
  }

const usuariosPost = async (req, res = response) =>{
  
  const {nombre, password, correo, rol} = req.body
    const usuario = new Usuario({nombre, password, correo, rol});
    
   

    await usuario.save();
    res.json({msg:'Post Hello World', usuario});
  }
const usuariosDelete = async (req, res = response) =>{
  const {_id} = req.body;

  //const usuario = await Usuario.findByIdAndDelete(_id);
  const usuario = await Usuario.findByIdAndUpdate(_id, {estado: true});
    res.json(usuario);
  }


  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
  }