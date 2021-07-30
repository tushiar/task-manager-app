const {MongoClient, ObjectID} = require('mongodb')


const url = 'mongodb://127.0.0.1:27017';
const dbName = "task-manager"

MongoClient.connect(url, {useNewUrlParser:true}, (error, client)=>{
    if(error) return console.log('Unable to connect to database!!')

    const db = client.db(dbName)

    // db.collection('tasks').insertMany([
    //     {
    //         description:"Learn SQL",
    //         completed:true
    //     },
    //     {
    //         description:"Learn HTML",
    //         completed:true
    //     },
    //     {
    //         description:"Learn Backend",
    //         completed:false
    //     }
    // ],(error, result)=>{
    //     if(error) return console.log('Unable to add records to database!!')
    //     console.log(result.ops)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("60e8192c80936631cc305e4f")}, (error, task)=>{
    //     if(error) return console.log('Something went wrong')
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: true},).toArray((error, tasks)=>{
    //     if(error) return console.log('Error!!')
    //      console.log(tasks)
    // })

    // db.collection('tasks').updateMany({completed: true}, {
    //     $set:{
    //         completed: false
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error=>{
    //     console.log('Unable to update data!!')
    // }))
    // db.collection('tasks').deleteMany({completed: false}).then(result=> console.log(result)).catch(error=> console.log('Unable to delete!!!'))
   
})