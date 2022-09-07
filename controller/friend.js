import Friend from '../models/Friend.js';

// array of nested documents
export const arrayOfNestedDocuments = async (req, res, next) => {
    
    try {   
        // find documents whose friends contain Lora
        // const friends = await Friend.find({ "friends.name": "Lora" });

        
        // find documents whose friends name is Lora and age is 23 - returns 0 as we are looking for an exact document match
        const friends = await Friend.find({ friends: { name:  "Lora" , age: 23 } });

        res.status(200).json(friends);
    } catch (error) {
        next(error)
    }
};