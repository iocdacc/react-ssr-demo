import { createStore, combineReducers } from 'redux';
import { reducer as data } from './data';
import { reducer as login } from './login';

const reducer = combineReducers({
  data,
  login
})

export const storeClient = ()=>{
  return createStore(reducer, window.__serverData__)
}

export const storeServer = ()=>{
  return createStore(reducer)
}