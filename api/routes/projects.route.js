import { Router } from "express";
import * as controller from "../controllers/projectsController.js";

const route = Router();

route.get('/projects', controller.getAllProjects);
route.post('/projects', controller.newProject);
route.put('/projects/:id', controller.updateProject);
route.delete('/projects/:id', controller.deleteProject);

route.post('/projects/client', controller.newUser);
route.get('/projects/client', controller.getAllUsers);
route.get('/projects/client/:id', controller.getUserProjectsById);

export default route

