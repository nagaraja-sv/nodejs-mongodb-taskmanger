// CRUD Create , Read , Update , Delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to Connect to the database!')
    }
    const db = client.db(databaseName)


    db.collection('tasks').deleteOne({
        desscription:"HI"
      }).then((result)=>{
        console.log(result)
      }).catch((error)=>{
        console.log(error)
      }) 
})
 























 // INSERT ONE EXAMPLE
/* db.collection('users').insertOne({
    name: 'Nagaraja',
    age: 27
}, (error, result) => {
    if (error) {
        return console.log('Unable to insert user')
    }

    console.log(result.ops)
}) */

    // INSERT MANY EXAMPLE
/* db.collection('users').insertMany([
    {
        name: 'Nagaraja1',
        age: 27
    },
    {
        name: 'Nagaraja2',
        age: 27
    }

], (error, result) => {
    if (error) {
        return console.log('Unable to insert documents!')
    }
    console.log(result.ops)

}) */


/*  db.collection('tasks').insertMany([
     {
         desscription: "",
         completed: true,

     },
     {
         desscription: "",
         completed: true,

     },
     {
         desscription: "",
         completed: true,

     }
 ], (error, result) => {

     if (error) {
         return console.log('Unable to insert documents!')
     }
     console.log(result.ops)
 }) */


 /* 
 // get the single record
  db.collection('users').findOne({ _id: new ObjectID("5c9c3a9aac1ca222f4924e1b") }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch !')
        }

        console.log(user)
    })
   
 
 // to get the all the records
    db.collection('users').find({ age: 27 }).toArray((error, users)=> {

        console.log(users)
    })
    // to get the count
    db.collection('users').find({ age: 27 }).count((error, count)=> {

        console.log(count)
    }) */

     // UPDATE MANY 
 /*    db.collection('tasks').updateMany({
            completed: true
        },{
            $set:{
                completed: false
            }
        }).then((result)=>{
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        }) */

// UPDATE ONE
        /* db.collection('users').updateOne({
          _id:new ObjectID("5c9b8478877da40b44ee48f4")
      },{
          $inc: {
             // name: 'Mike'
             age: 1
          }

      }).then((result)=>{
          console.log(result)

      }).catch((error)=>{
        console.log(error)
    })
    */

    // DELETE MANY 

    /* db.collection('users').deleteMany({
          age:27,


      }).then((result)=>{
        console.log(result)
      }).catch((error)=>{
        console.log(error)
      }) */
      
