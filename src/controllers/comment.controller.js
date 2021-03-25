const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { commentService } = require('../services');

const newComment = catchAsync(async (req, res) => {

    const data = { postId: req.params.postId, ...req.body}

    const post = await commentService.newComment(data);
    
    res.status(httpStatus.CREATED).send(post);
});

const getCommentsByPost = catchAsync(async (req, res) => {
    const post = await commentService.getCommentsByPost(req.params.postId);

    if (!post) throw new ApiError(httpStatus.NOT_FOUND, 'Comments not found');

    res.status(httpStatus.CREATED).send(post);
});

module.exports = {
    newComment,
    getCommentsByPost
}