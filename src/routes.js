const express = require("express");
const routes = express.Router();
const postController = require("./controllers/postController");
const comentController = require("./controllers/comentController");

routes.post("/post/:id", comentController.newComent);
routes.post("/post/newpost", postController.newPost);
routes.get("/post/:id", postController.show);

module.exports = routes;
