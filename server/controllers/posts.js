import PostMessage from "../models/postMessage.js";

export const getPosts = async (request, response) => {
    try {
        const postMessages = await PostMessage.find();
        response.status(200).json(postMessages);
    }
    catch (error) {
        response.status(500).json({message: `An error occurred:- ${error.message}`});
        console.log(`An error occurred:- ${error}`);
    }
};

export const createPost = async (request, response) => {
    const post = request.body;
    // creates a new document of PostMessage model with properties as defined in the schema
    const newPost = new PostMessage(post);

    try {
        // saves the document on the database
        await newPost.save();

        // status code: 201 - successful creation
        response.status(201).json(newPost);
    }
    catch (error) {
        response.status(409).json({message: `An error occurred:- ${error.message}`});
        console.log(`An error occurred:- ${error}`);
    }
};