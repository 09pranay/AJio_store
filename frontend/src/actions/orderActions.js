import {ORDER_CRFESATE_REQUEST,ORDER_CRFESATE_SUCESS,ORDER_CRFESATE_FAIL} from '../constants/orderConstants'

export const createOrder = (order) => async (dispatch)=>{
    try {
       dispatch({type:ORDER_CRFESATE_REQUEST})

       const {userLogin: { userInfo }} =getState()

       const config ={
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
       }

       const { data} = await axios.post(`/api/order`,order,config)

       dispatch({type:ORDER_CREATE_SUCCESS, payload: data })
    }catch(error){
        dispatch({ type: USER_CREATE_FAIL, 
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message  
    }
}