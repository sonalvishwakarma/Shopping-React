import React, { Component } from 'react';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row, Glyphicon, Thumbnail} from 'react-bootstrap';
import home3 from './home3.jpg';

class Products extends Component {

	render(){
		return (
			<div className="main-app">
                <Header/> 
                <div id="content" className="main-content"> 
				   	<div className="login">
						<h2>Products</h2>
                       	<Row className="show-grid">
							<Col xs={6} md={4}>
                				<Thumbnail href="/ProductDetail" alt="imgHome" src={home3} rounded>
							        <h3>Computer</h3>
							        <p><Glyphicon glyph="star" /> $300.20</p>
							    </Thumbnail>
							    <Thumbnail rounded>
							    	<p>
							          <Button bsStyle="primary">Add to cart</Button>&nbsp;
							          <Button href="/checkout" bsStyle="default">Buy now</Button>
							        </p>
							    </Thumbnail>    
							</Col>
							<Col xs={6} md={4}>
                				<Thumbnail href="/ProductDetail" alt="imgHome" src={home3} rounded>
							        <h3>Computer</h3>
							        <p><Glyphicon glyph="star" /> $300.20</p>
							    </Thumbnail>
							    <Thumbnail rounded>
							    	<p>
							          <Button bsStyle="primary">Add to cart</Button>&nbsp;
							          <Button href="/checkout" bsStyle="default">Buy now</Button>
							        </p>
							    </Thumbnail>
							</Col>
							<Col xs={6} md={4}>
                				<Thumbnail href="/ProductDetail" alt="imgHome" src={home3} rounded>
							        <h3>Computer</h3>
							        <p><Glyphicon glyph="star" /> $300.20</p>
							    </Thumbnail>
							    <Thumbnail rounded>
							    	<p>
							          <Button bsStyle="primary">Add to cart</Button>&nbsp;
							          <Button href="/checkout" bsStyle="default">Buy now</Button>
							        </p>
							    </Thumbnail>
							</Col>
						</Row>
						<br></br>
                       	

					</div>
				</div> 
            </div>
        );
	}
}

export default Products;