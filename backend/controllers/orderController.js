import Order from '../models/orderModel.js';
import  asyncHandler from 'express-async-handler'

//@des create new order 
//@route /api/order
//@access private

const addOrderItems = asyncHandler( async(req, res) => {
       const {orderItems,shippingAddress,paymentMethod,itemsPrice,taxPrice,shippingPrice,totalPrice} = req.body;
  
       if(orderItems && orderItems.length === 0){
            res.status(400)
            throw new Error('no order items found')
            return
       }else{
           const order = new Order({
               orderItems,
               user: req.user._id,
               shippingAddress,
               paymentMethod,
               itemsPrice,
               taxPrice,
               shippingPrice,
               totalPrice
            
            })

            const createOrder = await Order.save()

            res.status(200).json(createOrder)
       }

})

//@des Get order by id
//@route /api/order/:id
//@access private

const getOrderById = asyncHandler( async(req, res)=>{
     const order = await Order.findById(req.params.id).populate(
          'user',
          'name email,'
     )
     if(order){
          res.json(order)
     }else{
          res.status(404)
          throw new Error('Order not found')
     }


})

//@des update  order to paid
//@route GET /api/order/:id/pay
//@access private
const updateOrderToPaid = asyncHandler(async(req, res) => {
     const order = await Order.findById(req.params.id)

     if (order) {
          order.ispaid = true
          order.paidAt = Date.now()
          order.paymentResult={
               id: req.body.id,
               status: req.body.status,
               updated_time:req.body.updated_time,
               email_address: req.body.payer.email_address,
          }

          const updateOrder = await Order.save()
          res.json(updateOrder)
     }else{
          res.status(404)
          throw new Error('Order not found')
     }

})
//@des GET my order
//@router GET /api/order/myorder
//@access private
const getMyOrder = asyncHandler( async (req, res) => {
        const order = await Order.find({ user: req.user._id})

        res.json(order)
})

//@des GET my order
//@router GET /api/order/myorder
//@access private
const getOrder = asyncHandler( async (req, res) => {
        const order = await Order.find({}).populate('user','id.name')

        res.json(order)
})


export {addOrderItems,getOrderById,updateOrderToPaid,getOrder,getMyOrder}