import mongoose from 'mongoose';   

const PersonSchema = new mongoose.Schema({
    index: {
        type: Number
    },
    name: {
        type: String
    },
    isActive: {
        type: Boolean
    },
    registered: {
        type: Date
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    eyeColor: {
        type: String,
    },
    favoriteFruit: {
        type: String,
    },
    company: {
        title: { type: String },
        email: { type: String },
        phone: { type: String },
        location: {
            country: { type: String },
            address: { type: String }
        }
    },
    tags: {
        type: [String]
    }
});


/** element 'persons below defines the collectin name'  */
export default mongoose.model('Person', PersonSchema, 'persons');