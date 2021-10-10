const Joi = require('joi');

const customerPOST = Joi.object({ 
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  phoneNumber: Joi.string().pattern(new RegExp('^[0-9]{7,8}'))
}) 

module.exports = {
  customerPOST
}