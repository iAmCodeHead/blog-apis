const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { blogService } = require('../services');

const newPost = catchAsync(async (req, res) => {
    
    const data = { userId: req.userId, ...req.body};

    const post = await blogService.createPost(data);
    
    res.status(httpStatus.CREATED).send(post);
});

const getAllPosts = catchAsync(async (req, res) => {
    const posts = await blogService.getAllPosts();
    res.status(httpStatus.CREATED).send(posts);
});

const deleteOnePost = catchAsync(async (req, res) => {

    const data = {
        userId: req.userId,
        postId: req.params.postId
    };

    const post = await blogService.deletePost(data);

    if (!post) throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');

    res.status(httpStatus.CREATED).send(post);
});

const updateOnePost = catchAsync(async (req, res) => {

    const params = {
        userId: req.userId,
        postId: req.params.postId
    };

    const post = await blogService.updatePost(params, req.body);

    if (!post) throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');

    res.status(httpStatus.CREATED).send(post);
});

const getOnePost = catchAsync(async (req, res) => {
    const post = await blogService.getPostById(req.params.postId);

    if (!post) throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');

    res.status(httpStatus.CREATED).send(post);
});

module.exports = {
    newPost,
    getAllPosts,
    getOnePost,
    deleteOnePost,
    updateOnePost
}