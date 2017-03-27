import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Header from './Home.js';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row,Table, Grid, ListGroup,ListGroupItem, FormControl} from 'react-bootstrap';

var shoppingCart = 'https://api.myjson.com/bins/he9jr';
var allCartData = [];

class MyOrder extends Component {

  componentWillMount(){
    if(JSON.parse(localStorage.getItem("LoggedUser"))){
        browserHistory.push('/MyOrder')
    }
    else{
      browserHistory.push('/Login')
    }
  }

	render(){
		var orderNumbers = JSON.parse(localStorage.getItem("orderNumber")) 
		var UserDetails = JSON.parse(localStorage.getItem("LoggedUser"))

		var dateObj = new Date();
		var month = dateObj.getUTCMonth() + 1;
		var day = dateObj.getUTCDate();
		var year = dateObj.getUTCFullYear();

		var newdate =  day+ "/" + month + "/" + year;

		return (
      <div className="main-app">
        <Header/>
        <div id="content" className="main-content">
          <div className="container">
            <Grid>
              <Row className="show-grid">
                <Col md={9}>
                  <h2>Invoice</h2>
                </Col>
                <Col md={3}>
                  <h2>Order#{orderNumbers}</h2>
                </Col>
              </Row>
              <hr>
              </hr>
              <Row className="show-grid">
                <Col xs={12} md={10}>
                  <h4>Billed To</h4>
                  <p>{UserDetails.Address1}</p>
                  <p>Bangalore(KA)</p>
                </Col>
                <Col xs={6} md={2}>
                  <h4>Shipped To</h4>
                  <p>{UserDetails.Address1}</p>
                  <p>Bangalore(KA)</p>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={12} md={10}>
                <h4>Payment Method</h4>
                  <p>visa ending***4258</p>
                  <p>{UserDetails.EmailID}</p>
                </Col>
                <Col xs={6} md={2}>
                  <h4>Order Date</h4>
                  <p>{newdate}</p>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={12} md={12}>
                <ListGroup>
                  <ListGroupItem  active>Order Summary</ListGroupItem>
                  <ViewCart/>
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
      var getUserId = JSON.parse(localStorage.getItem("LoggedUser"))
      var userID =  getUserId.UserID;

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
          <Col  md={12}>
          <p>{number.ProductName}</p>
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
              <th colSpan="5">#</th>
            </tr>
          </thead>
          <tbody>
            {cardItems}
          </tbody>
        </Table>
        <hr>
        </hr>   
        <Row className="show-grid wColor">
          <Col mdOffset={10}>
          <Col md={6}>
          Grand Total:
          </Col> 
          <Col md={6} >
          <span className="wColor">{this.state.grandTotal}</span>
          </Col> 
          </Col>
        </Row>
        <hr>
        </hr>  
      </div>
    );
  }
}

export default MyOrder;