import React, { Component } from 'react';
import Header from './Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row,Image,Table} from 'react-bootstrap';

var shoppingCart = 'https://api.myjson.com/bins/he9jr';
var productApi = 'https://api.myjson.com/bins/y9d9b';
var viewCart = [];

class ViewCart extends Component {

	constructor(props){
		super(props)
		this.state ={
			Productquantity : '',
            mycart : [],
            productList : [],
            viewCart : []
		};
		this.getData()
		this.getProducts()

		this.handledata = this.handledata.bind(this)
	}

    getData(){
        fetch(shoppingCart)
        .then( (response) => {
            return response.json()
        })   
        .then( (json) => {
            this.setState({
            	mycart : json
            })
            console.log(json,"cart")
        });
    }

    getProducts(){
        fetch(productApi)
        .then( (response) => {
            return response.json()
        })   
        .then( (json) => {
            this.setState({
            	productList : json
            })
            console.log(json,"products")
        });
    }

    componentDidMount() {
        setTimeout( this.handledata, 1000 );
    }
   
    handledata(){
    	var _this = this;
    	this.setState({
    			viewCart : viewCart
    		})
    	this.state.mycart.filter(function (value) {
         	_this.state.productList.map(function (prod) {
            	if(value.ProductId === prod.ProductID){
            		_this.state.viewCart.push(prod)
            		console.log(viewCart,"viewCart")
            	}
        	})
	    })
    }

    handleProductQty(event) {
		this.setState({Productquantity: event.target.value});
	}

	render(){
		const _this = this;
		const cardItems = _this.state.viewCart.map((number) =>
			
			    <tbody>
			       <tr key={number.ProductID}>
			        <td className="width25">
			            <Col md={12} className="wColor">
			        		<Col  md={6}>
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
			       {/* <td className="width15">
			            <Col md={12} className="wColor">
			        		<Col  md={6}>
						        Qty
						    </Col> 
						    <Col md={6}>
						        <FormControl
				                    type="text" value={1} bsSize="sm" readOnly/>
				                <FormControl.Feedback />
						    </Col>       
						</Col>        
			        </td>*/}
			        <td className="width15">
			            <Col md={12} className="wColor">
			        		<Col  md={12}>
						        <p>Total: - 300</p>
						    </Col>       
						</Col>       
			        </td>
			      </tr>
			    </tbody>
			
		);	

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
		             			 	{cardItems}
						     </tbody> 
						</Table>    
							
						<Row className="show-grid wColor">
					      <Col mdOffset={10}>
					           <Col md={6}>
									Grand Total:
							    </Col> 
							    <Col md={6}>
							        {/*<FormControl
					                    type="text" value={300} bsSize="sm"/>
					                <FormControl.Feedback />*/}
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
