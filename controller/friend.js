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

// array of nested documents
/** used not only to read but also update specific document(s) of the array */
/** at least one nested document in the array must match ALL conditions. Order of conditions doesn't matter */
export const elemMatchOperator = async (req, res, next) => {
    
    try {    
        // const friends = await Friend.find({ friends: { $elemMatch: { name: "Bob", registered: false } } }) - returns
        // const friends = await Friend.find({ friends: { $elemMatch: { age: 25, registered: false } } }) - returns
        const friends = await Friend.find({ friends: { $elemMatch: { age: 27, registered: false } } }) // returns [] as there's conflct in the conditions; they fall in different d=subdocuments

        res.status(200).json(friends);
    } catch (error) {
        next(error)
    }
};