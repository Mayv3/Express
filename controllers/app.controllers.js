import * as service from "../services/services.js";
import showProjects from "../const/projects.js";

const getHome = (req, res) => {
    service.getAllProjects().
    then(data =>{
        res.send(showProjects(data, "Proyectos"))
    })
};
const getMobile = (req, res) => {
    service.getProjectsFiltered("Mobile").
    then(data =>{
        res.send(showProjects(data, "Proyectos Mobile"))
    })
};
const getwebApp = (req, res) => {
    service.getProjectsFiltered("WebApp").
    then(data =>{
        res.send(showProjects(data, "Proyectos Web App"))
    })
};
const getEcommerce = (req, res) => {
    service.getProjectsFiltered("eCommerce").
    then(data =>{
        res.send(showProjects(data, "Proyectos E-commerce"))
    })
};
const getGames = (req, res) => {
    service.getProjectsFiltered("Game").
    then(data =>{
        res.send(showProjects(data, "Game"))
    })
};
const getLanding = (req, res) => {
    service.getProjectsFiltered("LandingPage").
    then(data =>{
        res.send(showProjects(data, "Landing Page"))
    })
};

export 
{ 
    getHome,
    getMobile,
    getwebApp,
    getEcommerce,
    getGames,
    getLanding
};