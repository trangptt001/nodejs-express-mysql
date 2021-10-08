const Joi = require('joi');
const ErrorResponse = require('../utils/error.class');

const validateModel = (schemas, property) => {
    return (req, res, next) => { 
        const { error } = schemas.validate(req.body); 
        const valid = error == null; 
        if (valid) { 
          next(); 
        } else { 
          const { details } = error; 
          const message = details.map(i => i.message).join(',');
      
         res.status(400).json({ error: message }) } 
    } 
}
module.exports = validateModel;