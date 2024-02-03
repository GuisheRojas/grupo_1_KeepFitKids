function authMiddleware (req, res, next)  {
    if (req.session && req.session.user) {
      return next(); // Si está logueado, permite continuar
    }
    res.redirect('/users/login'); // Si no está logueado, redirige al login
  };

  module.exports = authMiddleware;