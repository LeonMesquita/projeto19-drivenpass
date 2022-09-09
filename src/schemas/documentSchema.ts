import { DocumentData } from "../interfaces/documentInterface";
import joi from 'joi';


const documentSchema = joi.object({
    name: joi.string().required(),
    issue_date: joi.string().required(),
    expiration_date: joi.string().required(),
    register_number: joi.string().required(),
    issuing_body: joi.string().required(),
    type: joi.string().valid('RG', 'CNH').required()
});

export default documentSchema;