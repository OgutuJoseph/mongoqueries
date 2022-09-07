import express from 'express'; 
import { findMany, countAll } from '../controller/person.js';

const router = express.Router();

/** Persons routes */
//skipped insert Many
router.get('/findMany', findMany) 
router.get('/count', countAll)

export default router;