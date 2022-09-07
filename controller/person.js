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