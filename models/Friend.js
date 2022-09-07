import mongoose from 'mongoose';   

const FriendSchema = new mongoose.Schema({
    name: {
        type: String
    },
    friends: [
        {
            name: { type: String },
            age: { type: Number },
            registered: { type: Boolean }
        }
    ]
});


/** element 'persons below defines the collectin name'  */
export default mongoose.model('Friend', FriendSchema, 'friends');