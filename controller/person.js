import Person from '../models/Person.js';

export const findMany = async (req, res, next) => {
    
    try {
        const persons = await Person.find({});
        const data = persons;
        res.status(200).json(data);
    } catch (error) {
        next(error)
    }
};