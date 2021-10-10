const base = require('./base.constroller');
const db = require("../models");
const Customer = db.Customer;
const schemas = require("../utils/schemas")
const Joi = require('joi');
const ErrorResponse = require('../utils/error.class')
module.exports.create = async (req, res) => {
    try{
        const { error } = schemas.customerPOST.validate(req.body);
        const valid = error == null; 
        if(!valid){
            const { details } = error; 
            const message = details.map(i => i.message).join(',');
            return res.status(400).send(
                new ErrorResponse("MSG04",400, message)
            )
        }
        base.create(Customer);
    }catch(error){
        return res.status(500).send(
            new ErrorResponse("MSG00",500, error.message)
        )
    }
};

module.exports.findOne = base.findByPk(Customer);

module.exports.update = async (req, res) => {
    try{
        const { error } = schemas.customerPOST.validate(req.body);
        const valid = error == null; 
        if(!valid){
            const { details } = error; 
            const message = details.map(i => i.message).join(',');
            return res.status(400).send(
                new ErrorResponse("MSG04",400, message)
            )
        }
        base.update(Customer);
    }catch(error){
        return res.status(500).send(
            new ErrorResponse("MSG00",500, error.message)
        )
    }
}

module.exports.delete = base.deleteOne(Customer);

module.exports.getAllPaging = base.getAllPaging(Customer);