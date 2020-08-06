import { LOGIN, UNLOGIN } from './constants';

let defaultState = {

}

export default function (state = defaultState, action) {
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case LOGIN:
      newState = {
        uid: action.data.uid,
        name: action.data.name,
      }
      break;

    case UNLOGIN:
      newState = {
        uid: undefined,
        name: undefined,
      }
      break;

    default:
      break;
  }

  return newState
}