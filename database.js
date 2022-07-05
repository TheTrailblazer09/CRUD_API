const mongodb= require('mongodb');
const MongoClient= mongodb.MongoClient;

let _db;
const connect=(callback)=>{
    MongoClient.connect('mongodb+srv://vani:Vani09@cluster0.wogszpp.mongodb.net/dweets-db?retryWrites=true&w=majority').then(result=>{
        console.log("Databse Connected");
        _db=result.db();
        callback();
    }).catch(e=>console.log(e));


}

const getDb=()=>{
    if(_db){
        return _db;
    }
}

exports.connect= connect;
exports.getDb= getDb;