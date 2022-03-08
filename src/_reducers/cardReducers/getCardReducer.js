import { cardConstant } from '../../_constants';

const initialState = {card:{},message:''}

export function getCardReducer(state = initialState, action) {
    switch (action.type) {
        case cardConstant.GETCARD_REQUEST:
            return {
                card: action.data
            };
        case cardConstant.GETCARD_SUCCESS:
            return {
                card: action.carddetail,
                message:'cardDetail showed successfully'
            };
        case cardConstant.GETCARD_FAILURE:
            return {};
        default:
            return state
    }
}