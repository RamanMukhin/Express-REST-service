const User = require("../resources/users/user.model");

function toUserDto (req) {
    return {
        name : req.body.name,
        login : req.body.login,
        password : req.body.password,
    };
}

function toUser (newUser) {
    return new User({
        name : newUser.name,
        login : newUser.login,
        password : newUser.password,
    });
}


module.exports = { toUserDto, toUser };