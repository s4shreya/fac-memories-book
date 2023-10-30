import mongoose from "mongoose";

import PostMessage from "../models/postMessage.js";

// function to fetch posts
export const getPosts = async (request, response) => {
  try {
    const postMessages = await PostMessage.find();
    response.status(200).json(postMessages);
  } catch (error) {
    response
      .status(500)
      .json({
        message: `An error occurred in server/controllers/posts.js:- ${error.message}`,
      });
    console.log(`An error occurred in server/controllers/posts.js:- ${error}`);
  }
};

// function to create a new post
export const createPost = async (request, response) => {
  const post = request.body;
  // creates a new document of PostMessage model with properties as defined in the schema
  const newPost = new PostMessage(post);

  try {
    // saves the document on the database
    await newPost.save();

    // status code: 201 - successful creation
    response.status(201).json(newPost);
  } catch (error) {
    response
      .status(409)
      .json({
        message: `An error occurred in server/controllers/posts.js:- ${error.message}`,
      });
    console.log(`An error occurred in server/controllers/posts.js:- ${error}`);
  }
};

// function to update a post with given parameters and id
// PUT request takes the data from client and updates the entire resource whereas PATCH request
// only updates the parameters without modifying other parameters
export const updatePost = async (request, response) => {
  // extracting id from params in request and then destructuring it and renaming it to _id
  const { id: _id } = request.params;
  const post = request.body;

  // checking whether id is present or not in database
  if (!mongoose.Types.ObjectId.isValid(_id))
    return response.status(404).send("No post with this id.");

  // new: true // to get the updated version of post
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  response.status(200).json(updatePost);
};
