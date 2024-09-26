import express from "express";
import * as controller from "../controllers/app.controllers.js";

const route = express.Router()

route.get('/', controller.getHome);
route.get('/home', controller.getHome);
route.get('/mobile', controller.getMobile);
route.get('/landingPage', controller.getLanding);
route.get('/webApp', controller.getwebApp);
route.get('/e-commerce', controller.getEcommerce);
route.get('/games', controller.getGames);

export default route;