import React, { Component } from 'react'
import ecommerce from './img/ecommerce.jpg';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Home.js';

class App extends Component {
  render() {
    return (
     <div className="main-app">
     <Header/> 
       <div id="content" className="main-content"> 
         {this.props.children}
         <img src={ecommerce} className="imgHome" alt="imgHome"/>
       </div>
     </div>
    );
  }
}

export default App;
