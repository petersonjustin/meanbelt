const mongoose = require('mongoose');
const mValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

module.exports = (() => {

    const PetSchema = new mongoose.Schema({
        _id: Schema.Types.ObjectId,
        name: {
            type: String,
            required: [true, 'Name feild is Required'],
            unique: [true, 'Name already exists'],
            minlength: [3, 'Field must be longer than 3 characters'],
        },
        petType: {
            type: String,
            required: [true, 'Description feild is Required'],
            minlength: [3, 'Field must be longer than 3 characters'],
        },
        desc: {
            type: String,
            required: [true, 'Description feild is Required'],
            minlength: [3, 'Field must be longer than 3 characters'],
        },
        skill1: {
            type: String,
        },
        skill2: {
            type: String,
        },
        skill3: {
            type: String,
        },
        likes: {
            type: Number,
            default: 0
        },

    }, {timestamps: true});

    PetSchema.plugin(mValidator, {message: 'This Pet already exists'})
    mongoose.model('Pet', PetSchema);

})();