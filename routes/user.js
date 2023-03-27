const {Router} = require('express');
const {usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch} = require('../controllers/user');
const router = Router();

        router.get('/', usuariosGet);
        router.post('/', usuariosPost);
        router.patch('/', usuariosPatch);
        router.put('/:id', usuariosPut);
       


 module.exports = router;