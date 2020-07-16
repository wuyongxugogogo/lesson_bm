import React, { useCallback, useMemo } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import { connect } from 'react-redux';
import Journey from './components/journey/Journey';
import { bindActionCreators } from 'redux';
import {
  exchangeFromTo
} from './store/actions'

function App(props) {
  // console.log(props)
  const { 
    from,
    to,
    dispatch
  } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const cbs = useMemo(()=>{
    return bindActionCreators({
      exchangeFromTo
    },dispatch)
  },[])

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}/>
      </div>
      <form action="./query.html" className="form">
        <Journey from={from} to={to} {...cbs}/>
      </form>
    </div>
  );
}

export default connect(function mapStateToProps(state){
  return state;
},function mapDispatchToProps(dispatch){
  return {
    dispatch
  }
})(App);
// export default App;
