import React, { Component } from 'react';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Glyphicon, Thumbnail} from 'react-bootstrap';
import { browserHistory, Link } from 'react-router';

var productApi = 'https://api.myjson.com/bins/y9d9b';

var shoppingCart = 'https://api.myjson.com/bins/he9jr';
var mycart = [];
var viewCart = [];
var mycartDetail = [];
var productList = [];
var userID;

var userApi = 'https://api.myjson.com/bins/o4zz3';

var PRODUCTS = [
  {
    "ProductID": 1,
    "ProductName": "Vu 80cm (32) HD Ready LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70",
    "SalesPrice": "160000",
    "Productquantity": 1,
    "ProductType": "TV",
    "Description": "This is very good tv"
  },
  {
    "ProductID": 2,
    "ProductName": "Vu 100cm (42) HD Ready LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70",
    "SalesPrice": "45000",
    "Productquantity": 1,
    "ProductType": "TV",
    "Description": "This is very good tv"
  },
  {
    "ProductID": 3,
    "ProductName": "Vu 120cm (52) HD Ready LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70",
    "SalesPrice": "55000",
    "Productquantity": 10,
    "ProductType": "TV",
    "Description": "This is very good tv"
  },
  {
    "ProductID": 4,
    "ProductName": "Vu 150cm (62) HD Ready LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70",
    "SalesPrice": "65000",
    "Productquantity": 1,
    "ProductType": "TV",
    "Description": "This is very good tv with amazing graphics"
  },
  {
    "ProductID": 5,
    "ProductName": "Vu 20cm (21) HD Ready LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70",
    "SalesPrice": "80000",
    "Productquantity": 1,
    "ProductType": "TV",
    "Description": "This is very good tv with HD features"
  },
  {
    "ProductID": 6,
    "ProductName": "Vu 20cm (21) HD LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70",
    "SalesPrice": "6000",
    "Productquantity": 1,
    "ProductType": "TV",
    "Description": "This is very good tv"
  }
];

export class ProductInfo  extends Component {

	constructor(props){
		super(props);
     
      this.state = {
      	mycartDetail : [],
        productList : []
      }
	
        this.getData()
		this.getProducts()

	}

	getData(){
        fetch(shoppingCart)
        .then( (response) => {
            return response.json()
        })   
        .then( (json) => {
            mycartDetail = json
        });
    }

    getProducts(){
        fetch(productApi)
        .then( (response) => {
            return response.json()
        })   
        .then( (json) => {
           	productList = json
        });
    }

   handleAddToCart(selectedProduct){
	   	if(JSON.parse(localStorage.getItem("LoggedUser")))
	   	{
	   		var UserDetails = JSON.parse(localStorage.getItem("LoggedUser"))
	   			userID =  UserDetails.UserID;

	       	fetch(shoppingCart)
			.then( (response) => {
				return response.json()
			})   
			.then( (json) => {

				var product = {
					CartId : json.length+1,
					UserId : userID,
					ProductId : selectedProduct.ProductID,
					ProductName : selectedProduct.ProductName,
					Price : selectedProduct.SalesPrice,
					Image : selectedProduct.image,
					Quantity : 1,
					Date : new Date(),
					Description : selectedProduct.Description
				}
				
				json.push(product);

	            	fetch(shoppingCart, {  
						method: 'PUT',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(json)
					}).then(function(res)
					{
					return res.json()
					.then(function(json) {
						alert("Successfully product added to the cart");
					}.bind(this))
				}.bind(this));
			});
	   	}
	   	else {
	   		alert("login required")
	   		browserHistory.push('/login');
	   	}
   	}
	
	render() {
		return (
			<div className="col-md-4">
				<Thumbnail key={this.props.pro.ProductID} alt="imgHome" src={this.props.pro.image} >
					<Link to={"ProductDetail/" + this.props.pro.ProductID}>
						<h3>{this.props.pro.ProductName}</h3>
					</Link>	
					<p><Glyphicon glyph="star" />Sales Price : {this.props.pro.SalesPrice}</p>
					<p><Glyphicon glyph="star" />Description : {this.props.pro.Description}</p>

					<div>
						<Button bsStyle="primary" onClick={this.handleAddToCart.bind(this, this.props.pro)}>
							Add to cart</Button>&nbsp;
					</div> 
				</Thumbnail> 
			</div>	
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
			<div >
				{rows}
			</div>	
		);
	}
};

class Products extends Component {	

    handledata(){
    	var _this = this;
    	this.state.mycartDetail.filter(function (value) {
         	_this.state.productList.map(function (prod) {
            	if(value.ProductId === prod.ProductID){
            		viewCart.push(prod)

                    localStorage.setItem('viewCart', JSON.stringify(viewCart));
            	}
        	})
	    })
    }

	render(){

		return (
			<div className="main-app">
				<Header/> 
				<div id="content" className="main-content"> 
					<div className="products">
						<div>
							<ProductData productsData={PRODUCTS} />
						</div>	
					</div>
				</div> 
			</div>
		);
	}
}

export default Products;
