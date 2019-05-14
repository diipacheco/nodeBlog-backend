const express = require("express");
const routes = express.Router();
const postController = require("./controllers/postController");
const commentaryController = require("./controllers/commentaryController");

routes.get("/?", postController.index);
routes.delete("/deleteCommentary/:id", commentaryController.deleteCommentary);
routes.put("/editCommentary/:id", commentaryController.editCommentary);
routes.post("/post/:id", commentaryController.newCommentary);
routes.post("/newpost", postController.newPost);
routes.get("/:id", postController.show);

module.exports = routes;
