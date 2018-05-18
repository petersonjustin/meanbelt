const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const models = ['pet'];
mongoose.promise = global.Promise;


module.exports = function(app){
    mongoose.connect('mongodb://localhost/Pet1', function(){
        console.log(`Catch in mongoose.js`);
    });

    const models_path = path.join(__dirname, `./../models`);

    models.forEach((model) => {
        require(path.join(models_path, model+".js"));
    });
};
