const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:2707/blog_demo', {useNewUrlParser: true})
//USER - email, name
let userSchema = new mongoose.Schema({
    email: String,
    name: String
})
let User = mongoose.model('User', userSchema)
//POST - title, content
let postSchema = new mongoose.Schema({
    title: String,
    content: String
})
let postModel = mongoose.model('Post', postSchema)

let newUser = new User({
    email: 'charlie@brown.edu',
    name: 'Charlie Brown'
})
newUser.save((err, user)=>{
    
})
