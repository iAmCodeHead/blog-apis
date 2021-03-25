const express = require('express');
const { auth } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const postValidation = require('../../validators/post.validate');
const blogController = require('../../controllers/blog.controller');
const commentValidation = require('../../validators/post.validate');
const commentController = require('../../controllers/comment.controller');


const router = express.Router();

router
    // .route('/')
    .get('/:postId', validate(postValidation.getPost), blogController.getOnePost)
    .post('/', [auth, validate(postValidation.createPost)], blogController.newPost)
    .get('/', blogController.getAllPosts)
    .post('/:postId/comments', validate(commentValidation.createPost), commentController.newComment)
    .get('/:postId/comments', validate(commentValidation.getPost), commentController.getCommentsByPost)


module.exports = router;
