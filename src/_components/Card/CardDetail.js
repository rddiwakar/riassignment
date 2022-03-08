import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/header';
import styled from 'styled-components';

const CardDetailList = styled.div`
padding:10px;
ol li{
    margin:5px
    font-size:16px;
    font-weight:500;
}
ol li span{
    text-weight:700;
    font-size:20px;
    padding: 0 5px
}
`
class CardDetail extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const cardData = this.props.card
        return (
            <div>
                <Header />
                {
                    cardData ?
                    <CardDetailList>
                        <h1>Card Detail</h1>
                        <ol>
                            <li><span>Id</span>: {cardData.id||''}</li>
                            <li><span>cardNumber</span>: {cardData.cardNumber||""}</li>
                            <li><span>cardExpiration</span>: {cardData.cardExpiration||""}</li>
                            <li><span>cardHolder</span>: {cardData.cardHolder||''}</li>
                            <li><span>name</span>:{cardData.name||''}</li>
                        </ol>
                    </CardDetailList>:
                    <div>Loading ...</div>
                }
            </div>
        )
    }
}
function mapState(state){
   const {card} = state.getCardReducer;
   console.log(card)
   return {card}
}
const connectedCardDetail = connect(mapState,null)(CardDetail)
export  {connectedCardDetail as CardDetail};