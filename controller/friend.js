import Friend from '../models/Friend.js';

// array of nested documents
export const arrayOfNestedDocuments = async (req, res, next) => {
    
    try {   
        // find documents whose friends contain Lora
        // const friends = await Friend.find({ "friends.name": "Lora" });

        
        // find documents whose friends name is Lora and age is 23 - returns 0 as we are looking for an exact document match
        // const friends = await Friend.find({ friends: { name:  "Lora" , age: 23 } });

        
        // find documents whose friends age is between 20 and 25 
        // const friends = await Friend.find({ "friends.age": { $gt: 20, $lt: 25 } });
        // const friends = await Friend.find({ "friends.age": { $gt: 20, $lt: 23 } }); - returns []

        // find documents whose friends contains a specified document - works only on shell; via postman it returns []
        // const friends = await Friend.find({ friends: {
        //     "name": "Steve",
        //     "age": 27
        // }})

        // find documents whose friends contains a specified document - returns 0 as a result of altered order of elements
        // const friends = await Friend.find({ friends: {
        //     "age": 27,
        //     "name": "Steve"
        // }})

        // find documents whose friends contains any of the specified values in the object's elements - returns as either condition is met
        const friends = await Friend.find({ "friends.name": "Steve", "friends.age": 25 })

        res.status(200).json(friends);
    } catch (error) {
        next(error)
    }
};