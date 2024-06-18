const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
const dbName = "nodejs-Task-3"
const url =`mongodb+srv://swiftfood:rcn12345@cluster0.7bjsvav.mongodb.net/${dbName}`

module.exports={url,mongodb,MongoClient}