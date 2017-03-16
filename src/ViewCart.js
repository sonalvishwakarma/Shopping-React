import React, { Component } from 'react';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row,Image,Table,FormControl} from 'react-bootstrap';
import home3 from './home3.jpg';

var shoppingCart = 'https://api.myjson.com/bins/he9jr';

class ViewCart extends Component {

	constructor(props){
		super(props)

		this.state ={
            mycart : ["1" , "2"]
		}
	}

	componentDidMount(){
        this.getData()
    }

    getData(){
        fetch(shoppingCart)
        .then( (response) => {
            return response.json()
        })   
        .then( (json) => {
            this.setState({
            	mycart : json
            })
        });
    }

	render() {	
	const listItems = this.state.mycart.map((number) =>
	  <li>{number}</li>
	);		
		return (
			
              <div>{listItems}</div>

            
		)
	}
}

export default ViewCart;