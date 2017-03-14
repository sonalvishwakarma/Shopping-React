import React, { Component } from 'react';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row, Image, Jumbotron,Thumbnail,Glyphicon} from 'react-bootstrap';
import home3 from './home3.jpg';

class ProductDetail extends Component {

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
	                    				<Image src={home3}  alt="imgHome" rounded className="prodImg"/>
									</Col>
									<Col xs={6} md={6}>
                    					<Thumbnail className="thumbnailColor">
									        <h3>Computer</h3>
									        <p><Glyphicon glyph="star" />Price : - $300.20</p>
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