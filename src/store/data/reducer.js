import { GETSHANBAYDATA } from './constants';

let defaultState = {
  shanbay: {}
}

export default function (state = defaultState, action){
  let newState = JSON.parse(JSON.stringify(state))

  if (action.type === GETSHANBAYDATA) {
    newState.shanbay = {
      translation: action.data.translation,
      content: action.data.content,
      author: action.data.author,
      assign_date: action.data.assign_date,
    }
    return newState
  }else{
    return newState
  }
}