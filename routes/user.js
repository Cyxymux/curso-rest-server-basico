const {Router} = require('express');
const {usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete} = require('../controllers/user');
const {check} = require('express-validator');
const {validarCampos} = require('../middleware/validar-campos');
const {rolValido, emailValido,usuarioValido} = require('../helpers/db-validators');
const router = Router();

        router.get('/', usuariosGet);

        router.post('/',[
            check('nombre', "No es un nombre valido").not().isEmpty(),
            check('password', "El password no es valido").isLength({min: 6}),
            check('correo', "El correo no es valido").custom(emailValido).isEmail(),
            check('rol').custom(rolValido),
            validarCampos
        ],usuariosPost);

        router.put('/', [
            check('_id','Error en el id').isMongoId(),
            check('_id').custom(usuarioValido),
            check('rol').custom(rolValido),
            validarCampos
        ],usuariosPut);

        router.delete('/',[
            check('_id','Error en el id').isMongoId(),
            check('_id').custom(usuarioValido),
            validarCampos],
        usuariosDelete);
       


 module.exports = router;