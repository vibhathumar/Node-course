// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient 
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = ObjectID()
//console.log(id.toString())
//console.log(id.getTimestamp())

MongoClient.connect(connectionURL, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!' + error)
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description: 'Clean the car'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id:new ObjectID("6335b6053c9e19aaca729cbc")
    // },{ 
    //     $inc : {
    //         age: 1
    //     } 
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').find({completed:false}).toArray((error,result) => {
    //     console.log(result)
    // })

    // db.collection('users').findOne({_id:new ObjectID("6335bd00d2646afe36c2aa6c")}, (error, user) => {
    //     if(error){
    //         return console.log(error)
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age:31 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vira',
    //     age: 5
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user!')
    //     }
    //     console.log(result.insertedId)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Rakesh',
    //         age: 33
    //     },
    //     {
    //         name: 'Yaana',
    //         age: 2
    //     }
    // ], (error, result) => {
    //     if(error){
    //                 return console.log('Unable to insert user!')
    //             }
    //             console.log(result.insertedIds)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },{
    //         description: 'Clean the car',
    //         completed: false
    //     },{
    //         description: 'Pot plantes',
    //         completed: false
    //     }
    // ],(error, result) => {
    //     if(error){
    //         return console.log('Unable to insert tasks')
    //     }
    //     console.log(result.collection)
    // })
})