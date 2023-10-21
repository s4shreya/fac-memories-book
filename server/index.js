import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import postsRoutes from './routes/postsRoutes.js';


// an app instance of express package is created to make all the functionalities of express available to app
const app = express();

// middleware for sending post requests for images and urls
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// middleware to use cors for a particular domain
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// middleware for using routes in the server application
// specifying all the routes of posts to begin with path "/posts"
app.use("/posts", postsRoutes);

// home page
app.get("/", (request, response) => {
    response.send(`home page working`);
});

// storing mongodb url to connect to mongodb atlas
const mongoDB_URL =
  "mongodb+srv://admin:admin@memories-book.owqjepo.mongodb.net/?retryWrites=true&w=majority";

// setting port
const PORT = process.env.PORT || 5000;

// establishing connection between express and mongodb
// this function returns a promise
mongoose
  .connect(mongoDB_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(
        `Database connected successfully\nserver is running on port ${PORT}`
      );
    })
  )
  .catch((error) => console.log(`An error occurred: ${error.message}`));

// uncomment this if you get any warning in console otherwise just remove it
// mongoose.set("useFindAndModify", false);