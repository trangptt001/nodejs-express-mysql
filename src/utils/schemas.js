const Joi = require('joi');

exports.schemas = {
    customerPOST: Joi.object().keys({ 
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        phoneNumber: Joi.string().pattern(new RegExp('^[0-9]{7,8}'))
      }) 
}