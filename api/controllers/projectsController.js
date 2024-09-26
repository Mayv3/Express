import * as service from '../../services/services.js'
import { isValidObjectId } from "mongoose";

async function getAllProjects(req, res) {
    const { name, type } = req.query;

    console.log('Parámetros recibidos:', { name, type });

    try {
        const projects = await service.getAllProjects (name, type);
        console.log('Proyectos encontrados:', projects);
        res.status(200).json(projects);
    } catch (error) {
        console.log(`Ha ocurrido un error: ${error}`);
        res.status(500).json({ error: 'Error al obtener proyectos' });
    }
}
async function newProject(req, res){
    service.newProject(req)
        .then((project)=> res.status(201).json(project))
}
async function deleteProject(req, res){
    try{
        const deletedProject = await service.deleteProject(req.params.id);

        res.status(200).json({
            message: `Proyecto con el id: ${req.params.id} eliminado correctamente`,
            deletedProject
        })
    }catch(err){
        console.log(`Ha ocurrido un error: ${error}`)
    }
}
async function updateProject(req, res){
    if(!isValidObjectId(req.params.id)){
        res.status(400).json({'Error': 'El id es invalido'})
    }else{
        service.updateProject(req.params.id, req.body)
        .then((updateProject)=> res.status(200).json(updateProject))
    }
    
}
async function newUser(req, res){
    service.newUser(req)
        .then((newUser)=> res.status(201).json(newUser))
}
function getAllUsers(req, res){
    service.getAllUsers()
        .then((users)=> res.status(200).json(users))
}
function getUserProjectsById(req, res){
    service.getUserProjectsById(req.params.id)
        .then((projects)=> res.status(200).json(projects))
}
export {
    getAllProjects,
    newProject,
    deleteProject,
    updateProject,
    newUser,
    getAllUsers,
    getUserProjectsById,
}