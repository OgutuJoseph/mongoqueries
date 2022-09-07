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