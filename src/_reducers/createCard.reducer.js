import { cardConstant } from '../_constants';


const CardState = {}

export function CardReducer(state = CardState, action) {
    switch (action.type) {
        case cardConstant.POSTCARD_REQUEST:
            return {
                card: action.data
            };
        case cardConstant.POSTCARD_SUCCESS:
            return {
                card: action.card
            };
        case cardConstant.POSTCARD_FAILURE:
            return {};
        case cardConstant.GETALLCARD_REQUEST:
            return {
                card: action.data
            };
        case cardConstant.GETALLCARD_SUCCESS:
            return {
                card: action.card
            };
        case cardConstant.GETALLCARD_FAILURE:
            return {};
        case cardConstant.GETCARD_REQUEST:
            return {
                card: action.data
            };
        case cardConstant.GETCARD_SUCCESS:
            return {
                card: action.card
            };
        case cardConstant.GETCARD_FAILURE:
            return {};
        default:
            return state
    }
}