const { Router } = require("express");
const loginController = require("../controllers/user/login.controller");
const projectController = require("../controllers/project/project.controller");
const app = Router();
// Auth api
app.post("/login", loginController.login);

// Project apis
app.post("/project", projectController.createProject);
app.get("/project", projectController.getProject);

module.exports = app;
