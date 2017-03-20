import React, { Component } from 'react';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row, Image, Jumbotron,Thumbnail,Glyphicon} from 'react-bootstrap';

var productApi = 'https://api.myjson.com/bins/y9d9b';

class ProductDetail extends Component {

	constructor(props){
		super(props)

		this.state ={
            product : []
		};
		var productId = this.props.location.pathname.split('/').pop();
		this.getData(productId)
	}

	getData(productId){
        fetch(productApi)
        .then( (response) => {
            return response.json()
        })   
        .then( (json) => {
        	var product = json.find(function(pro){
        		return pro.ProductID == productId;
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
				   	<div className="login">
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
									       <p><Glyphicon glyph="star" />Sales Price : {this.state.product.SalesPrice}</p>
											<p><Glyphicon glyph="star" />Discount Price : {this.state.product.DiscountPrice}</p>
											<p><Glyphicon glyph="star" />Description : {this.state.product.Description}</p>
									        <p>
									          	<Button bsStyle="info">Add to cart</Button>&nbsp;
							          			<Button href="/checkout" bsStyle="default">Buy now</Button>
									        </p>
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