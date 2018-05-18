const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Pet = mongoose.model('Pet');

module.exports = {
    createPet: function(req, res){
        console.log(`Controller - Create Pet `);
        let newPet = new Pet({
            name: req.body.name,
            petType: req.body.petType,
            desc: req.body.desc,
            likes: req.body.likes,
            skill1: req.body.skill1,
            skill2: req.body.skill2,
            skill3: req.body.skill3
        });
        newPet.save(function(err, data){
            if(err){
                console.log(`Controller - Failed to save Pet`);
                console.log(err);
                res.json(err);
            }else{
                console.log(`Controller - Adding a new Pet`);
                console.log(data);
                res.json(data);
            }
        })
    },
    retriveAllPets: function(req, res){
        Pet.find()
            .sort({ name: 'desc' })
            .exec(function(err, data){
                if(err){
                    console.log(`Controller - Retrive All - Error`);
                    res.json(err);
                }else{
                    console.log(`Controller - Retrive All - Success`);
                    res.json(data);
                }
            }
        );
    },
    retrieveOnePet: function(req, res){
        Pet.findById({_id: req.params.id}, function(err, data){
            if(err){
                console.log(`Failed to get one pet`);
                res.json(err);
            }else{
                console.log(`Collected One Pet`);
                res.json(data);
            }
        });
    },
    editOnePet: function(req, res){
        var editPet = {
            name: req.body.name,
            petType: req.body.petType,
            desc: req.body.desc,
            likes: req.body.likes,
            skill1: req.body.skill1,
            skill2: req.body.skill2,
            skill3: req.body.skill3,
        }

        Pet.findOneAndUpdate({_id: req.params.id},
            editPet,
            {upsert: true, runValidators: true, context: 'query'},
            function(err, data){
                console.log(`Data - Update Controller`);
                console.log(data);
                console.log(`err - Update Controller`);
                console.log(err);
            if(err){
                console.log(`Failed to Edit one`);
                res.json(err);
            }else{
                console.log(`Edited One Pet`);
                res.json(data);
            }
        });
    },
    deletePet: function(req, res) {
        console.log(`Delete Pet Controller`);
        Pet.deleteOne({_id: req.params.id}, function(err, data){
            if (err){
                console.log("Delete Pet Controller error");
                res.json(err);
            }
            else{
                console.log(`Delete Pet Controller Success`);
                res.json(data);
            }
        })
    },
}