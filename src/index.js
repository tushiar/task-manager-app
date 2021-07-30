const express = require('express')

const taskRouter = require('./routers/tasks')
const userRouter = require('./routers/users')

// Task.findByIdAndDelete('60e979bd17bc993a8cc561c5')
// .then(task=>{console.log(task); return Task.countDocuments() })
// .then(count=> console.log(count)).catch(e=> console.log(e))

// const deleteByID = async(id)=>{
//     const task = await Task.findByIdAndDelete(id);
//     const count = await Task.countDocuments();
//     return count;
// }

// deleteByID('60e979e0319bf1447c4fb5bb').then(count=> console.log(count)).catch(err=> console.log(err))

const app = express()
const port = process.env.PORT


// app.use((req, res, next)=>{
//     if(req.method==='GET'){
//         res.send('Get request not available!!')
//     }
//     else{
//         next();
//     }
// })


// app.use((req, res, next)=>{
//     res.status(503).send('Site is under maintenance');
// })
app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log('Server is up on port '+port)
})

// const jwt = require('jsonwebtoken')

// const authenticate = async()=>{
//     const token = jwt.sign({id:'abc123'}, 'secretkey', {expiresIn:'7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'secretkey')
//     console.log(data)
// }

// authenticate()