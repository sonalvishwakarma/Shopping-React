import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var userApi = 'https://api.myjson.com/bins/o4zz3';
var productApi = 'https://api.myjson.com/bins/y9d9b';
var shoppingCart = 'https://api.myjson.com/bins/1bcwkf'

class App extends Component {

  constructor() {
    super();
       this.users = {};
       this.postData();
       
    }

    postData(){
      fetch(userApi, {  
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "UserID": 1,
            "FirstName": "av",
            "LastName": "vishwakarma",
            "EmailID": "av@gmail.com",
            "Password": "123456"
        })
      }).then(function(res){
      })
    }

    getData(){
       fetch(userApi)
            .then( (response) => {
              return response.json() })   
                .then( (json) => {
                    this.users = json;
                });

    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }


}

export default App;