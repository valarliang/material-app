import React, { Component } from 'react';
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Sidebar from '../components/Sidebar';

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return (
      <div>
        <Sidebar />
      </div>
    );
  }
}

export default Dashboard;

