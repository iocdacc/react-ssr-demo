import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { action } from '../../store/login';
import './index.scss';


const Head = props => {
  const login = e=>{
    e.preventDefault()
    action.login(props.dispatch)
  }

  const unlogin = e=>{
    e.preventDefault()
    action.unlogin(props.dispatch)
  }

  if (props.login.uid) {
    return (
      <div data-component='Head'>
        <ul>
          <li><a href='/' onClick={e=>e.preventDefault()}>uid:{props.login.uid}</a></li>
          <li><a href='/' onClick={e=>e.preventDefault()}>用户名:{props.login.name}</a></li>
          <li><a href='/' onClick={unlogin}>注销</a></li>
        </ul>
      </div>
    )
  }else{
    return (
      <div data-component='Head'>
        <ul>
          <li><a href='/' onClick={login}>登陆</a></li>
        </ul>
      </div>
    )
  }
}

export default connect(
  state=>({login: state.login})
)(Head)