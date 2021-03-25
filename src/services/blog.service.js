const { Blog } = require('../models');


const createPost = async (body) => {
    const newPost = await Blog.create(body);
    return newPost;
}

/**
 * Get post by id
 * @param {ObjectId} id
 * @returns {Promise<Blog>}
 */
 const getPostById = async (id) => {
    return Blog.findById({_id : id});
  };

  const getAllPosts = async (id) => {
    return Blog.find({});
  };

  const deletePost = async (data) => {
    return Blog.findOneAndDelete({_id: data.postId, userId: data.userId});
  };

  const updatePost = async (params, body) => {
    return Blog.findOneAndUpdate({_id: params.postId, userId: params.userId}, body, {new: true});
  };

module.exports = {
    createPost,
    getPostById,
    getAllPosts,
    deletePost,
    updatePost
}