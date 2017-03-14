import React, { Component } from 'react';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row,Image,Table,FormControl} from 'react-bootstrap';
import home3 from './home3.jpg';

class ViewCart extends Component {

	render(){
		return (
			<div className="main-app">
                <Header/> 
                <div id="content" className="main-content"> 
				   	<div className="login">
						<h2>View Cart</h2>
						<Table striped bordered condensed hover>
						    <thead>
						      <tr>
						        <th>Product</th>
						        <th>Description</th>
						        <th>Price</th>
						        <th>Quantity</th>
						        <th>Total</th>
						      </tr>
						    </thead>
						    <tbody>
						      <tr>
						        <td className="width25">
						            <Col md={12} className="wColor">
						        		<Col  md={6}>
						        		    <Image src={home3}  alt="imgHome" className="imgViewCart"/>
                                         </Col>
						        		<Col  md={6}>
									        <h3>Computer</h3>
									    </Col>       
									</Col>        
						        </td>
						        <td className="width25">
						            <Col md={12} className="wColor">
						        		<Col  md={12}>
									        <p>Base CSS class and prefix for the component. ly change</p>
									    </Col>       
									</Col>        
						        </td>
						        <td className="width15">
						            <Col md={12} className="wColor">
						        		<Col  md={12}>
									        <p>Price: - $300.20</p>
									    </Col>       
									</Col>        
						        </td>
						        <td className="width15">
						            <Col md={12} className="wColor">
						        		<Col  md={6}>
									        Qty
									    </Col> 
									    <Col md={6}>
									        <FormControl
							                    type="text" value={1} bsSize="sm"/>
							                <FormControl.Feedback />
									    </Col>       
									</Col>        
						        </td>
						        <td className="width15">
						            <Col md={12} className="wColor">
						        		<Col  md={12}>
									        <p>Total: - 300</p>
									    </Col>       
									</Col>       
						        </td>
						      </tr>
						    </tbody>
						</Table>
						<Row className="show-grid" className="wColor">
					      <Col mdOffset={10}>
					           <Col md={6}>
									Grand Total:
							    </Col> 
							    <Col md={6}>
							        <FormControl
					                    type="text" value={300} bsSize="sm"/>
					                <FormControl.Feedback />
							    </Col> 
					         </Col>
					    </Row>
                        <br></br><br></br><br></br>
                        <Row className="show-grid" className="wColor">
					      <Col mdOffset={9}>
									<span>
							          <Button href="/products" type="submit" bsStyle="primary" >Continue Shopping</Button> &nbsp;
							          <Button href="/checkout" bsStyle="danger">Checkout</Button>
							        </span>
					         </Col>
					    </Row>
					</div>
				</div> 
            </div>
        );
	}
}

export default ViewCart;