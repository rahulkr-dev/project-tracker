const Joi = require("joi");

const projectSchema = Joi.object({
  theme: Joi.string().required(),
  reason: Joi.string().required(),
  type: Joi.string().required(),
  division: Joi.string().required(),
  category: Joi.string().required(),
  priority: Joi.string().required(),
  department: Joi.string().required(),
  start_date: Joi.date().required(),
  end_date: Joi.date().required(),
  location: Joi.string().required(),
});

const statusSchema = Joi.string().valid('registered', 'closed', 'running', 'cancelled').default('registered').required()



module.exports = {projectSchema,statusSchema}