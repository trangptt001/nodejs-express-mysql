const base = require('./base.constroller');
const db = require("../models");
const Customer = db.Customer;
module.exports.create = async (req, res) => {
    if(!req.body.firstName || !req.body.lastName){
        res.status(400).send({
            message: "Customer must have first name and last name"
        });
        return;
    }
    const model = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        createAt: Date.now()
    };
    Customer.create(model)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Customer."
            });
        });
};

module.exports.findOne = base.findByPk(Customer);

module.exports.update = async (req, res) => {
    if(!req.body.firstName || !req.body.lastName){
        res.status(400).send({
            message: "Customer must have first name and last name"
        });
        return;
    }
    const id = req.params.id;
    const model = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        updatedAt: Date.now()
    };
    Customer.update(model, { where : {id : id}})
        .then(data => {
            res.send({id,...model});
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Customer."
            });
        });
}

module.exports.delete = base.deleteOne(Customer)