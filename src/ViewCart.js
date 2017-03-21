import React, { Component } from 'react';
import Header from './Home.js';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row,Image,Table,FormControl} from 'react-bootstrap';
var shoppingCart = 'https://api.myjson.com/bins/he9jr';
var allCartData = [];

class ViewCart extends Component {

	constructor(props){
		super(props);
        this.state = {
            cart : [],
            grandTotal : 0
        }
	}

    componentDidMount(){
        this.getShppingCart();
    }

    getShppingCart(){
        fetch(shoppingCart)
        .then( (response) => {
            return response.json()
        })   
        .then(function(json){
            allCartData = json;
            var UserDetails = JSON.parse(localStorage.getItem("LoggedUser"))
            var userID =  UserDetails.UserID;
            
            var usersCart = json.filter(function(pro){
                return pro.UserId === userID;
            })

            var total = 0;
            usersCart.map((cart) => {
                total = total + parseInt(cart.Price);
            })

            this.setState({
              cart: usersCart,
              grandTotal : total
            });
        }.bind(this));
    }

    removeCart(cart){

        allCartData.forEach(function(car, index){
            if(car.CartId === cart.CartId){
                if(allCartData.length === 1){
                    var carts = allCartData.splice(0);
                }
                else{
                    var carts = allCartData.slice(index);
                }
                 fetch(shoppingCart, {  
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(carts)
                }).then(function(){
                    alert("Successfully deleted the product from your cart");
                    this.getShppingCart();
                }.bind(this))
            }
        }.bind(this))
    }

	render(){
        const cardItems = this.state.cart.map((number) =>
            <tr key={number.CartId}>
                <td className="width25">
                    <Col md={12} className="wColor">
                        <Col md={6}>
                            <Image src={number.Image}  alt="imgHome" className="imgViewCart"/>
                         </Col>
                        <Col  md={6}>
                            <h5>{number.ProductName}</h5>
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
                            <p>Price: - {number.Price}</p>
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
                                type="text" defaultValue={number.Quantity} bsSize="sm"/>
                            <FormControl.Feedback />
                            <Button  onClick={this.removeCart.bind(this, number)}>Remove</Button>
                        </Col>      
                    </Col>        
                </td>
                <td className="width15">
                    <Col md={12} className="wColor">
                        <Col  md={12}>
                            <p>Total: - {number.Quantity * number.Price}</p>
                        </Col>       
                    </Col>       
                </td>
            </tr>
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
                                <th colSpan="5">My cart</th>
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
                                        type="text" value={this.state.grandTotal} bsSize="sm"/>
                                    <FormControl.Feedback />
                                </Col> 
                             </Col>
                        </Row>
                        <br></br><br></br><br></br>
                        <Row className="show-grid wColor">
                            <Col mdOffset={9}>
                                <span>
                                  <Button href="/products" type="submit" bsStyle="primary" >Continue Shopping</Button> &nbsp;
                                  <Button href="/DeliveryAddress" bsStyle="danger">Checkout</Button>
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
