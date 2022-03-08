import React from "react";
import Cards from "react-credit-cards";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { cardActions } from "../../_actions/card.action";
import Header from "../Header/header";

const CardList = styled.div`
text-align:center
`
const CardWrapper = styled.div`
border:1px solid black;
padding: 10px;
margin: 5px
cursor:pointer;
`

class SupportedCards extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.getCardsListData()
  }
  handleClick(id) {
    this.props.getCardDetail(id)
   
  }

  render() {
    const list = this.props.getCardList;
    const message = this.props.message
    return (
      <CardList className="App-cards">
        <Header />
        <br />
        <h3>Supported Cards</h3>
        <div className="App-cards-list">
          {
            list && list.results ? list.results.map((itm, idx) => {
              return (
                <Link to={`cardDetail/${itm.id}`} key={itm.id}>
                  <CardWrapper key={itm.id} onClick={() => this.handleClick(itm.id)}>
                    <Cards
                      number={itm.cardNumber}
                      expiry={itm.cardExpiration}
                      name={itm.cardHolder}
                      cvc='123'
                      issuer={itm.category}
                    />
                  </CardWrapper>
                </Link>
              )
            }):<div>Loading ...</div>
          }

        </div>
      </CardList>
    );
  }
}
const actionCreators = {
  getCardsListData: cardActions.getCardsListData,
  getCardDetail: cardActions.getCardDetail
};
function mapState(state) {
  const { getCardList } = state.getCardListReducer;
  const { message } = state.getCardListReducer;
  return { getCardList, message }

}
const connectedSupportedCards = connect(mapState, actionCreators)(SupportedCards);
export { connectedSupportedCards as SupportedCards }
