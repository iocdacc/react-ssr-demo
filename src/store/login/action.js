import { LOGIN, UNLOGIN } from './constants';
import axios from 'axios';
import Cookies from 'js-cookie';
import conifg from '../../conifg';

export default {
  async login(dispatch){
    let { data } = await axios.get(conifg.api + '/api/login', {
      params: {
        username: 123456,
        password: 123456
      },
    })

    if (data.message === 'success') {
      Cookies.set('key', data.data.key, { expires: 7 });
      dispatch({
        type: LOGIN,
        data: {
          uid: data.data.uid,
          name: data.data.name
        }
      })
    }

    return data.message
  },
  async isLogin(dispatch){
    let { data } = await axios.get(conifg.api + '/api/login', {
      params: {
        key: Cookies.get('key')
      },
    })

    if (data.message === 'success') {
      dispatch({
        type: LOGIN,
        data: {
          uid: data.data.uid,
          name: data.data.name
        }
      })
    }

    return data.message
  },
  async unlogin(dispatch){
    Cookies.remove('key');
    dispatch({
      type: UNLOGIN,
      data: undefined
    })
  }
}