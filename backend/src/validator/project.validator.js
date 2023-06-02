const Joi = require("joi");

const projectSchema = Joi.object({
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


module.exports = projectSchema