const {response} = require('express');

const usuariosGet = (req, res = response) =>{
    res.json({msg:'get Hello World'});
  }
const usuariosPut = (req, res = response) =>{
    const data = req.params.id;
    res.json({msg:'Put Hello World', data});
  }
const usuariosPost = (req, res = response) =>{

    const data = req.body
    res.json({msg:'Post Hello World',"data": data});
  }
const usuariosPatch = (req, res = response) =>{
    res.json({msg:'Patch Hello World'});
  }


  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch
  }