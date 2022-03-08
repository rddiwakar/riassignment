import { cardConstant } from '../../_constants';

const getCardData = {}

export function getCardReducer(state = getCardData, action) {
    switch (action.type) {
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