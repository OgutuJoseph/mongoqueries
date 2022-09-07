import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

/** import routes */
import personsRoute from './routes/persons.js'

/** Connect mongo db */
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongodb.");
    } catch (error) {
        // handleError(error)
        throw error;
    }
};
mongoose.connection.on("connected", () => { console.log("Database connected.") });
mongoose.connection.on("disconnected", () => { console.log("Database disconnected.") });


/** middlewares */
app.use(express.json());


/** routes */
app.get('/', (req, res) => { res.send("A series on mongo db queries.") });
app.use('/persons', personsRoute);


/** connect app and db */
app.listen(`${process.env.PORT}`, () => {
    connect();
    console.log(`Server running on port ${process.env.PORT}`)
})