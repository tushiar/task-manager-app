const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_DEV_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

module.exports = mongoose
// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
// });

// const task = new Task({
//   description: "Learn Music",
// //   completed: false,
// });

// task
//   .save()
//   .then(() => console.log(task))
//   .catch((err) => console.log('Error', err));




// const User = mongoose.model("User", {
//     name: {
//       type: String,
//       required: true
//     },
//     email: {
//       type: String,
//       required: true,
//       lowercase: true
      

//     },
//     password:{
//         type: String,
//         trim: true,
//         required: true,
//         validate(value){
//             if (value.length<6) throw new Error('Password should have length greater than 6')
//             else if(value.toLowerCase().includes('password')) throw new Error('Password should not contain text password')
//         }
//     },
//     age:{
//         type: Number,
//     }
//   });
  
//   const user = new User({
//     name: "Rahsut",
//     email: 'RAH@xyz.com',
//     password: 'Security',
//     age: 22
//   });
  
//   user
//     .save()
//     .then(() => console.log(user))
//     .catch((err) => console.log('Error', err));
  