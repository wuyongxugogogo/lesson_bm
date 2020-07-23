import React, { useEffect, useState, memo } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './store/actionCreators';

function Recommend(props) {
  const { recommendList, banners, enterLoading } = props
  const { getRecommendListDataDispatch, getBannerDateDispatch } = props
  console.log(recommendList)
  useEffect(()=>{
    if(!recommendList.length){
      getRecommendListDataDispatch();
    }
    if(!banners.length){
      getBannerDateDispatch();
    }
  },[])
  return (
    <>
    Recommend
    </>
  )
}

const mapStateToProps = (state) => ({
  recommendList: state.recommend.recommendList,
  banners: state.recommend.banners,
  enterLoading: state.recommend.enterLoading
})
const mapDispatchToProps = (dispatch) => {
  return {
    getRecommendListDataDispatch(){
      dispatch(actionTypes.getRecommendList());
    },
    getBannerDateDispatch(){
      dispatch(actionTypes.getBanners());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));
