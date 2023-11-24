const controller = {
    login: (req, res) => {
        res.render('./users/login')
    },
    singIn: (req, res) => {
        res.redirect('/')
    },
    register: (req, res)=>{
        res.render('./users/register')
    },
    singUp: (req, res) => {
        res.redirect('/users/login')
    }
}

module.exports = controller;