const jwt = require('jsonwebtoken');

// ===============
// Verificar token
// ===============
let verificarToken = (req, res, next) => {

    // let token = req.get('token');
    let token = req.query.token;
    // Si mando token, verifico la session, de lo contrario es un usuario anonimo
    // ya que un usuario puede navegar por el sitio sin necesidad de iniciar sesion
    // si inicio sesion, desde angular obtengo el token y lo envio
    // verifico el tiempo de la sesion y si esta activo dentro del tiempo establecido
    // se actualiza el tiempo nuevamente
    if (token) {
        jwt.verify(token, process.env.SEED, (err, decoded) => {
            if (err) {
                req.ok = false;
                req.err = 'Token no válido';
                req.tokenRefresh = '';
                req.usuario = '';
                next();
            } else {
                const tokenRefresh = jwt.sign({
                    datosUser: decoded.datosUser
                }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

                req.ok = true;
                req.err = '';
                req.tokenRefresh = tokenRefresh;
                req.usuario = decoded.datosUser;
                next();
            }
        });
    } else {
        req.ok = true;
        req.err = '';
        req.tokenRefresh = '';
        req.usuario = '';
        next();
    }
};

module.exports = {
    verificarToken
}