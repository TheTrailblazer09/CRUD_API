const Dweet= require('../models/dweet');

exports.createDweet=(req,res,next)=>{
    console.log(req.body);
    const dweet= req.body.dweet;
    const user= req.body.user;
    const time= Date.now();
    const update= Date.now();

    const dwt= new Dweet(dweet,user,time,update);
   dwt.save().catch(e=>console.log(e));
   res.send('Added to Database');
}

exports.fetchAll=(req,res,next)=>{
    Dweet.findAll().then(products=>res.send(products)).catch(e=>console.log(e));
}

exports.findById= (req,res,next)=>{
    const id= req.params.id;
     Dweet.findById(id).then(dweet=> res.send(dweet)).catch(e=>console.log(e));

}

exports.updateById=(req,res,next)=>{
    const id=req.params.id;
    
    Dweet.findById(id).then(dweet=> {
       const time= dweet.posted_at;
        const updatedDweet= req.body.dweet;
        const updatedUser= req.body.user;
        const updatedTime= Date.now();
        const updatedDwt= new Dweet(updatedDweet,updatedUser,time,updatedTime);
        updatedDwt.updateById(id).then(resp=> console.log('updated')).catch(e=>console.log(e));
        res.send("updated");
     } ).catch(e=>console.log(e));
    
}

exports.deleteById=(req,res,next)=>{
    const id= req.params.id;
    Dweet.deleteById(id).then(deleted=> res.send("Deleted")).catch(e=>console.log);
}