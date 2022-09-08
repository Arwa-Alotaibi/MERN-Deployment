const pet = require("../models/pet.model");

module.exports.createpet=(req,res)=>{
    //const{name , pettype ,petdescription , skiilsne ,skiilstwo, skiilsthree} = req.body;
    pet.create(req.body )
    .then(createpet => res.json({pets :createpet}))
    .catch(err => res.status(400).json(err));

}




module.exports.GetAllpet=(req,res)=>{
    pet.find({}).sort({ pettype: 1 })
    .then(allpets => res.json(allpets))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.Getpet=(req,res)=>{
    pet.findOne({_id:req.params.idd})
    .then(onepets => res.json( onepets ))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}



module.exports.Updatepet = (req, res) => {
    pet.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
    .then(updatepet => res.json({ pets: updatepet }))
    .catch(err => res.status(400).json(err));
  }

module.exports.Deletepet=(req,res)=>{
    pet.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json(err))
}
