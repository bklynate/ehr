var express = require('express');
var router = express.Router();
var Patients = require('../models/patient.js');


/* GET users listing. */
router.route('/')
.get(function(req, res){

    Patients.find({}, function(err, patients){
        if(err) return res.send(err);
        return res.send(patients);

    });

})
.post(function(req, res){

    var patient = new Patients(); 
    patient.first_name = req.body.first_name;
    patient.last_name = req.body.last_name;  
    patient.age = req.body.age;
    patient.race = req.body.race;
    patient.weight  = req.body.weight; 
    patient.height  = req.body.height;
    patient.bloodtype = req.body.bloodtype;

    patient.save(function(err){
        if(err) return res.send(err);
        return(res.send({success : true, message :"new patient created"})); 
    }); 



});

router.route('/:id').
patch(function(req,  res){
    Patients.findById(
       req.params.id, function(err, patient){
        console.log(patient);
        if (err) return res.send(err); 
        if(req.body.first_name) patient.first_name = req.body.first_name; 
        if(req.body.last_name) patient.last_name = req.body.last_name; 
        if(req.body.age) patient.age = req.body.age; 
        if(req.body.race) patient.race = req.body.race; 
        if(req.body.weight) patient.weight = req.body.weight; 
        if(req.body.bloodtype) patient.bloodtype = req.body.bloodtype;   
        if(req.body.height) patient.height = req.body.height; 

       patient.save(function(err){
        if(err) return res.send(err);
        res.send({success : true , message : "updated user"}); 
       });  
    }); 


})
.get(function(req, res){
    Patients.findById(req.params.id, function(err, patient){
        if(err) return res.send(err);
        return res.send(patient);
    });
})
.delete(function(req, res){
    Patients.remove(req.params.id, function(err){
        if(err) return res.send(err);
        return res.send({success : true , message : "deleted user"});
    });
}); 

module.exports = router;
