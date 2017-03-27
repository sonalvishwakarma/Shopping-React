import React, { Component } from 'react';
import Header from './Home.js';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row, Image, Jumbotron,Thumbnail,Glyphicon} from 'react-bootstrap';

//JSON url of products
var productApi = 'https://api.myjson.com/bins/y9d9b';

class ProductDetail extends Component {

	constructor(props){
		super(props)

		this.state ={
			product : []
		};
		var productId = JSON.parse(this.props.location.pathname.split('/').pop());
		this.getData(productId)
	}

  // Getting selected product
  getData(productId){
  	fetch(productApi)
  	.then( (response) => {
  		return response.json()
  	})
  	.then( (json) => {
  		var product = json.find(function(pro){
  			return pro.ProductID === productId;
  		})
  		this.setState({
  			product : product
  		})
  	});
  }

	render(){
		return (
			<div className="main-app">
			  <Header/>
			  <div id="content" className="main-content">
			    <div className="container">
			      <h2>Products Details</h2>
			      <Jumbotron>
			        <Row className="show-grid">
			          <Col xs={12} md={12}>
				          <Col xs={6} md={6}>
				          	<Image src={this.state.product.image}  alt="imgHome" rounded className="prodImg"/>
				          </Col>
				          <Col xs={6} md={6}>
					          <Thumbnail className="thumbnailColor">
					            <h3>{this.state.product.ProductName}</h3>
					            <p>
					              <Glyphicon glyph="star" />
					              <Glyphicon glyph="star" />
					              <Glyphicon glyph="star" />
					              <Glyphicon glyph="star" />
					              <Glyphicon glyph="star" />
					            </p>
					            <p>Description : {this.state.product.Description}</p>
					            <p>Price : {this.state.product.SalesPrice}</p>
					            FREE Delivery within 2-3 business days
					          </Thumbnail>
				          </Col>
			          </Col>
			        </Row>
			      </Jumbotron>
			    </div>
			  </div>
			</div>
		);
	}
}

export default ProductDetail;
