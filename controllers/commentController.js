//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business logic
exports.createComment = async (req,res) =>{
    try{
        //fetch data from req body
        const {post ,user,body } = req.body;

        //create a comment object
        const comment = new Comment({
            post,user,body
        });

        //save the new comment into database
        //isse comment ke collection ke andar data push ho gya
        const savedComment = await comment.save();

        const updatedPost = await Post.findByIdAndUpdate(post ,{$push: {comments: savedComment._id} } ,{new: true})
                            .populate("comments")//for finding the whole comment document  related with that particular id
                            .exec();
        res.json({
            post: updatedPost,
        });

    }
    catch(error){
        return res.status(500).json({
            error:"Error While Creating comment"
        });

    }
}