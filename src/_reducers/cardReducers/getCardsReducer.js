import { cardConstant } from '../../_constants';


const getCardLIST = {}

export function getCardListReducer(state = getCardLIST, action) {
    switch (action.type) {
        case cardConstant.GETALLCARD_REQUEST:
            return {};
        case cardConstant.GETALLCARD_SUCCESS:
            return {
                card: action.card,
                message:"List fetched Successfully"
            };
        case cardConstant.GETALLCARD_FAILURE:
            return {};
        default:
            return state
    }
}