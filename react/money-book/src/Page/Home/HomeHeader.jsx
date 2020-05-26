import React from 'react';
import { DatePicker } from 'antd';
import logo from '../../logo.svg';

class HomeHeader extends React.Component {
  handleDateChange = (date, dateString) => {
    console.log(date, dateString);
  }
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <img src={logo} alt=""/>
        </div>
        <div className="row">
          <div className="col col-3 offset-3">
            <DatePicker picker="month" onChange={this.handleDateChange}/>
          </div>
          <div className="col col-6 align-self-center">
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default HomeHeader;