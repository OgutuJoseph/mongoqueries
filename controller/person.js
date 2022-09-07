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

export const countAll = async (req, res, next) => {
    
    try {
        const count = await Person.find({}).count();
        res.status(200).json(count);
    } catch (error) {
        next(error)
    }
};