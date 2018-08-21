const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthHelper {
    constructor() {
        this.saltRounds = 10;
    }

    hashPassword(password) {
        return bcrypt.hashSync(password, this.saltRounds);
    }

    verifyPassword(password, passwordHash) {
        if(!bcrypt.compareSync(password, passwordHash)) {
            throw "password incorrect";
        }
    }

    generateToken(data) {
        let token = jwt.sign(data, 'IloveGod',  { expiresIn: '7d' });
        return token;
    }

    verifyToken(token) {
        if(!token) {
            throw "invlid token"; 
        }
        const decoded = jwt.verify(token, 'IloveGod');
        if(!decoded) {
            throw "token incorrect"
        } else {
            return decoded
        }
    }
}

module.exports = new AuthHelper();