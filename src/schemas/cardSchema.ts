import joi from 'joi';

const cardSchema = joi.object({
    number: joi.string().required(),
    cardholder_name: joi.string().required(),
    expiration_date: joi.string().required(),
    security_code: joi.string().length(3).required(),
    password: joi.string().required(),
    is_virtual: joi.boolean().required(),
    title: joi.string().max(50).required(),
    type:  joi.string().valid('credit', 'debit', 'both').required()

});



export default cardSchema;