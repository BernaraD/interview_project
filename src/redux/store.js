import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import users from './reducer'
import thunk from 'redux-thunk';

const store = createStore (users, composeWithDevTools (applyMiddleware(thunk)));

export default store;