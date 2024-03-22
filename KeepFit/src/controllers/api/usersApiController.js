const db = require('../../database/models');
const sequelize = db.sequelize;
const {Op} = require('sequelize');

const usersApiController = {
    list: async (req, res) => {
        const users = await db.Users.findAll({attributes: ['id', 'name', 'email']});
        for (let i = 0; i < users.length; i++) {
            const element = users[i];
            element.dataValues.detail = 'http://localhost:8000' + req.originalUrl + '/' + element.id;
        }
        let respuesta = {
            count: users.length,
            users: { ...users }
        }
        res.json(respuesta)
    },

    detail: async (req, res) => {
        const user = await db.Users.findByPk(req.params.id, {attributes: ['id', 'name', 'first_name', 'last_name', 'email', 'avatar']});
        const http = 'http://';
        const https = 'https://';
        if(!user.dataValues.avatar.includes(http) && !user.dataValues.avatar.includes(https)) {
            user.dataValues.avatar = `http://localhost:8000/img/users/${user.dataValues.avatar}`;
        }
        res.json(user)
    },

}

module.exports = usersApiController;