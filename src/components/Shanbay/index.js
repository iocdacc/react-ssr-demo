import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { action } from '../../store/data';
import './index.scss';

const Shanbay = props => {
  useEffect(()=>{
    // 扇贝API浏览器无法调用（无法跨域）
    // action.getData(props.dispatch)
  }, [props.shanbay.content])

  return (
    <div data-component='Shanbay'>
      <div>原文：{props.shanbay.content}</div>
      <div>译文：{props.shanbay.translation}</div>
      <div>作者：{props.shanbay.author}</div>
      <div>日期：{props.shanbay.assign_date}</div>
    </div>
  )
}

Shanbay.loadData = async (dispatch)=>{
  await action.getShanbayData(dispatch) // 服务端预取数据
}

export default connect(
  state=>({shanbay: state.data.shanbay})
)(Shanbay)