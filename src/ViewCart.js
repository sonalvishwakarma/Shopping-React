import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Header from './Home.js';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row,Image,Table,FormControl} from 'react-bootstrap';

//JSON url of shopping cart
var shoppingCart = 'https://api.myjson.com/bins/he9jr';
var allCartData = [];
var shoppingcount;
class ViewCart extends Component {

	constructor(props){
	  super(props);
    this.state = {
      cart : [],
      grandTotal : 0,
      carts : [],
      Quantity : 1,
      showComponent : false
    }
	}

  componentWillMount(){
    if(JSON.parse(localStorage.getItem("LoggedUser"))){
      browserHistory.push('/ViewCart')
    }
    else{
      browserHistory.push('/Login')
    }
  }

  componentDidMount(){
    this.getShppingCart();
  }

  HandleQuantity(event){
    this.setState({Quantity: event.target.value});
  }
  
  // Getting added product from shopping cart
  getShppingCart(){
    fetch(shoppingCart)
    .then( (response) => {
      return response.json()
    })   
    .then(function(json){
      allCartData = json;
      shoppingcount = allCartData.length;
      localStorage.setItem('count', JSON.stringify(shoppingcount));
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
    
    // Handle remove the product from the shopping cart
  removeCart(cart){

    allCartData.forEach(function(car, index){

      if(car.CartId === cart.CartId){
       this.state.carts = allCartData.slice(index);
       allCartData.pop(this.state.carts);

       fetch(shoppingCart, {  
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(allCartData)
      }).then(function(){
        shoppingcount = allCartData.length;
        localStorage.setItem('count', JSON.stringify(shoppingcount));
        this.setState({
          showComponent: true,
        });
          browserHistory.push('/products')
          browserHistory.push('/ViewCart')
        alert("Successfully deleted the product from your cart");
        this.getShppingCart();
        }.bind(this));
      }
    }.bind(this));
  }

	render(){
    
    const cardItems = this.state.cart.map((c) =>
      <tr key={c.CartId}>
        <td className="width25">
          <Col md={12} className="wColor">
            <Col md={6}>
              <Image src={c.Image}  alt="imgHome" className="imgViewCart"/>
            </Col>
            <Col  md={6}>
              <h5>{c.ProductName}</h5>
            </Col>       
          </Col>        
        </td>
        <td className="width25">
          <Col md={12} className="wColor">
            <Col  md={12}>
              <p>{c.Description}</p>
            </Col>       
          </Col>        
        </td>
        <td className="width15">
          <Col md={12} className="wColor">
            <Col  md={12}>
              <p>Price: - {c.Price}</p>
            </Col>       
          </Col>        
        </td>
        <td className="width15">
          <Col md={12} className="wColor">
            <Col md={6}>
              Qty
            </Col> 
            <Col md={8}>
              <FormControl
                type="Number" defaultValue={c.Quantity || this.state.Quantity} bsSize="sm" min="1" onChange={this.HandleQuantity.bind(this)}/>
              <FormControl.Feedback />
              <span>
                <Button bsStyle="danger" onClick={this.removeCart.bind(this, c)}>Remove</Button>
              </span>
            </Col>      
          </Col>        
        </td>
        <td className="width15">
          <Col md={12} className="wColor">
            <Col  md={12}>
              {/*{c.Quantity!== '' ?(<p>Total:-{c.Quantity * c.Price}</p>):(<p>Total:-{this.state.Quantity * c.Price}</p>)}*/}
              <p>Total:-{this.state.Quantity * c.Price}</p>
            </Col>       
          </Col>       
        </td>
      </tr>
    );    
    return (
      <div className="main-app">
        <Header/> 
        <div id="content" className="main-content"> 
          <div className="container">
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
                    Grand Total: -
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
