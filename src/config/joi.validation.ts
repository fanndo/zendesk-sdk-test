import * as Joi from 'joi'

export const JoiValidationSchema = Joi.object({
    SUBDOMAIN: Joi.required(),
    SECRET:Joi.required(),
    PORT:Joi.number().default(3005),
    EMAIL:Joi.string().required(),
    USERID:Joi.number().default(12345)
})