import mongoose from "mongoose";

const userSchema  = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: String,
        description: {
            type: String,
            required: true
        },
        projects: [String]
})

const userModel = mongoose.model("clients", userSchema);

export default userModel