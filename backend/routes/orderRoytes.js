import express from 'express';
const router = express.Router()

import {addOrderItems,getOrederById,updateOrderToPaid} from '../controllers/orderController.js'
import {protect} from '../middleware/authMiddleware.js'

router.route('/').post(protect,addOrderItems)
router.route('/:id').get(protect,getOrederById)
router.route('/:id/pay').put(protect,updateOrderToPaid)
router.route('/myorders').put(protect,getMyOrder)

export default router