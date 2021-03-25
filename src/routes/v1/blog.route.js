const express = require('express');
const { auth } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const postValidation = require('../../validators/post.validate');
const blogController = require('../../controllers/blog.controller');
const commentValidation = require('../../validators/comment.validate');
const commentController = require('../../controllers/comment.controller');


const router = express.Router();

router
    // .route('/')
    .post('/', [auth, validate(postValidation.createPost)], blogController.newPost)
    .get('/:postId', validate(postValidation.getPost), blogController.getOnePost)
    .patch('/:postId', [auth, validate(postValidation.updatePost)], blogController.updateOnePost)
    .delete('/:postId', [auth, validate(postValidation.deletePost)], blogController.deleteOnePost)
    .get('/', blogController.getAllPosts)
    .get('/:postId/comments', validate(commentValidation.getComments), commentController.getCommentsByPost)
    .post('/:postId/comments', validate(commentValidation.makeComment), commentController.newComment)


module.exports = router;
