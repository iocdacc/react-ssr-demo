import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from "react-router-config";
import { action } from '../store/login';
import Head from '../components/Head';

import '../static/css/reset.css';

const App = props => {
  useEffect(()=>{
    action.isLogin(props.dispatch)
  })

  let showHead = ()=>{
    if (props.route.headHidden) {
      return props.route.headHidden.indexOf(props.location.pathname) < 0 ? <Head/> : ''
    }else{
      return <Head/>
    }
  }

  return (
    <>
      {showHead()}
      {renderRoutes(props.route.routes)}
    </>
  )
}

export default connect(
  null
)(App)