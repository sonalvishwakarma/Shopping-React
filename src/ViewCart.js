import React, { Component } from 'react';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row, Image, Jumbotron,Thumbnail,Glyphicon, FormGroup,FormControl,ControlLabel} from 'react-bootstrap';
import home3 from './home3.jpg';

class ViewCart extends Component {

	render(){
		return (
			<div className="main-app">
                <Header/> 
                <div id="content" className="main-content"> 
				   	<div className="login">
						<h2>View Cart</h2>
						<Jumbotron>
	                       	<Row className="show-grid">
								<Col xs={12} md={12}>
									<Col xs={4} md={4}>
	                    				<Image src={home3}  alt="imgHome" circle className="imgViewCart"/>
									</Col>
									<Col xs={4} md={4}>
                    					<Thumbnail>
									        <h3 className="wColor">Computer</h3> &nbsp; <Glyphicon glyph="star" />
									        <p>Base CSS class and prefix for the component. Generally one should only change</p>
									        <p className="wColor">Free delivey</p>

									    </Thumbnail>
									</Col>
									<Col xs={4} md={4}>
                    					<Thumbnail >
									        <p className="wColor">Price: - $300.20
									        	<FormGroup controlId="formHorizontalEmail">
											      <Col componentClass={ControlLabel} sm={2}>
											        Qty
											      </Col>
											      <Col sm={3}>
											        <FormControl
									                    type="number" value={2} bsSize="sm"/>
									                <FormControl.Feedback />
											      </Col>
											    </FormGroup>
											</p>
											<br></br><br></br><br></br>

									        <p>
									          <Button bsStyle="info">Add to cart</Button>&nbsp;
									          <Button bsStyle="danger">Buy now</Button>
									        </p>
									        <br></br>
									        <p>
									            <Button href="/products">Continue shopping</Button>&nbsp;
									          	<Button bsStyle="info">Checkout</Button>
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

export default ViewCart;