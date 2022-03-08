import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { getCardReducer } from './cardReducers/getCardReducer';
import { postCardReducer } from './cardReducers/postCardReducer';
import { getCardListReducer } from './cardReducers/getCardsReducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  getCardReducer,
  postCardReducer,
  getCardListReducer,
});

export default rootReducer;