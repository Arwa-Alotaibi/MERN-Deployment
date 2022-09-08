const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "name is required"],
        unique: [true, 'the name must be unique ' ],
        minlength: [3, "Name must be at least 3 characters"],

    },

    pettype:{
        type: String,
        required: [ true, "pettype is required"],

        minlength: [3, "pettype must be at least 3 characters"],

    },

    petdescription:{
        required: [ true, "petdescription is required"],

        type: String,
        minlength: [3, "petdescription must be at least 3 characters"],

    },

    skiilsne:{
        type: String

    },

    skiilstwo:{
        type: String

    },

    skiilsthree:{
        type: String

    }


    
},{timestamps: true}


);

const pet = mongoose.model("pet", PetSchema)

module.exports =  pet ;