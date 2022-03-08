import React from "react";
import Cards from "react-credit-cards";
import { cardActions } from "../../_actions/card.action.js";
import { connect } from "react-redux";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "../../_helpers/utils.js";
import Header from "../Header/header.js";

//import "react-credit-cards/es/styles-compiled.css";

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      category: '',
      focused: "",
      cardHolder: ''
    };
    this.handleCallback = this.handleCallback.bind(this)
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCallback({ issuer }, isValid) {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus({ target }) {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange({ target }) {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const data= {
      name:this.state.name,
      cardNumber:this.state.number,
      cardExpiration:this.state.expiry,
      category:this.state.category,
      cardHolder:this.state.cardHolder,
    }
    
    this.props.createCard(data) 
  };

  render() {
    const { cardHolder, number, expiry, cvc, focused  } = this.state;

    return (
      <div key="Payment" className="col-md-6 col-md-offset-3">
        < Header />
        <br/>
        <div className="App-payment">
          <h2>{this.props.message||'Add Your Card'}</h2>

          <Cards
            number={number}
            name={cardHolder}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />

            </div>
            <div className="form-group">
              <input
                type="text"
                name="cardHolder"
                className="form-control"
                placeholder="cardHolder"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="form-group">

              <input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valid upto"
                pattern="\d\d/\d\d"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Enter your Bnk"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="category"
                placeholder="Category"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="form-actions">
              <button className="btn btn-primary btn-block">Add</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
function mapstoState(state){
  const {message} = state.postCardReducer;
  
  return {message}
}
const actionCreators = {
  createCard: cardActions.createCard,
};
const connectedAddCart = connect(mapstoState,actionCreators)(Homepage)

export { connectedAddCart as Homepage };
