import express from 'express';
import { 
    arrayOfNestedDocuments, 
    elemMatchOperator 
} from '../controller/friend.js';

const router = express.Router();


/** Friends routes */
router.get('/arrayOfNestedDocuments', arrayOfNestedDocuments); 
router.get('/elemMatchOperator', elemMatchOperator)

export default router;