const Project = require("../../models/project.model");
const projectSchema = require("../../validator/project.validator");
const projectController = {
  async createProject(req, res, next) {
    try {
      const { error } = projectSchema.validate(req.body);
      if (error) {
        return next(error);
      }

      //   Add project to the database
      let project = new Project(req.body);
      await project.save();
      return res.status(201).send(project);
    } catch (err) {
      return next(err);
    }
  },

  async getProject(req, res, next) {
    try {
    } catch (err) {
      return next(err);
    }
  },
};

module.exports = projectController;
