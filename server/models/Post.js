import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
      userId: {
        type: String,
        required: true,
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      location: String,
      description: String,
      picturePath: String,
      userPicturePath: String,
      likes: {
        type: Map, //same like Object this just how Mongo saved it
        of: Boolean,
      },
      comments: {
        type: Array,
        default: [],
      }
    },
    { timestamp: true },
);

const Post = mongoose.model("Post", postSchema);

export default Post;