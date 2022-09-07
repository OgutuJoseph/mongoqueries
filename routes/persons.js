import express from 'express'; 
import { findMany, countAll, equalityQuery, notEqualTo, greaterThan } from '../controller/person.js';

const router = express.Router();

/** Persons routes */
//skipped insert Many
router.get('/findMany', findMany);
router.get('/count', countAll);
router.get('/equalityQuery', equalityQuery);
router.get('/notEqualTo', notEqualTo);
router.get('/greaterThan', greaterThan);

export default router;