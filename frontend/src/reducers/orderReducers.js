import {ORDER_CRFESATE_REQUEST,ORDER_CRFESATE_SUCESS,ORDER_CRFESATE_FAIL} from '../constants/orderConstants';
export const orderCreateReducer = (state, action) =>{
    switch (action.type) {
        case ORDER_CRFESATE_REQUEST:
            return{ loading: true}
        case ORDER_CRFESATE_SUCESS:
            return{ loading:false ,order: action.order.playload,success:true}
        case ORDER_CRFESATE_FAIL:
            return{loading:false,error:action.payload}
        case ORDER_CRFESATE_REQUEST:
            return{}
        default:
            break;
    }
}