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

module.exports = {
    createPost,
    getPostById,
    getAllPosts
}