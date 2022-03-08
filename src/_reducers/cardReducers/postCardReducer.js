import { cardConstant } from '../../_constants';

const postCardDetail = {}

export function postCardReducer(state = postCardDetail, action) {
    switch (action.type) {
        case cardConstant.POSTCARD_REQUEST:
            return {
                card: action.data   
            };
        case cardConstant.POSTCARD_SUCCESS:
            return {
                card: action.card,
                message:'Card saved Successfully'
            };
        case cardConstant.POSTCARD_FAILURE:
            return {};
        default:
            return state
    }
}