import joi from 'joi';

const wifiSchema = joi.object({
    network_name: joi.string().required(),
    password: joi.string().required(),
    title: joi.string().required(),
});

export default wifiSchema;