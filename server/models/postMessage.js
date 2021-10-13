import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    Fname: String,
    Mname: String,
    Lname: String,
    email: String,
    mobnum: String,
    lannum: String,
    Notes: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 1,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;