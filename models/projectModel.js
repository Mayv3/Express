import mongoose from "mongoose";

const ProjectSchema  = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        technologies: {
            type: [String]
        },
        repositoryLink:{
            type: String
        },
        image:{
            type: String
        },
        type: {
            type: String
        },
        developers: [String]
    }
)

const ProjectModel = mongoose.model("projects", ProjectSchema);

export default ProjectModel

