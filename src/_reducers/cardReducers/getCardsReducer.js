import { cardConstant } from '../../_constants';


const initialState = {getCardList:{},message:''}

export function getCardListReducer(state = initialState, action) {
    switch (action.type) {
        case cardConstant.GETALLCARD_REQUEST:
            return {};
        case cardConstant.GETALLCARD_SUCCESS:
            return {
                getCardList: action.cards,
                message:"List fetched Successfully"
            };
        case cardConstant.GETALLCARD_FAILURE:
            return {};
        default:
            return state
    }
}