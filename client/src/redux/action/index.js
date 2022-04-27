import { ADD_PRODUCTS_DATA, REQ_PRODUCTS_DATA } from "./actionConstant";

export function addProducts(params){
    return {
        type: ADD_PRODUCTS_DATA,
        payload: params
    }
}

export function reqProducts(){
    return{
        type: REQ_PRODUCTS_DATA
    }
}