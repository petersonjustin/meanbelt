const mongoose = require('mongoose');
const path = require('path');

const Pet = require(`../controllers/pet.js`);

// CHASE NOTE + // put svc in front of all the express routes

module.exports = function(app){
    app.get('/', function(req, res) {
        console.log('inside main express get route');
    });
    app.get('/pet', function(req, res) {
        console.log(`Express Routes -  Get all Pets`);
        Pet.retriveAllPets(req, res);
    });
    app.post('/pet', function(req, res) {
        console.log('Express Routes - Create New Pet');
        // console.log(req);
        Pet.createPet(req, res);
    });
    app.get('/pet/:id', function(req, res) {
        console.log('inside udpate of pet');
        Pet.retrieveOnePet(req, res);
    });
    app.put('/pet/:id', function(req, res) {
        console.log('inside udpate of pet');
        Pet.editOnePet(req, res);
    });
    app.delete('/pet/:id', function(req, res) {
        console.log('Express Route inside delete of pet');
        Pet.deletePet(req, res);
    });
    // catch all the extra/invalid
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./../client/dist/client/index.html"))
    });
}