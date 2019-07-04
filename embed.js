const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog_demo', {useNewUrlParser: true})
//USER - email, name

//POST - title, content
let postSchema = new mongoose.Schema({
    title: String,
    content: String
})
// let postModel = mongoose.model('Post', postSchema)
let userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
})
let User = mongoose.model('User', userSchema)
// let newUser = new User({
//     email: 'herinsima@brown.edu',
//     name: 'Herin Sama'
// })
// newUser.posts.push({
//     title: "how to bre polyjuice potion",
//     content: "just kidding. Go potioon class to learn it"
// })
// newUser.save((err, user)=>{
//     if(err) console.log(err)
//     else console.log(user)
// })
User.findOne({name: 'Herin Sama'},(err, user)=>{
    if(err) console.log(err)
    else {
        user.posts.push({
            title: '3 things i really hate',
            content: 'voldemort. Voldemort. Voldemort'
        })
        user.save((err, user)=>{
            if(err) console.log(err);
            else console.log(user);   
        })
    }  
})
// let newPost = new postModel({
//     title: "Reflection on Apples",
//     content: "They are delicious"
// })

// newPost.save((err, post)=>{
//     if(err) console.log(err);
//     else console.log(post);
// })
