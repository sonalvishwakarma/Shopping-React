import React, { Component } from 'react';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row,Table, Grid, ListGroup,ListGroupItem} from 'react-bootstrap';

class ViewCart extends Component {

	render(){
		return (
			<div className="main-app">
                <Header/> 
                <div id="content" className="main-content"> 
				   	<div className="login">
				   	<Grid>
					    <Row className="show-grid">
					      <Col xs={12} md={10}><h2>Invoice</h2></Col>
					      <Col xs={6} md={2}><h2>Order#12345</h2></Col>
					    </Row>
					</Grid>    
					<hr></hr>
					<Grid>
					    <Row className="show-grid">
					      <Col xs={12} md={10}>
					      	<h4>Billed To</h4>
					      	<p>7th main, 10th cross BTM 2nd stage</p>
					      	<p>Bangalore(KA)</p>
					      </Col>
					      <Col xs={6} md={2}>
					      	<h4>Shipped To</h4>
					      	<p>7th main, 10th cross BTM 2nd stage</p>
                            <p>Bangalore(KA)</p>
					      </Col>
					    </Row>
					</Grid> 
					<Grid>
					    <Row className="show-grid">
					      <Col xs={12} md={10}>
					      	<h4>Payment Method</h4>
					      	<p>visa ending***4258</p>
					      	<p>abc@gmail.com</p>
					      </Col>
					      <Col xs={6} md={2}>
					      	<h4>Order Date</h4>
					      	<p>March 14, 2017</p>
					      </Col>
					    </Row>
					</Grid> 

					<Grid>
					    <Row className="show-grid">
					      <Col xs={12} md={12}>
					      	<ListGroup>
							    <ListGroupItem  active>Order Summary</ListGroupItem>
							    	<Table responsive>
									    <thead>
									      <tr>
									        <th>#</th>
									        <th>Item</th>
									        <th>Price</th>
									        <th>Quantity</th>
									        <th>Totals</th>
									      </tr>
									    </thead>
									    <tbody>
									      <tr>
									        <td>1</td>
									        <td>Item-BS001 </td>
									        <td>$10.0 </td>
									        <td>1 </td>
									        <td>$10.0 </td>
									      </tr>
									      </tbody>
									</Table>  
									<hr>
									  </hr>
									<Grid>
					    				<Row className="show-grid">
									      <Col xs={12} mdOffset={8}>
									      	<h4>Subtotal :-  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>10.0</span></h4>
									      	<h4>Shipping Total :-  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>5.0</span></h4>
									      	<h4>Total :-  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>15.0</span></h4>
									      </Col>
									    </Row>
									</Grid>    
							  </ListGroup>
					      </Col>
					    </Row>
					</Grid> 

					</div>		
				</div> 
            </div>
        );
	}
} 

export default ViewCart;