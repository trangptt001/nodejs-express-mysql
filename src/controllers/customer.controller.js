const base = require('../services/base.service');
const db = require("../models");
const Customer = db.Customer;
const schemas = require("../utils/schemas")
const Joi = require('joi');
const ErrorResponse = require('../utils/error.class');
const SuccessResponse = require('../utils/success.class');
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
        const model = {
            ...req.body,
            createAt: Date.now()
        };
        const result = await base.create(Customer, model);
        if(result){
            return res.status(200).send(new SuccessResponse(200, result, 'Create Success'));
        }
        return res.status(400).send(("MSG00",500, error.message));
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

module.exports.getAllPaging = async (req, res) => {
    try{
        const order = [
            ['firstName', req.query.orderFirstName]
        ]
        const result = await base.getAllPaging(Customer, req.query.pageSize, req.query.pageIndex, order);
        return res.status(200).send(new SuccessResponse(200, result, ''))
    }catch(error){
        return res.status(500).send(
            new ErrorResponse("MSG00",500, error.message)
        )
    }
};