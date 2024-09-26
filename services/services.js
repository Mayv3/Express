import ProjectModel from "../models/projectModel.js";
import userModel from "../models/userModel.js";
import mongoose from "mongoose";

async function getAllProjects (name = null, type = null) {
    try {

        const filter = {};

        if (name) {
            filter.name = name;
        }
        if (type) {
            filter.type = type;
        }

        const projects = await ProjectModel.find(filter);

        if(!projects || projects.length == 0){
            console.log('No hay proyectos por ahora')
        }else{
            return projects;
        }

    } catch (err) {
        console.log(`No se han encontrado proyectos. Error: ${err}`);
    }
}
async function getProjectsFiltered(type){
    try{
        const projects = await ProjectModel.find();
        const projectsFiltered = projects.filter(project => project.type == type)
        return projectsFiltered
    }catch(err){
        console.log(`Ha ocurrido un error al filtrar los proyectos: ${err}`)
    }
}
async function newProject(req) {
    try {
        const newProject = new ProjectModel({
            name: req.body.name,
            description: req.body.description,
            technologies: req.body.technologies,
            repositoryLink: req.body.repositoryLink,
            image: req.body.image,
            type: req.body.type,
            developers: [(req.body.developers)]
        });

        const projectSave = await newProject.save();

        const developerId = new mongoose.Types.ObjectId(req.body.developers);

        await userModel.findByIdAndUpdate(
            developerId,
            { $push: { projects: newProject.name } },
            { new: true }
        );

        return projectSave;
    } catch (err) {
        console.log(`Ha ocurrido un error al crear un nuevo proyecto: ${err}`);
    }
}
async function deleteProject(id){
    try{
        if (!id){
            throw new Error(`El proyecto con el id: ${id} no fue encontrado`)
        }
        const deletedProject = await ProjectModel.findByIdAndDelete(id);
        return deletedProject
    }catch(err){
        console.log(`Ha ocurrido un error al eliminar el proyecto con el id: ${id}. Error: ${err} `)
    }
}
async function updateProject(id, newData){
        try{
            if(!id){
                console.log(`No se ha encontrado el id: ${id}`)
            }
            const projectUpdated = await ProjectModel.findByIdAndUpdate(id, newData);
            console.log(`Proyecto con el id: ${id} actualizado`);
        return projectUpdated
        }catch(err){
            console.log(`Ha ocurrido un error: ${err} `)
        }
}
async function getAllUsers(){
    try{
        const users = await userModel.find();
        return users
    }catch(err){
        console.log(err)
    }
   
}
async function newUser(req){
    try {
        const newUser = new userModel({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
        });

        const userSave = await newUser.save();
        console.log(userSave)
        return userSave
    } catch (err) {
        console.log(`Ha ocurrido un error: ${err}`);
    }
}
async function getUserProjectsById(id){
    try{
        const projectsByUser = await ProjectModel.find({ developers: id });
    
        if(!projectsByUser || projectsByUser.length == 0){
            console.log(`El cliente con el id:${id} no tiene proyectos`)
        }else{
            return projectsByUser
        }
    }catch(err){
        console.log(err)
    }
}

export {
    getAllProjects,
    getProjectsFiltered,
    newProject,
    deleteProject,
    updateProject,
    newUser,
    getAllUsers,
    getUserProjectsById
}