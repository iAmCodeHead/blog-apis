const { Comment } = require('../models');


const newComment = async (body) => {
    const comment = await Comment.create(body);
    return comment;
}

/**
 * Get comments by post
 * @param {ObjectId} id
 * @returns {Promise<Blog>}
 */

  const getCommentsByPost = async (id) => {
    return Comment.find({postId: id});
  };

module.exports = {
    newComment,
    getCommentsByPost,
}