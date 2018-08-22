const express = require('express')
const router = express.Router();
const ApiResponse = require('../helper/ApiResponse');
const AuthHelper = require('../helper/AuthHelper');
const model = require('../configdb/sequelize');
const UserDTO = require('../dto/UserDTO');


class AdminServices {
    constructor() {
        this.router = router;
        this.router.post('/login', this.login);
        this.router.post('/register', this.register);
        
    }

    async login(req, res) {
        const username = req.body.username;
        const password = req.body.password;
        

        try {
            let user = await model.admin.findOne({
                where: {
                    username
                }
            });

            if(!user) {
                throw "username invalid in database";
            } else {
                AuthHelper.verifyPassword(password, user.passwordHash);
                user = new UserDTO(user).toObject();
                const userResponse = {
                    user,
                    token: AuthHelper.generateToken(user)
                }
                ApiResponse.success(userResponse)(res);
            }
            
        } catch (error) {
            console.log(error);
            ApiResponse.error(error)(res);
        }

        
    }

    async register(req, res) {
        const username = req.body.username;
        const password = req.body.password;
        const passwordHash = AuthHelper.hashPassword(password);

        const data = {
            username,
            passwordHash,
            role: "admin"
        }

        let user;

        try {
              
            const existUser = await model.admin.findOne({
                where: {
                    username
                }
            })

            if(existUser) {
                throw "user is exist in database";
            } else {
                user = await model.admin.create(data);
                user = new UserDTO(user).toObject();
            }

            const userResponse = {
                user,
                token: AuthHelper.generateToken(user)
            }

            ApiResponse.success(userResponse)(res);
        } catch (error) {
            console.log(error);
            ApiResponse.error(error)(res);
        }

        
    }
  
}

module.exports = new AdminServices().router;