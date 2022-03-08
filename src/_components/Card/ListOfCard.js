import React from "react";
import Cards from "react-credit-cards";
import { connect } from "react-redux";
import styled from 'styled-components'
import { cardActions } from "../../_actions/card.action";
import Header from "../Header/header";

const CardList  = styled.div`
background:red;
`

class SupportedCards extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getCardsListData()
  }
  render() {
    return (
      <CardList className="App-cards">
        {/* {console.log(GetCardLIST)} */}
        <Header />
        <br />
        <h3>Supported Cards</h3>
        <div className="App-cards-list">
          <Cards
            name="John Smith"
            number="5555 4444 3333 1111"
            expiry="10/20"
            cvc="737"
          />
          <Cards
            name="John Smith"
            number="4111 1111 1111 1111"
            expiry="10/20"
            cvc="737"
          />

          <Cards
            name="John Smith"
            number="3700 0000 0000 002"
            expiry="10/20"
            cvc="737"
          />

          <Cards
            name="John Smith"
            number="3600 666633 3344"
            expiry="10/20"
            cvc="737"
          />
          <Cards
            name="John Smith"
            number="6011 6011 6011 6611"
            expiry="10/20"
            cvc="737"
          />

          <Cards
            name="John Smith"
            number="5066 9911 1111 1118"
            expiry="10/20"
            cvc="737"
          />

          <Cards
            name="John Smith"
            number="6250 9460 0000 0016"
            expiry="10/20"
            cvc="737"
          />

          <Cards
            name="John Smith"
            number="6062 8288 8866 6688"
            expiry="10/20"
            cvc="737"
          />

          <Cards
            name="John Smith"
            number="**** **** **** 7048"
            expiry="10/20"
            cvc="737"
            preview={true}
            issuer="visa"
          />
        </div>
      </CardList>
    );
  }
}
const actionCreators = {
  getCardsListData: cardActions.getCardsListData,
};
function mapState(state){
  const GetCardLIST = state.getCardListReducer.GetCardLIST;
  return GetCardLIST
  
}
const connectedSupportedCards = connect(mapState, actionCreators)(SupportedCards) ;
export  {connectedSupportedCards as SupportedCards}
