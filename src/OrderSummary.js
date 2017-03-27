import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Header from './Home.js';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row, Image, Table, FormGroup, FormControl} from 'react-bootstrap';

//JSON url of shopping cart
var shoppingCart = 'https://api.myjson.com/bins/he9jr';
var allCartData = [];
var UserDetails = {};

class OrderSummary extends Component {

  componentWillMount(){
    if(JSON.parse(localStorage.getItem("LoggedUser"))){
        browserHistory.push('/OrderSummary')
    }
    else{
      browserHistory.push('/Login')
    }
  }

  // Handle order summary
  orderSave(){
    var uniqueID = new Date().getTime();
    localStorage.setItem('orderNumber', JSON.stringify(uniqueID));
    alert("your order details is saved check your Confirmation")
  }

  render(){
    return (
      <div className="main-app">
        <Header/>
        <div id="content" className="main-content">
          <div className="container">
            <ViewCart/>
            <FormGroup>
              <Col mdOffset={11} md={2}>
              <Button type="submit" bsStyle="primary" href="/OrderConfirmation" onClick={this.orderSave.bind(this)}>
              Save and continue
              </Button>
              </Col>
            </FormGroup>
          </div>
        </div>
      </div>
    );
  }
}

// Component of saved shopping cart
export class ViewCart extends Component {

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
      UserDetails = JSON.parse(localStorage.getItem("LoggedUser"))
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
        <Table responsive>
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
      </div>
    );
  }
}

export default OrderSummary;