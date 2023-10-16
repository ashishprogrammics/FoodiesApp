const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({id},"apple",{expiresIn:"1d"});

}


module.exports = {generateToken};