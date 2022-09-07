import express from 'express'; 
import { findMany } from '../controller/person.js';

const router = express.Router();

/** Persons routes */
//skipped insert Many
router.get('/findMany', findMany) 

export default router;