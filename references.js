const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog_demo', {useNewUrlParser: true})

let Post = require('./models/post')
//USER - email, name

//POST - title, content

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
// Create Post
// Post.create({
//     title: 'How to cook the best burger pt. 3',
//     content: 'bla bla bla'
// },(err, post) =>{
//     // Find User
//     User.findOne({email : "charlie@brown.edu"}, (err, foundUser)=>{
//         if(err) console.log(err)   
//         else {
//             // Push post to user
//             foundUser.posts.push(post);
//             // Save user
//             foundUser.save((err, data)=>{
//                 if(err) console.log(err);
//                 else {
//                     console.log(data);
//                 }
//             })
//         }
//     })
//  }
// )
User.findOne({email : "charlie@brown.edu"}).populate('posts').exec((err, user)=>{
    if(err) console.log(err);
    else  console.log(user);   
})