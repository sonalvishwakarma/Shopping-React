import React, { Component } from 'react';
import Header from './Home.js';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Glyphicon, Thumbnail} from 'react-bootstrap';
import { browserHistory, Link } from 'react-router';

//JSON url of shopping cart
var shoppingCart = 'https://api.myjson.com/bins/he9jr';
var userID;
var prodID;
//JSON of products
var PRODUCTS = [
   {
    "ProductID": 1,
    "ProductName": "Vu 80cm (32) HD LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70",
    "SalesPrice": "160000",
    "Productquantity": 1,
    "ProductType": "TV",
    "Description": "This is very good tv with amazing graphics and hd quality"
   },
   {
    "ProductID": 2,
    "ProductName": "Vu 100cm (42) LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/y/w/vu-32k160mrevd-original-imaeg8grazngxb37.jpeg?q=70",
    "SalesPrice": "45000",
    "Productquantity": 1,
    "ProductType": "TV",
    "Description": "A 102-cm TV is what you need to take your living room's entertainment quotient to a whole new level. Invest in this Vu Full HD TV and dive into a whole new level of immersive entertainment and be a part of the movie you are watching."
   },
   {
    "ProductID": 3,
    "ProductName": "Vu 120cm (52) HD Graphics LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/c/6/vu-40d6575-original-imaegyt4jgf4mynu.jpeg?q=70",
    "SalesPrice": "55000",
    "Productquantity": 1,
    "ProductType": "TV",
    "Description": "A 102-cm TV is what you need to take your living room's entertainment quotient to a whole new level."
   },
   {
    "ProductID": 4,
    "ProductName": "Vu 150cm (62) HD screen LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/g/c/6/vu-40d6575-original-imaegyt4jgf4mynu.jpeg?q=70",
    "SalesPrice": "65000",
    "Productquantity": 1,
    "ProductType": "TV",
    "Description": "This is very good tv with amazing graphics"
   },
   {
    "ProductID": 5,
    "ProductName": "Vu 20cm (21) High resoulation with graphics LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/z/r/w/vu-led-55k160gau-original-imaequhfjs83fbrp.jpeg?q=70",
    "SalesPrice": "80000",
    "Productquantity": 1,
    "ProductType": "TV",
    "Description": "This is very good tv with HD features"
   },
   {
    "ProductID": 6,
    "ProductName": "Vu 65cm (30) HD screen LED TV",
    "image": "https://rukminim1.flixcart.com/image/312/312/television/z/r/w/vu-led-55k160gau-original-imaequhfjs83fbrp.jpeg?q=70",
    "SalesPrice": "16000",
    "Productquantity": 1,
    "ProductType": "TV",
    "Description": "A 102-cm TV is what you need to take your living room's entertainment quotient to a whole new level. Invest in this Vu Full HD TV and dive into a whole new level of immersive entertainment."
   }
];

export class ProductInfo  extends Component {

  // Handle add to the product in the cart
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

        var prodID = json.find(function(pID) {
          return pID.ProductId === selectedProduct.ProductID;
        })
        if(prodID && prodID.ProductId === selectedProduct.ProductID){
          alert("product already added")
        }
        else{
          var product = {
            CartId : json.length+1,
            UserId : userID,
            ProductId : selectedProduct.ProductID,
            ProductName : selectedProduct.ProductName,
            Price : selectedProduct.SalesPrice,
            Image : selectedProduct.image,
            Quantity : selectedProduct.Productquantity,
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

            }.bind(this))
          }.bind(this));
          alert("Successfully product added to the cart");
          browserHistory.push('/ViewCart');
        }
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
          <p>Price : {this.props.pro.SalesPrice}</p>
        <div>
          <Button bsStyle="primary" onClick={this.handleAddToCart.bind(this, this.props.pro)}>Add to cart</Button>&nbsp;
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
