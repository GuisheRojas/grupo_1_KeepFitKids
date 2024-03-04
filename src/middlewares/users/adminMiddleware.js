function adminMiddleware (req, res, next)  {
    if (req.session && req.session.user) {
        if (req.session.user.role == 1) {
            return next(); // Si está logueado y es admin, permite continuar
        }
        res.send('Esta página es solo para administradores')
    }
    res.redirect('/users/login'); // Si no está logueado, redirige al login
  };

  module.exports = adminMiddleware;