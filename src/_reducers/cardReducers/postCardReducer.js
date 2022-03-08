import { cardConstant } from '../../_constants';

const initialState = { card:{}, message:'' }

export function postCardReducer(state = initialState, action) {
    switch (action.type) {
        case cardConstant.POSTCARD_REQUEST:
            return {
                card: action.data   
            };
        case cardConstant.POSTCARD_SUCCESS:
            return {
                card: action.card,
                message:'Card Added Successfully'
            };
        case cardConstant.POSTCARD_FAILURE:
            return {};
        default:
            return state
    }
}