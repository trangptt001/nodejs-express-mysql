const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require("../models");
const User = db.User;
const { responseSuccess, responseError } = require('./../helpers/create-response');
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
            res.status(401).send(responseError(401, "Password is not correct"))
            return;
        }
        const payload = {
            username: user.username
        }

        let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY, {expiresIn: '30s'});
        return res.status(200).send(responseSuccess("login success", {
            username: user.username,
            accessToken: accessToken
        }))
    }
    
}

module.exports.signup = async (req, res) => {
    if(!req.body.username || !req.body.password){
        res.status(400).send(responseError(400, "User must have user name and password"));
        return;
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
        res.status(400).send(responseError(400,"User is already exit on system"));
        return
    }
    User.create(model).then(data => {
        if(data){
            res.status(200).send(responseSuccess("Register success", {
                userid: data.id,
                username: data.username
            }))
        }
    })
    .catch(err => {
        res.status(500).send(responseError(500, "Sonething wrong", err))
    })
}