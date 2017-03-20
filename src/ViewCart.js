import React, { Component } from 'react';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row,Image,Table,FormControl} from 'react-bootstrap';

var MyCart;

class ViewCart extends Component {

	constructor(props){
		super(props);
	}

    totalPrice(){
      MyCart.forEach(function(v) {
          var quantity = v.Productquantity;
      })
    }

	render(){
        MyCart = JSON.parse(localStorage.getItem("viewCart"));
		const cardItems = MyCart.map((number) =>
            <tbody key={number}>
                <td className="width25">
                    <Col md={12} className="wColor">
                        <Col md={6}>
                            <Image src={number.image}  alt="imgHome" className="imgViewCart"/>
                         </Col>
                        <Col  md={6}>
                            <h3>{number.ProductName}</h3>
                        </Col>       
                    </Col>        
                </td>
                <td className="width25">
                    <Col md={12} className="wColor">
                        <Col  md={12}>
                            <p>{number.Description}</p>
                        </Col>       
                    </Col>        
                </td>
                <td className="width15">
                    <Col md={12} className="wColor">
                        <Col  md={12}>
                            <p>Price: -{number.SalesPrice}</p>
                        </Col>       
                    </Col>        
                </td>
                <td className="width15">
                    <Col md={12} className="wColor">
                        <Col md={6}>
                            Qty
                        </Col> 
                        <Col md={6}>
                            <FormControl disabled
                                type="text" defaultValue={number.Productquantity} bsSize="sm"/>
                            <FormControl.Feedback />
                        </Col>      
                    </Col>        
                </td>
                <td className="width15">
                    <Col md={12} className="wColor">
                        <Col  md={12}>
                            <p>Total: - {number.Productquantity * number.SalesPrice}</p>
                        </Col>       
                    </Col>       
                </td>
            </tbody>
        );    
		return (
			<div className="main-app" onLoad={this.handledata}>
                <Header/> 
                <div id="content" className="main-content"> 
				   	<div className="login">
						<h2>View Cart</h2>
						<Table striped bordered condensed hover>
                            <thead>
                              <tr>
                                <th>my cart</th>
                              </tr>
                            </thead>
                            <tbody>
                                    {cardItems}
                             </tbody> 
                        </Table>      
							
						<Row className="show-grid wColor">
					      <Col mdOffset={10}>
					           <Col md={6}>
									Grand Total:
							    </Col> 
							    <Col md={6}>
							        <FormControl disabled
					                    type="text" value={160000} bsSize="sm"/>
					                <FormControl.Feedback />
							    </Col> 
					         </Col>
					    </Row>
                        <br></br><br></br><br></br>
                        <Row className="show-grid wColor">
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
