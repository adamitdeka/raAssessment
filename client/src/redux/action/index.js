import { OPEN_MODAL } from "./actionConstant";

export function openModal(params){
    return {
        type: OPEN_MODAL,
        payload: params
    }
}