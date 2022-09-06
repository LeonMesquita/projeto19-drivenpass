import Joi from "joi";

 export const fighterSchema = Joi.object({
    firstUser: Joi.string().required(),
    secondtUser: Joi.string().required()
});