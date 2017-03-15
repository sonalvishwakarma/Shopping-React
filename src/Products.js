import React, { Component } from 'react';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row, Glyphicon, Thumbnail} from 'react-bootstrap';
import home3 from './home3.jpg';

var productApi = 'https://api.myjson.com/bins/y9d9b';
var products;

var EMPLOYEES = [
{"ProductID":1,"ProductName":"Vu 80cm (32) HD Ready LED TV",
"image":"https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70","SalesPrice":"16000","DiscountPrice":"13000","Productquantity":10,"ProductType":"TV","Description":"This is very good tv"},
{"ProductID":2,"ProductName":"Vu 80cm (42) HD Ready LED TV","image":"https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70","SalesPrice":"25000","DiscountPrice":"21000","Productquantity":10,"ProductType":"TV","Description":"This is very good tv"}
]

export class Employee  extends Component {
	render() {
		return (
			<span>
				<Thumbnail href="/ProductDetail" alt="imgHome" src={this.props.pro.image} >
					<h3>{this.props.pro.ProductName}</h3>
					<p><Glyphicon glyph="star" />Sales Price {this.props.pro.SalesPrice}</p>
					<p><Glyphicon glyph="star" />Discount Price {this.props.pro.DiscountPrice}</p>
					<p><Glyphicon glyph="star" />Description {this.props.pro.Description}</p>
				</Thumbnail>
				<Thumbnail >
					<p>
					<Button bsStyle="primary">Add to cart</Button>&nbsp;
					<Button href="/checkout" bsStyle="default">Buy now</Button>
					</p>
				</Thumbnail>    
			</span>	
			);
	}
};

export class EmployeeTable extends Component {
	render() {
		var rows = [];
		this.props.employees.forEach(function(pro) {
			rows.push(<Employee pro={pro} />);
		});
		return (
			<span>
				{rows}
			</span>	
		);
	}
};

class Products extends Component {

	constructor(props){
		super(props)
		this.getProducts()
	}

	getProducts(){
		fetch(productApi)
		.then( (response) => {
			return response.json() })   
		.then( (json) => {
			products = json;
		});
	}	

	render(){

		return (
			<div className="main-app" onLoad={this.getProducts}>
				<Header/> 
				<div id="content" className="main-content"> 
					<div className="login">
						<div>
							<Row className="show-grid">
								<Col md={4}>
									<EmployeeTable employees={EMPLOYEES} />
								</Col>
							</Row>
						</div>	
					</div>
				</div> 
			</div>
		);
	}
}

export default Products;