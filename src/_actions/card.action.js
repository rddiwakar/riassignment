import { cardConstant } from '../_constants';
import {  userService } from '../_services';

export const cardActions={
    createCard,
    getCardsListData,
    getCardDetail
}
function createCard(data) {
    return dispatch => {
        dispatch(request(data));

        userService.postCard(data)
            .then(
                card => {
                    console.log(card) 
                    dispatch(success(card));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(data) { return { type: cardConstant.POSTCARD_REQUEST, data } }
    function success(card) { return { type: cardConstant.POSTCARD_SUCCESS, card } }
    function failure(error) { return { type: cardConstant.POSTCARD_FAILURE, error } }
}

function getCardsListData (){
    
    return dispatch => {
        dispatch(request());

        userService.getAllCard()
            .then(
                cards => { 
                    console.log(cards)
                    dispatch(success(cards));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: cardConstant.GETALLCARD_REQUEST} }
    function success(cards) { return { type: cardConstant.GETALLCARD_SUCCESS, cards} }
    function failure(error) { return { type: cardConstant.GETALLCARD_FAILURE, error } }

}

function getCardDetail(id){
    return dispatch => {
        dispatch(request(id));

        // CardData.getCardById(id)
        userService.getCardById(id)
            .then(
                carddetail => { 
                    console.log(carddetail)
                    dispatch(success(carddetail));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: cardConstant.GETCARD_REQUEST} }
    function success(carddetail) { return { type: cardConstant.GETCARD_SUCCESS, carddetail} }
    function failure(error) { return { type: cardConstant.GETCARD_FAILURE, error } }

}