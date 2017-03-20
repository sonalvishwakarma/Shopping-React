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
 var  productList = [];

var userApi = 'https://api.myjson.com/bins/o4zz3';

var PRODUCTS = [
  {
    "ProductID": 1,
    "ProductName": "Vu 80cm (32) HD Ready LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70",
    "SalesPrice": "16000",
    "DiscountPrice": "13000",
    "Productquantity": 10,
    "ProductType": "TV",
    "Description": "This is very good tv"
  },
  {
    "ProductID": 2,
    "ProductName": "Vu 100cm (42) HD Ready LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70",
    "SalesPrice": "25000",
    "DiscountPrice": "21000",
    "Productquantity": 10,
    "ProductType": "TV",
    "Description": "This is very good tv"
  },
  {
    "ProductID": 3,
    "ProductName": "Vu 120cm (52) HD Ready LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70",
    "SalesPrice": "45000",
    "DiscountPrice": "41000",
    "Productquantity": 10,
    "ProductType": "TV",
    "Description": "This is very good tv"
  },
  {
    "ProductID": 4,
    "ProductName": "Vu 150cm (62) HD Ready LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70",
    "SalesPrice": "65000",
    "DiscountPrice": "61000",
    "Productquantity": 10,
    "ProductType": "TV",
    "Description": "This is very good tv"
  },
  {
    "ProductID": 5,
    "ProductName": "Vu 20cm (21) HD Ready LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70",
    "SalesPrice": "6000",
    "DiscountPrice": "5000",
    "Productquantity": 10,
    "ProductType": "TV",
    "Description": "This is very good tv"
  },
  {
    "ProductID": 6,
    "ProductName": "Vu 20cm (21) HD Ready LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70",
    "SalesPrice": "6000",
    "DiscountPrice": "5000",
    "Productquantity": 10,
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

   handleAddToCart(){

	   	if(JSON.parse(localStorage.getItem("LoggedUser")))
	   	{
	       fetch(shoppingCart)
			.then( (response) => {
				return response.json()
			})   
			.then( (json) => {

				var product = {
					CartId : json.length+1,
					UserId : 1,
					ProductId : 1,
					Quantity : 1,
					Date : new Date()
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
							mycart.push(json);
								browserHistory.push('/products');
								alert("Successfully product added to the cart")
								if(mycart !== []){
									mycartDetail.filter(function (value) {
						         	productList.map(function (prod) {
					            		if(value.ProductId === prod.ProductID){
						            		viewCart.push(prod)
						                    localStorage.setItem('viewCart', JSON.stringify(viewCart));
						            	}
						        	})
							    })
							}
						}.bind(this))
					}.bind(this));
			});
	   	}
	   	else {
	   		alert("login required")
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
					<p><Glyphicon glyph="star" />Discount Price : {this.props.pro.DiscountPrice}</p>
					<p><Glyphicon glyph="star" />Description : {this.props.pro.Description}</p>

					<div>
						<Button bsStyle="primary"  id={this.props.pro.ProductID} onClick={this.handleAddToCart}>
							Add to cart</Button>&nbsp;
						<Button href="/checkout" bsStyle="default">Buy now</Button>
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

                        if(JSON.parse(localStorage.getItem("viewCart")) ){
                            alert("No items in cart")
                        }
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
