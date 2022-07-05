const getDb= require('../database').getDb;
const mongodb= require('mongodb');

class Dweet{
    constructor(dweet,user,time,update){
        this.dweet= dweet;
        this.posted_by= user;
        this.posted_at= time;
        this.last_updated_at= update;
        // id is automatically created by mongodb
    }
    save(){
        const db= getDb();
       return db.collection('dweets').insertOne(this).then(d=>console.log(d)).catch(e=>console.log(e));
    }
    static findAll(){
        const db= getDb();
        return db.collection('dweets').find().toArray().then(products=>products).catch(e=>console.log(e));
    }
    static findById(id){
        const db= getDb();
        return db.collection('dweets').find({_id: new mongodb.ObjectId(id)}).next().then(dweet=>dweet).catch(e=>console.log(e));
    }
    updateById(id){
        const db=getDb();
        return db.collection('dweets').updateOne({_id: new mongodb.ObjectId(id)},{$set:this}).then(updated=>updated).catch(e=>console.log(e));
    }
    static deleteById(id){
        const db= getDb();
        return db.collection('dweets').deleteOne({_id: new mongodb.ObjectId(id)}).then(result=> console.log(result)).catch(e=>console.log(e));
    }

}

module.exports=Dweet;