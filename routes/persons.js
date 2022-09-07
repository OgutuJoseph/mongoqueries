import express from 'express'; 
import { findMany, countAll, equalityQuery, notEqualTo, greaterThan, inAndNotIn, andOperator, orOperator, nestedDocuments, arrayInDocuments } from '../controller/person.js';

const router = express.Router();

/** Persons routes */
//skipped insert Many
router.get('/findMany', findMany);
router.get('/count', countAll);
router.get('/equalityQuery', equalityQuery);
router.get('/notEqualTo', notEqualTo);
router.get('/greaterThan', greaterThan);
router.get('/inAndNotIn', inAndNotIn);
router.get('/andOperator', andOperator);
router.get('/orOperator', orOperator);
router.get('/nestedDocuments', nestedDocuments);
router.get('/arrayInDocuments', arrayInDocuments)

export default router;