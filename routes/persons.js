import express from 'express'; 
import { 
    findMany, 
    countAll, 
    equalityQuery, 
    notEqualTo, 
    greaterThan, 
    inAndNotIn, 
    andOperator, 
    orOperator, 
    nestedDocuments, 
    arrayInDocuments, 
    arrayOperators, 
    existsOperator,
    typeOperator,
    findFilter,
    regexOperator
} from '../controller/person.js';

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
router.get('/arrayInDocuments', arrayInDocuments);
router.get('/arrayOperators', arrayOperators);
router.get('/existsOperator', existsOperator);
router.get('/typeOperator', typeOperator);
router.get('/findFilter', findFilter);
router.get('/regexOperator', regexOperator)

export default router;