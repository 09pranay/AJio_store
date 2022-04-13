import express from 'express';
const router = express.Router()

import {addOrderItems,getOrederById} from '../controllers/orderController.js'
import {protect} from '../middleware/authMiddleware.js'

router.route('/').post(protect,addOrderItems)
router.route('/:id').get(protect,getOrederById)

export default router