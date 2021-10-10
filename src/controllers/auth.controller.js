const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require("../models");
const ErrorResponse = require('../utils/error.class');
const SuccessResponse = require('../utils/success.class');
const User = db.User;
require('dotenv').config();

module.exports.login = async (req, res) => {
    if(!req.body.username || !req.body.password){
        res.status(400).send(responseError(400, "User must have user name and password"));
        return;
    }
    const user = await User.findOne({username: req.body.username});
    if(!user){
        res.status(400).send(responseError(400, "User not found"))
        return;
    }else{
        let checkPassword = bcrypt.compare(req.body.password, user.password);
        if(!checkPassword){
            res.status(401).send(new ErrorResponse('MSG04', 401, "Password is not correct"))
            return;
        }
        const payload = {
            username: user.username
        }

        let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY, {expiresIn: '30s'});
        return res.status(200).send(
            new SuccessResponse(200, {
            username: user.username,
            accessToken: accessToken
        }, "login success"))
    }
    
}

module.exports.signup = async (req, res) => {
    if(!req.body.username || !req.body.password){
        return res.status(400).send(
            new ErrorResponse("MES033",400, "User must have user name and password")
        );
    }

    const salt = await bcrypt.genSalt(12)
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const model = {
        username: req.body.username,
        password: hashPassword,
        status: "ACTIVE",
        createdAt: Date.now()
    }

    const dataUsers = await User.findAll({where: {username: model.username}});
    if(dataUsers.length > 0){
        return res.status(400).send(
            new ErrorResponse("MES033",400, "Username already in system")
        );
    }
    User.create(model).then(data => {
        if(data){
            res.status(200).send(new SuccessResponse(200, {
                userid: data.id,
                username: data.username
            },"Register success"))
        }
    })
    .catch(err => {
        return res.status(500).send(
            new ErrorResponse("MSG00",500, error.message)
        )
    })
}