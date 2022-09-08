import Joi from "joi";

const credentialUrl= /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;


const credentialSchema = Joi.object({
    url: Joi.string().uri().pattern(new RegExp(credentialUrl)).required(),
    username: Joi.string().required(),
    password: Joi.string().min(5).required(),
    title: Joi.string().required()
});


export default credentialSchema;