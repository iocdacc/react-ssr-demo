import { GETSHANBAYDATA } from './constants';
import axios from 'axios';

export default {
  async getShanbayData(dispatch){
    let res = await axios.get('https://rest.shanbay.com/api/v2/quote/quotes/today/')
    dispatch({
      type: GETSHANBAYDATA,
      data: {
        translation: res.data.data.translation,
        content: res.data.data.content,
        author: res.data.data.author,
        assign_date: res.data.data.assign_date,
      }
    })
  }
}