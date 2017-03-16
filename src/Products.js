import React, { Component } from 'react';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row, Glyphicon, Thumbnail} from 'react-bootstrap';
import home3 from './home3.jpg';
import { browserHistory, Link } from 'react-router';

var productApi = 'https://api.myjson.com/bins/y9d9b';
var allProduct;

var shoppingCart = 'https://api.myjson.com/bins/he9jr';
var mycart = [];

var PRODUCTS = [
	{"ProductID":1,"ProductName":"Vu 80cm (32) HD Ready LED TV",
	"image":"https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70","SalesPrice":"16000","DiscountPrice":"13000","Productquantity":10,"ProductType":"TV","Description":"This is very good tv"},
	{"ProductID":2,"ProductName":"Vu 80cm (42) HD Ready LED TV",
	"image":"https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70","SalesPrice":"25000","DiscountPrice":"21000","Productquantity":10,"ProductType":"TV","Description":"This is very good tv"}
]

export class ProductInfo  extends Component {

   handleAddToCart(){

   	fetch(shoppingCart)
		.then( (response) => {
			return response.json()
		})   
		.then( (json) => {
			mycart.push(json);
				localStorage.setItem('PreviouesMyCart', JSON.stringify(mycart));

            	fetch(shoppingCart, {  
					method: 'PUT',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						"CartId": 1 ,
					    "UserId": 1,
					    "ProductId": 1,
					    "ProductName": "Vu 80cm (32) HD Ready LED TV",
					    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70",
					    "ProductType": "TV",
					    "Productquantity": 10,
					    "Description": "This is very good tv",
					    "SalesPrice": "16000",
					    "DiscountPrice": "13000"
					})
				}).then(function(res)
				{
					return res.json()
					.then(function(json) {  
						mycart.push(json);
						localStorage.setItem('NewMyCart', JSON.stringify(mycart));
							console.log(mycart,"post")
							alert("Successfully product added to the cart")
					}.bind(this))
				}.bind(this));

				browserHistory.push('/viewCart');
		});
   }

	render() {
		return (
			<span>
			    <Link to={"ProductDetail/" + this.props.pro.ProductID}>
					<Thumbnail key={this.props.pro.ProductID} alt="imgHome" src={this.props.pro.image} >
						<h3>{this.props.pro.ProductName}</h3>
						<p><Glyphicon glyph="star" />Sales Price : {this.props.pro.SalesPrice}</p>
						<p><Glyphicon glyph="star" />Discount Price : {this.props.pro.DiscountPrice}</p>
						<p><Glyphicon glyph="star" />Description : {this.props.pro.Description}</p>
					</Thumbnail> 
				</Link>	
				<Thumbnail>
					<p>
					<Button bsStyle="primary"  id={this.props.pro.ProductID} onClick={this.handleAddToCart}>
					Add to cart</Button>&nbsp;
					<Button href="/checkout" bsStyle="default">Buy now</Button>
					</p>
				</Thumbnail>    
			</span>	
		);
	}
};

export class ProductData extends Component {
	render() {
		var rows = [];
		this.props.productsData.forEach(function(pro,i) {
			rows.push(<ProductInfo pro={pro} key={i}/>);
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
			allProduct = json;
		});
	}	

	render(){

		return (
			<div className="main-app" onLoad={this.getProducts}>
				<Header/> 
				<div id="content" className="main-content"> 
					<div className="login">
						<div>
							<Col md={4}>
								<ProductData productsData={PRODUCTS} />
							</Col>
						</div>	
					</div>
				</div> 
			</div>
		);
	}
}

export default Products;