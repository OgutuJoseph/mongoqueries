import Person from '../models/Person.js';

// find many
export const findMany = async (req, res, next) => {
    
    try {
        const persons = await Person.find({});
        const data = persons;
        res.status(200).json(data);
    } catch (error) {
        next(error)
    }
};

// count all
export const countAll = async (req, res, next) => {
    
    try {
        const count = await Person.find({}).count();
        res.status(200).json(count);
    } catch (error) {
        next(error)
    }
};

// equality query (find where...)
export const equalityQuery = async (req, res, next) => {
    
    try {
        // const persons = await Person.find({ "name": "Kitty Snow" });
        // const persons = await Person.find({ "age": 20 });
        const persons = await Person.find({ gender: "female", eyeColor: "green" });
        res.status(200).json(persons);
    } catch (error) {
        next(error)
    }
};

// not equal to operator
export const notEqualTo = async (req, res, next) => {
    
    try {
        const persons = await Person.find({ eyeColor: { $ne: "green" } });
        res.status(200).json(persons);
    } catch (error) {
        next(error)
    }
};

// greater than operator
export const greaterThan = async (req, res, next) => {
    
    try {
        const persons = await Person.find({ age: { $gt: 25 } });

        // greater than / equal to
        // const persons = await Person.find({ age: { $gte: 25 } });

        // greater than / equal to for strings (name starting with 'N', or at least container the letter 'N'. Sorting gives proper arrangement)
        // const persons = await Person.find({ name: { $gt: "N" } }).sort({ name: 1 })

        
        // greater than operator for dates
        // const persons = await Person.find({ registered: { $gt: "2016-08-20T04:43:18.000Z" } }).count();

        res.status(200).json(persons);
    } catch (error) {
        next(error)
    }
};

// $in and $nin operators
// both require an array as a value
export const inAndNotIn = async (req, res, next) => {
    
    try {
        const persons = await Person.find({ age: { $in: [21, 22] } });

        res.status(200).json(persons);
    } catch (error) {
        next(error)
    }
};

// $and operator
// logically combines multiple conditions. resulting documents must match all conditions
export const andOperator = async (req, res, next) => {
    
    try {
        // get persons that are male and 25 years
        const persons = await Person.find({ $and: [ { gender: "male" }, { age: 25 } ] });

        // get persons whose age is not equal to 25 and is greater than or equal to 20
        // const persons = await Person.find({ $and: [ {age: { $ne: 25 }}, {age: { $gte: 20 }} ] }).count();

        /* 
        NB
        if you want to query by same fields (as expample two), you must use the and operator
        in this case this and operator is known as 'explicit and' operator

        { $and: [ {age: { $ne: 25 }}, {age: { $gte: 20 }} ] }

        ≠

        { age: { $ne: 25 }, age: { $gte: 20 } }
        in the second  query above, the query will return only the second parameter, the first part will be omitted

        */

        /* but if the fields are different you can use implicit and as shown below; both return the same result sets  */
        // get persons that are female and favorite fruit is banana
        // const persons = await Person.find({ $and: [ { gender: "female" }, { favoriteFruit: "banana" } ] }).count();
        // const persons = await Person.find({ gender: "female" , favoriteFruit: "banana" }).count();

        res.status(200).json(persons);
    } catch (error) {
        next(error)
    }
};

// $and operator
// logically combines multiple conditions. resulting documents must match any of the conditions
export const orOperator = async (req, res, next) => {
    
    try { 
        // get persons that are either male or age 25
        const persons = await Person.find({ $or: [ { gender: "male" }, { age: 25 } ] });

        // if you are using same fields you can use $in operator instead, both return same results as below
        // const persons = await Person.find({ $or: [ { eyeColor: "green" }, { eyeColor: "blue" } ] }).count();
        // const persons = await Person.find({ eyeColor: { $in: ["green", "blue"] } }).count();

        res.status(200).json(persons);
    } catch (error) {
        next(error)
    }
};

// embedded / nested documents (just use dot notation)
/** fields used in dot notation must be inside quotation marks */
export const nestedDocuments = async (req, res, next) => {
    
    try { 
        // const persons = await Person.find({ "company.title": "YURTURE" });
        const persons = await Person.find({ "company.location.address": "452 Bainbridge Street" })

        res.status(200).json(persons);
    } catch (error) {
        next(error)
    }
};

// querying arrays
/** fields used in dot notation must be inside quotation marks */
export const arrayInDocuments = async (req, res, next) => {
    
    try {  
        /** entire tag array is as follows */
        // const persons = await Person.find({ 
        //     tags: [
        //         "enim",
        //         "id",
        //         "velit",
        //         "ad",
        //         "consequat"
        //     ]
        // });

        /** tags array contains the scpecified value as an element */
        // const persons = await Person.find({ 
        //     tags: "ad"
        // });

        /** specific index contains specific element */
        const persons = await Person.find({ 
            "tags.0": "ad"
        });

        res.status(200).json(persons);
    } catch (error) {
        next(error)
    }
};

// array operators ($all, $size) 
export const arrayOperators = async (req, res, next) => {
    
    try {   
        // $all operator - array contains all specified values independent of order 
        // const persons = await Person.find({ tags: { $all: ["ad", "eu"] } });

        
        // $size operator - array is of certain size 
        const persons = await Person.find({ tags: { $size: 4 } });

        res.status(200).json(persons);
    } catch (error) {
        next(error)
    }
};