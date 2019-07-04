const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog_demo', {useNewUrlParser: true})
//USER - email, name

//POST - title, content
let postSchema = new mongoose.Schema({
    title: String,
    content: String
})
let postModel = mongoose.model('Post', postSchema)
let userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
})
let User = mongoose.model('User', userSchema)
postModel.create()