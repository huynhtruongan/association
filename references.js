const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog_demo', {useNewUrlParser: true})

let Post = require('./models/post')
let User = require('./models/user')
//USER - email, name

//POST - title, content


// Create Post
// Post.create({
//     title: 'How to cook the best burger pt. 4',
//     content: 'bla bla boo'
// },(err, post) =>{
//     // Find User
//     User.find({email : "charlie@brown.edu"}, (err, foundUser)=>{
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