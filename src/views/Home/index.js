import React from 'react';
import loadable from '@loadable/component';
import Shanbay from '../../components/Shanbay';
const Async = loadable(()=>import('../../components/Async'), {ssr: false});

const Home = props=>(
  <>
    <div>扇贝每日</div>
    <Shanbay/>
    <Async/>
  </>
)

Home.loadData = async function (dispatch){
  await Shanbay.loadData(dispatch)
}

export default Home