
const fs = require("fs");
const House = require("../model/house");


exports.get_Etat = (req, res) => {
  House.find().sort({_id : 1})
  .then(thing=>res.status(200).json(thing))
  .catch(err=> res.status(410).json({msg:err}))
 
};
 
exports.createHoueEtat = (req, res) => {
  const object = req.body
  let newHouse = new House({
    ...object
  });
  console.log(newHouse)
  newHouse
    .save()
    .then(() => {
      res.status(200).json({ message: "l'etat est bien créer" })
    })
    .catch((err)=>{
      res.status(401).json({ message: err })
      console.log(err)
    })
};



exports.modifyEtatAction = (req,res)=>{
  House.updateOne({id:1} ,
     {
      
      port1: req.body.port1,
      port2:  req.body.port2,
      port3:  req.body.port3,
      climatiseur :  req.body.climatiseur,
      chauffage :  req.body.chauffage,
      lumiere :  req.body.lumiere 
    })
  .then(()=>res.status(201).json({message:`l'etat est bien modifié`}))
  .catch(()=>res.status(404).json({mesa:err}))
}

exports.modifyEtat = (req,res)=>{
  House.updateOne({id:1} ,
     {
    temperature: req.body.temperature,
    humidité : req.body.humidité
    })
  .then(()=>res.status(201).json({message:`l'etat est bien modifié`}))
  .catch(()=>res.status(404).json({mesa:err}))
}

exports.modifyEtat = (req,res)=>{
  House.updateOne({id:1} ,
     {
    temperature: req.body.temperature,
    humidité : req.body.humidité
    })
  .then(()=>res.status(201).json({message:`l'etat est bien modifié`}))
  .catch(()=>res.status(404).json({mesa:err}))
}

exports.modifyEtatParams = (req,res)=>{
  console.log(req.params)
  // House.updateOne({id:1} ,
  //    {
  //   temperature: req.params.temp,
  //   humidité : req.params.hum
  //   })
  // .then(()=>res.status(201).json({message:`l'etat est bien modifié`}))
  // .catch(()=>res.status(404).json({mesa:err}))
}