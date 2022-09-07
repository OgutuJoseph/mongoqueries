import express from 'express';
import { arrayOfNestedDocuments } from '../controller/friend.js';

const router = express.Router();


/** Friends routes */
router.get('/arrayOfNestedDocuments', arrayOfNestedDocuments); 

export default router;